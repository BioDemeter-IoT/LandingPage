"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Camera, Wifi, Brain, ArrowRight } from "lucide-react"

const stepIcons = {
  register: Camera,
  connect: Wifi,
  guide: Brain,
} as const

export function HowItWorksSection() {
  const t = useTranslations("howItWorks")

  const steps = ["register", "connect", "guide"] as const

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium text-secondary-foreground mb-6">
            <Wifi className="w-4 h-4 text-accent" />
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}{t("titleHighlight")}
            </span>
          </h2>
        </motion.div>

        {/* Steps flow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-highlight/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = stepIcons[step]
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Step card */}
                  <div className="relative bg-card rounded-3xl p-8 lg:p-10 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 z-10">
                      <span className="text-lg font-bold text-primary-foreground">
                        {t(`steps.${step}.number`)}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>

                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                        {t(`steps.${step}.title`)}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`steps.${step}.description`)}
                      </p>
                    </div>

                    {/* Arrow to next step */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                        <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-5 h-5 text-accent" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Visual flow indicator for mobile */}
        <div className="lg:hidden flex justify-center mt-8 gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === steps.length - 1
                  ? "w-8 bg-accent"
                  : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
