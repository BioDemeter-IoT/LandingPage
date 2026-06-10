'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export function MockupsSection() {
  const t = useTranslations()

  const features = [
    {
      title: t('sections.mockups.responsive'),
      description: 'Optimizado para todos los tamaños de pantalla'
    },
    {
      title: t('sections.mockups.intuitive'),
      description: 'Interfaz simple y fácil de usar'
    },
    {
      title: t('sections.mockups.botanical'),
      description: 'Diseño natural y relajante'
    },
    {
      title: t('sections.mockups.realtime'),
      description: 'Datos en tiempo real de sensores IoT'
    },
  ]

  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            {t('sections.mockups.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t('sections.mockups.subtitle')}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-secondary/50 border border-border/50 hover:border-border transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
