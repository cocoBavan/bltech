"use client";
import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;
    let mouseType = window.getComputedStyle(target).getPropertyValue("cursor");
    setIsPointer(mouseType === "pointer");
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 cursor-bg">
      {/* <div
        className={`mouse-cursor cursor-outer ${
          isPointer ? "cursor-hover" : ""
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div> */}
      <div
        className={`mouse-cursor cursor-inner z-[10] ${
          isPointer ? "cursor-hover" : ""
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
};

export default CustomCursor;
