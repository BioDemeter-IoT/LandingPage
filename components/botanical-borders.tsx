'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BotanicalBorders() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const leafVariants = {
    float: (i: number) => ({
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    }),
  }

  const leaves = [
    // Top left corner
    { id: 1, x: 10, y: 10, size: 40, rotate: -45, delay: 0 },
    { id: 2, x: 30, y: 5, size: 30, rotate: 20, delay: 0.5 },
    { id: 3, x: 50, y: 15, size: 35, rotate: -20, delay: 1 },
    // Top right corner
    { id: 4, x: '90%', y: 10, size: 38, rotate: 45, delay: 0.2 },
    { id: 5, x: '85%', y: 25, size: 32, rotate: -30, delay: 0.7 },
    { id: 6, x: '95%', y: 35, size: 36, rotate: 15, delay: 1.2 },
    // Bottom left corner
    { id: 7, x: 15, y: '85%', size: 42, rotate: -50, delay: 0.4 },
    { id: 8, x: 40, y: '90%', size: 34, rotate: 25, delay: 0.9 },
    { id: 9, x: 25, y: '75%', size: 38, rotate: -15, delay: 1.5 },
    // Bottom right corner
    { id: 10, x: '88%', y: '80%', size: 40, rotate: 40, delay: 0.3 },
    { id: 11, x: '92%', y: '90%', size: 33, rotate: -35, delay: 0.8 },
    { id: 12, x: '80%', y: '85%', size: 37, rotate: 20, delay: 1.3 },
  ]

  if (!mounted) {
    return null
  }

  return (
    <>
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="fixed pointer-events-none"
          style={{
            left: typeof leaf.x === 'number' ? `${leaf.x}px` : leaf.x,
            top: typeof leaf.y === 'number' ? `${leaf.y}px` : leaf.y,
            zIndex: 0,
          }}
          variants={leafVariants}
          custom={leaf.id}
          initial={{ opacity: 0, scale: 0 }}
          animate="float"
          transition={{ delay: leaf.delay, duration: 0.8 }}
        >
          <LeafIcon size={leaf.size} rotate={leaf.rotate} />
        </motion.div>
      ))}
    </>
  )
}

interface LeafIconProps {
  size: number
  rotate: number
}

function LeafIcon({ size, rotate }: LeafIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, opacity: 0.7 }}
    >
      {/* Monstera-style leaf */}
      <g>
        <path
          d="M 50 10 Q 60 15 65 30 Q 70 45 65 60 Q 60 75 50 85 Q 40 75 35 60 Q 30 45 35 30 Q 40 15 50 10"
          fill="#4a7c59"
          fillOpacity="0.8"
        />
        {/* Leaf vein */}
        <path
          d="M 50 10 Q 52 35 50 60 Q 48 75 50 85"
          stroke="#2d5a3d"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Side veins */}
        <path
          d="M 45 25 Q 38 30 35 40"
          stroke="#2d5a3d"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 55 25 Q 62 30 65 40"
          stroke="#2d5a3d"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 42 50 Q 32 55 30 65"
          stroke="#2d5a3d"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 58 50 Q 68 55 70 65"
          stroke="#2d5a3d"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </g>
    </svg>
  )
}
