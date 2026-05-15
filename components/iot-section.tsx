"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import {
  Droplets,
  Thermometer,
  Sun,
  Zap,
  Activity,
  Bell,
  History,
  Smartphone,
  Cpu,
} from "lucide-react"

const metricIcons = {
  humidity: Droplets,
  temperature: Thermometer,
  light: Sun,
  actuators: Zap,
} as const

const featureIcons = {
  realtime: Activity,
  alerts: Bell,
  history: History,
  control: Smartphone,
} as const

export function IoTSection() {
  const t = useTranslations("iot")

  const metrics = ["humidity", "temperature", "light", "actuators"] as const
  const features = ["realtime", "alerts", "history", "control"] as const

  return (
    <section id="iot" className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="iot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" className="text-accent/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#iot-grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-medium text-cyan-700 dark:text-cyan-400 mb-6">
            <Cpu className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">
              {" "}{t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: IoT Ecosystem Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-dashed border-cyan-500/30"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 lg:w-44 lg:h-44 rounded-full border-2 border-dashed border-teal-500/30"
                />
              </div>

              {/* Central device */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-2xl shadow-cyan-500/30 flex items-center justify-center">
                  <Cpu className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                </div>
              </div>

              {/* Orbiting sensors */}
              {metrics.map((metric, index) => {
                const Icon = metricIcons[metric]
                const angle = (index * 90) - 45
                const radius = 45
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180)

                return (
                  <motion.div
                    key={metric}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute w-14 h-14 lg:w-16 lg:h-16"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full glass rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-cyan-600" />
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Data flow lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {metrics.map((_, index) => {
                  const angle = (index * 90) - 45
                  const endX = 50 + 45 * Math.cos((angle * Math.PI) / 180)
                  const endY = 50 + 45 * Math.sin((angle * Math.PI) / 180)

                  return (
                    <motion.line
                      key={index}
                      x1="50"
                      y1="50"
                      x2={endX}
                      y2={endY}
                      stroke="url(#iot-gradient)"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    />
                  )
                })}
                <defs>
                  <linearGradient id="iot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Animated data particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Metrics cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {metrics.map((metric, index) => {
                const Icon = metricIcons[metric]
                return (
                  <motion.div
                    key={metric}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {t(`metrics.${metric}.title`)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(`metrics.${metric}.description`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Features tags */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => {
                const Icon = featureIcons[feature]
                return (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-medium text-cyan-700 dark:text-cyan-400"
                  >
                    <Icon className="w-4 h-4" />
                    {t(`features.${feature}`)}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
