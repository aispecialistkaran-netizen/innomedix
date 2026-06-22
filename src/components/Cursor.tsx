"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth lerping of cursor coordinates
    const tick = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      if (cursor) {
        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
      }
      requestAnimationFrame(tick);
    };

    tick();

    // Event listeners to handle interactive states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Expand and show "VIEW" on interactive images/cards
      if (
        target.closest("[data-cursor='view']") ||
        target.closest("a > img") ||
        target.closest(".interactive-card")
      ) {
        cursor.classList.add("hovered");
        cursor.classList.remove("drag");
      } 
      // Expand and show "DRAG" on slidable elements
      else if (target.closest("[data-cursor='drag']") || target.closest(".slider-container")) {
        cursor.classList.add("drag");
        cursor.classList.remove("hovered");
      } 
      // Enlarged dot for normal links/buttons
      else if (
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")
      ) {
        cursor.classList.add("hovered");
        cursor.classList.remove("drag");
        // Remove text in hovered class for simple links if desired, or let the CSS handle it.
      } else {
        cursor.classList.remove("hovered", "drag");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}
