"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Heart, Clock, Sparkles, Leaf } from "lucide-react"

const benefitIcons = {
  stress: Heart,
  routine: Clock,
  connection: Sparkles,
  nature: Leaf,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function BenefitsSection() {
  const t = useTranslations("benefits")

  const benefits = [
    { key: "stress" as const, color: "from-pink-500/20 to-rose-500/20" },
    { key: "routine" as const, color: "from-blue-500/20 to-cyan-500/20" },
    { key: "connection" as const, color: "from-violet-500/20 to-purple-500/20" },
    { key: "nature" as const, color: "from-accent/20 to-highlight/20" },
  ]

  return (
    <section id="benefits" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-sm font-medium text-secondary-foreground mb-6">
            <Heart className="w-4 h-4 text-pink-500" />
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}{t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[benefit.key]
            return (
              <motion.div
                key={benefit.key}
                variants={itemVariants}
                className={`group relative p-8 lg:p-10 rounded-3xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    {t(`items.${benefit.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`items.${benefit.key}.description`)}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-foreground" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
