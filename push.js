const fs = require('fs');
const { execSync } = require('child_process');

try {
  if (!fs.existsSync('.env')) {
    console.error('Error: .env file does not exist.');
    process.exit(1);
  }

  const envContent = fs.readFileSync('.env', 'utf8');
  const env = {};
  envContent.split(/\r?\n/).forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let key = match[1];
      let value = match[2] || '';
      // Remove surrounding quotes if any
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      env[key] = value.trim();
    }
  });

  const token = env.github_token;
  const repo = env.github_repo;

  if (!token || !repo) {
    console.error('Error: github_token or github_repo not found in .env file.');
    process.exit(1);
  }

  // Format repo URL with token
  // e.g. https://github.com/username/repo.git -> https://<token>@github.com/username/repo.git
  const cleanRepo = repo.replace(/^https?:\/\//, '');
  const authenticatedUrl = `https://${token}@${cleanRepo}`;

  console.log('Configuring git remote with token...');
  try {
    execSync('git remote remove origin', { stdio: 'ignore' });
  } catch (e) {
    // ignore if remote doesn't exist
  }
  
  execSync(`git remote add origin ${authenticatedUrl}`, { stdio: 'inherit' });

  console.log('Ensuring all changes are committed...');
  execSync('git add -A', { stdio: 'inherit' });
  
  let hasChanges = true;
  try {
    execSync('git diff-index --quiet HEAD --', { stdio: 'ignore' });
    hasChanges = false;
  } catch (e) {
    hasChanges = true;
  }

  if (hasChanges) {
    console.log('Committing changes...');
    execSync('git commit -m "chore: sync latest changes"', { stdio: 'inherit' });
  } else {
    console.log('No new changes to commit.');
  }

  console.log('Pushing main branch to remote repository...');
  execSync('git push -u origin main --force', { stdio: 'inherit' });
  console.log('Push completed successfully.');
} catch (error) {
  console.error('An error occurred:', error.message);
  process.exit(1);
}
