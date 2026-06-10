'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface DeviceMockupProps {
  image: string
  device: 'iphone' | 'ipad' | 'desktop'
  alt: string
}

export function DeviceMockup({ image, device, alt }: DeviceMockupProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  if (device === 'iphone') {
    return (
      <motion.div
        className="relative inline-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* iPhone Frame */}
        <div className="relative w-64 mx-auto">
          {/* Outer black bezel */}
          <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl z-20"></div>

            {/* Screen */}
            <div className="bg-white rounded-2xl overflow-hidden aspect-[9/19.5] relative">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                quality={95}
              />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (device === 'ipad') {
    return (
      <motion.div
        className="relative inline-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* iPad Frame */}
        <div className="relative w-96">
          {/* Outer frame */}
          <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl">
            {/* Screen */}
            <div className="bg-white rounded-lg overflow-hidden aspect-[4/3] relative">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                quality={95}
              />
            </div>

            {/* Home button indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Desktop
  return (
    <motion.div
      className="relative inline-block"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Desktop Frame */}
      <div className="relative">
        {/* Monitor body */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          {/* Bezels */}
          <div className="bg-gray-950 p-4">
            <div className="bg-white rounded overflow-hidden aspect-[16/10] relative">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                quality={95}
              />
            </div>
          </div>

          {/* Stand */}
          <div className="h-2 bg-gray-800"></div>
          <div className="h-1 bg-gray-900 rounded-b-lg"></div>
        </div>

        {/* Monitor stand base */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-full blur-md opacity-40"></div>
      </div>
    </motion.div>
  )
}
