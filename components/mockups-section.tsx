'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { DeviceMockup } from './device-mockup'

export function MockupsSection() {
  const t = useTranslations('sections.mockups')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-lime-50/20">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-sage/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-lime-100/20 blur-3xl"></div>

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16 md:mb-24" variants={itemVariants}>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-sage to-lime-600 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-center justify-items-center">
          {/* Mobile Mockup */}
          <motion.div
            className="w-full flex justify-center"
            variants={itemVariants}
          >
            <div className="text-center">
              <DeviceMockup
                device="iphone"
                image="/mockup-mobile.png"
                alt="PlantSync Mobile App"
              />
              <p className="mt-6 font-medium text-sage text-sm">{t('mobile')}</p>
            </div>
          </motion.div>

          {/* Desktop Mockup - Center */}
          <motion.div
            className="w-full flex justify-center lg:col-span-1 order-first lg:order-none"
            variants={itemVariants}
          >
            <div className="text-center">
              <DeviceMockup
                device="desktop"
                image="/mockup-dashboard.png"
                alt="PlantSync Dashboard"
              />
              <p className="mt-6 font-medium text-sage text-sm">{t('dashboard')}</p>
            </div>
          </motion.div>

          {/* Tablet Mockup */}
          <motion.div
            className="w-full flex justify-center"
            variants={itemVariants}
          >
            <div className="text-center">
              <DeviceMockup
                device="ipad"
                image="/mockup-guide.png"
                alt="PlantSync Guide"
              />
              <p className="mt-6 font-medium text-sage text-sm">{t('tablet')}</p>
            </div>
          </motion.div>
        </div>

        {/* Features highlight */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            { icon: '📱', label: t('responsive') },
            { icon: '🎨', label: t('intuitive') },
            { icon: '🌱', label: t('botanical') },
            { icon: '⚡', label: t('realtime') },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-sage/10 hover:bg-white/60 transition-colors"
              variants={itemVariants}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <p className="text-sm font-medium text-foreground">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
