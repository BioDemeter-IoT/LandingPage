"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-highlight/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        {/* Realistic leaves - left side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-20 left-5 w-40 h-40 opacity-70 pointer-events-none"
        >
          <img
            src="/leaf-realistic-1.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute top-1/3 left-0 w-32 h-32 opacity-60 pointer-events-none -translate-x-8"
        >
          <img
            src="/leaf-realistic-2.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Realistic leaves - right side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute top-32 right-5 w-44 h-44 opacity-75 pointer-events-none"
        >
          <img
            src="/leaf-realistic-3.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-2/3 right-10 w-36 h-36 opacity-65 pointer-events-none"
        >
          <img
            src="/leaf-realistic-1.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-lg scale-x-[-1]"
          />
        </motion.div>

        {/* Bottom leaves */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-20 left-20 w-40 h-40 opacity-60 pointer-events-none"
        >
          <img
            src="/leaf-realistic-2.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-lg scale-x-[-1]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-32 right-32 w-48 h-48 opacity-70 pointer-events-none"
        >
          <img
            src="/leaf-realistic-3.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
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

          {/* Right Column - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Laptop - Base */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl h-full flex items-center"
            >
              <div className="w-full">
                <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-8 border-slate-800">
                  <div className="bg-slate-700 h-2" />
                  <div className="relative bg-white aspect-video">
                    <img
                      src="/mockup-web-screen.png"
                      alt="Web Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 h-6" />
                </div>
              </div>
            </motion.div>

            {/* iPhone - Overlaid */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute right-0 bottom-0 lg:right-32 lg:bottom-16 w-[160px] lg:w-[240px] z-20"
            >
              <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />
                <div className="relative bg-white aspect-[9/19.5]">
                  <img
                    src="/mockup-app-screen.png"
                    alt="Mobile App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center pb-2 bg-black">
                  <div className="w-32 h-1 bg-gray-800 rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
