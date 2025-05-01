"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';

const images = [
  {
    src: '/stem-labs-bkt-campus.webp',
    caption: 'STEM Labs'
  },
  {
    src: '/curriculam-bkt-campus.webp',
    caption: 'Curriculum'
  },
  {
    src: '/infrastructure-BKT-campus.webp',
    caption: 'Infrastructure'
  },
  {
    src: '/sports-bkt-campus.webp',
    caption: 'Sports'
  },
  {
    src: '/beyond-classroom-bkt-campus.webp',
    caption: 'Beyond Classroom'
  },
  {
    src: '/the-gurukul-hub-bkt-campus.webp',
    caption: 'The Gurukul Hub'
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const isDragging = useRef(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    gsap.to(trackRef.current, {
      x: `-${index * (100 / 3)}%`,
      duration: 1,
      ease: 'power3.inOut',
    });
  }, [index]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) nextSlide();
    if (info.offset.x > 50) setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full overflow-hidden max-w-6xl mx-auto bg-white py-4">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => isDragging.current = true}
        onDragEnd={(e, info) => {
          isDragging.current = false;
          handleDragEnd(e, info);
        }}
        ref={trackRef}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full sm:min-w-1/2 lg:min-w-1/3 flex flex-col items-center px-2">
            <Image 
              src={img.src} 
              alt={img.caption} 
              width={280}  // Slightly decreased size
              height={180}  // Slightly decreased size
              className="rounded-xl object-cover w-full h-auto"
            />
            <p className="mt-2 text-md font-semibold text-green-500 text-center">{img.caption}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
