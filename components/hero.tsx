"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight, Play, Droplets, Thermometer, Sun, Calendar, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

function FloatingWidget({
  icon: Icon,
  label,
  value,
  delay,
  className,
}: {
  icon: React.ElementType
  label: string
  value: string
  delay: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`glass rounded-2xl p-4 shadow-xl shadow-primary/5 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-sm font-semibold text-foreground">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

function FloatingLeaf({ delay, className }: { delay: number; className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="w-8 h-8 text-accent/40" />
      </motion.div>
    </motion.div>
  )
}

function DataParticle({ delay, className }: { delay: number; className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 3, delay, repeat: Infinity }}
      className={`absolute w-2 h-2 rounded-full bg-highlight ${className}`}
    />
  )
}

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen overflow-hidden gradient-organic pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-highlight/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Floating leaves */}
        <FloatingLeaf delay={0.5} className="top-32 left-[15%]" />
        <FloatingLeaf delay={0.8} className="top-48 right-[20%]" />
        <FloatingLeaf delay={1.1} className="bottom-40 left-[25%]" />
        <FloatingLeaf delay={1.4} className="bottom-32 right-[15%]" />
        
        {/* Data particles */}
        <DataParticle delay={0} className="top-40 left-[30%]" />
        <DataParticle delay={0.5} className="top-60 right-[35%]" />
        <DataParticle delay={1} className="bottom-48 left-[40%]" />
        <DataParticle delay={1.5} className="bottom-60 right-[30%]" />
        <DataParticle delay={2} className="top-1/2 left-[20%]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                by BioPafi
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance">
              <span className="text-foreground">{t("title")}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-highlight">
                {t("titleHighlight")}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/35 transition-all text-base px-8 py-6"
              >
                <a href="#pricing" className="gap-2">
                  {t("cta")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-border hover:bg-secondary/50 text-base px-8 py-6 gap-2"
              >
                <a href="#how-it-works">
                  <Play className="w-4 h-4" />
                  {t("ctaSecondary")}
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "10k+", label: "Plantas" },
                { value: "5k+", label: "Usuarios" },
                { value: "99%", label: "Uptime" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Plant Visual */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-highlight/20 rounded-full blur-2xl" />
              
              {/* Plant illustration container */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-secondary via-muted to-secondary border-4 border-border/50 shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Leaf className="w-24 h-24 lg:w-32 lg:h-32 text-accent mx-auto" />
                      <p className="mt-4 text-lg font-semibold text-foreground">Monstera</p>
                      <p className="text-sm text-muted-foreground">Healthy</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Widgets */}
              <div className="absolute top-0 left-0 -translate-x-4 animate-float">
                <FloatingWidget
                  icon={Droplets}
                  label={t("widgets.humidity")}
                  value="65%"
                  delay={0.8}
                />
              </div>

              <div className="absolute top-1/4 right-0 translate-x-4 animate-float-slow">
                <FloatingWidget
                  icon={Thermometer}
                  label={t("widgets.temperature")}
                  value="22°C"
                  delay={1.0}
                />
              </div>

              <div className="absolute bottom-1/4 left-0 -translate-x-8 animate-float-fast">
                <FloatingWidget
                  icon={Sun}
                  label={t("widgets.light")}
                  value="750 lux"
                  delay={1.2}
                />
              </div>

              <div className="absolute bottom-0 right-0 translate-x-4 animate-float">
                <FloatingWidget
                  icon={Calendar}
                  label={t("widgets.nextTask")}
                  value={t("widgets.watering")}
                  delay={1.4}
                />
              </div>

              {/* Connection lines (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
              >
                <motion.path
                  d="M 80 80 Q 150 120 200 200"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.path
                  d="M 320 100 Q 280 150 200 200"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 1.7 }}
                />
                <motion.path
                  d="M 60 280 Q 130 250 200 200"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 1.9 }}
                />
                <motion.path
                  d="M 340 300 Q 280 260 200 200"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 2.1 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="100%" stopColor="var(--highlight)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  )
}
