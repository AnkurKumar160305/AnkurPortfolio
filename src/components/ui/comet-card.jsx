"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 15,
  translateDepth = 15,
  className,
  children
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Added damping and stiffness to ensure movement is smooth but "tight" (prevents jitter blur)
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [`${translateDepth}px`, `-${translateDepth}px`]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [`${translateDepth}px`, `-${translateDepth}px`]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className={cn("relative", className)} 
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          transformStyle: "preserve-3d",
          /* CRITICAL FIXES FOR BLUR */
          backfaceVisibility: "hidden", 
          WebkitFontSmoothing: "antialiased"
        }}
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.02, // Kept subtle to prevent pixel distortion
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        // willChange improves performance and prevents the "snap" to blur
        className="relative rounded-2xl will-change-transform"
      >
        {/* Transparent wrapper to prevent content overflow from causing jitter */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
};