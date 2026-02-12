"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-serif" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-6 mb-20 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot and Year */}
              <div className="relative md:w-1/4 flex justify-center md:justify-start">
                <div className="absolute md:top-0 top-0 md:left-1/2 transform -translate-x-1/2 md:translate-x-0 w-5 h-5 rounded-full bg-purple-500 dark:bg-purple-400 border-2 border-gray-400 dark:border-gray-600"></div>
                <h3 className="mt-6 md:mt-0 text-lg md:text-2xl font-semibold text-purple-600 dark:text-purple-400 text-center md:text-left">
                  {item.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="relative md:w-3/4">{item.content}</div>
            </div>
          );
        })}

        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-600">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-indigo-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
