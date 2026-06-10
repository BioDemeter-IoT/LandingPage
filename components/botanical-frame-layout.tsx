'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function BotanicalFrameLayout() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Array de hojas con posiciones y tamaños
  const leaves = [
    // Top left corner
    { id: 1, src: '/leaf-realistic-1.png', style: 'top-0 left-0', size: 'w-48 h-48', rotate: '-rotate-45', opacity: 'opacity-70' },
    { id: 2, src: '/leaf-palm.png', style: 'top-12 left-32', size: 'w-32 h-32', rotate: 'rotate-12', opacity: 'opacity-60' },
    { id: 3, src: '/leaf-eucalyptus.png', style: 'top-32 left-8', size: 'w-40 h-40', rotate: '-rotate-20', opacity: 'opacity-65' },

    // Top right corner
    { id: 4, src: '/leaf-banana.png', style: 'top-0 right-0', size: 'w-56 h-56', rotate: 'rotate-60', opacity: 'opacity-70' },
    { id: 5, src: '/leaf-realistic-2.png', style: 'top-20 right-40', size: 'w-36 h-36', rotate: '-rotate-30', opacity: 'opacity-55' },
    { id: 6, src: '/leaf-philodendron.png', style: 'top-40 right-12', size: 'w-44 h-44', rotate: 'rotate-25', opacity: 'opacity-60' },

    // Bottom left corner
    { id: 7, src: '/leaf-fern-large.png', style: 'bottom-0 left-0', size: 'w-52 h-52', rotate: '-rotate-15', opacity: 'opacity-65' },
    { id: 8, src: '/leaf-realistic-3.png', style: 'bottom-20 left-48', size: 'w-40 h-40', rotate: 'rotate-35', opacity: 'opacity-60' },
    { id: 9, src: '/leaf-eucalyptus.png', style: 'bottom-32 left-20', size: 'w-36 h-36', rotate: '-rotate-50', opacity: 'opacity-55' },

    // Bottom right corner
    { id: 10, src: '/leaf-banana.png', style: 'bottom-0 right-0', size: 'w-60 h-60', rotate: 'rotate-45', opacity: 'opacity-70' },
    { id: 11, src: '/leaf-palm.png', style: 'bottom-24 right-32', size: 'w-44 h-44', rotate: '-rotate-20', opacity: 'opacity-60' },
    { id: 12, src: '/leaf-realistic-1.png', style: 'bottom-40 right-12', size: 'w-48 h-48', rotate: 'rotate-60', opacity: 'opacity-65' },

    // Middle sides - left
    { id: 13, src: '/leaf-philodendron.png', style: 'top-1/2 -translate-y-1/2 left-0', size: 'w-40 h-40', rotate: 'rotate-15', opacity: 'opacity-50' },
    
    // Middle sides - right
    { id: 14, src: '/leaf-fern-large.png', style: 'top-1/2 -translate-y-1/2 right-0', size: 'w-44 h-44', rotate: '-rotate-25', opacity: 'opacity-55' },
  ]

  return (
    <>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`fixed ${leaf.style} ${leaf.size} pointer-events-none z-0 ${leaf.opacity} -translate-x-1/2`}
          style={{ right: leaf.style.includes('right') ? '0' : 'auto', left: leaf.style.includes('left') ? '0' : 'auto' }}
        >
          <Image
            src={leaf.src}
            alt={`Leaf decoration ${leaf.id}`}
            fill
            className={`object-contain ${leaf.rotate}`}
            priority={leaf.id <= 4}
          />
        </div>
      ))}
    </>
  )
}
