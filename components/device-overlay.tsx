"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function DeviceMockupOverlay() {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Laptop - Base */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl"
      >
        <div className="relative">
          {/* Laptop frame */}
          <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-8 border-slate-800">
            <div className="bg-slate-700 h-2" /> {/* Top bezel */}
            <div className="relative bg-white aspect-video">
              <Image
                src="/mockup-web-screen.png"
                alt="Web Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 h-6" /> {/* Bottom bezel with keyboard suggestion */}
          </div>
          {/* Laptop stand */}
          <div className="flex justify-center gap-24 px-16 -mt-1">
            <div className="w-1 h-3 bg-slate-700" />
            <div className="w-1 h-3 bg-slate-700" />
          </div>
        </div>
      </motion.div>

      {/* iPhone - Overlaid */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 bottom-0 lg:right-20 lg:bottom-20 w-[200px] lg:w-[280px] z-20"
      >
        <div className="relative">
          {/* iPhone frame */}
          <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />
            
            {/* Screen */}
            <div className="relative bg-white aspect-[9/19.5]">
              <Image
                src="/mockup-app-screen.png"
                alt="Mobile App"
                fill
                className="object-cover"
              />
            </div>

            {/* Home indicator */}
            <div className="flex justify-center pb-2 bg-black">
              <div className="w-32 h-1 bg-gray-800 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
