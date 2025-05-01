"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const images = [
  { src: '/stem-labs-bkt-campus.webp', caption: 'STEM Labs' },
  { src: '/curriculam-bkt-campus.webp', caption: 'Curriculum' },
  { src: '/infrastructure-BKT-campus.webp', caption: 'Infrastructure' },
  { src: '/sports-bkt-campus.webp', caption: 'Sports' },
  { src: '/beyond-classroom-bkt-campus.webp', caption: 'Beyond Classroom' },
  { src: '/the-gurukul-hub-bkt-campus.webp', caption: 'The Gurukul Hub' },
];

export default function Carousel() {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(300); // Default
  const angleStep = 360 / images.length;

  useEffect(() => {
    // Dynamically set radius based on container width
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setRadius(width / 2.2); // Adjust as needed
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let angle = 0;

    const rotate = gsap.to({}, {
      repeat: -1,
      duration: 0.01,
      onRepeat: () => {
        angle += 0.2;
        el.style.transform = `rotateY(${angle}deg)`;
      },
    });

    return () => rotate.kill();
  }, []);

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-8">
        Our Facilities
      </h2>
      <div
        ref={containerRef}
        className="relative w-[90vw] max-w-[500px] aspect-square"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={carouselRef}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((item, index) => {
            const angle = angleStep * index;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                }}
              >
                <div className="inline-block w-[60vw] max-w-[200px]">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                  <p className="mt-2 text-xs sm:text-sm font-medium text-green-600">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
