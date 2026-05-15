"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight, Download, Monitor, Leaf, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const t = useTranslations("cta")

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Leaf className="w-16 h-16 text-white" />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-20 h-20 text-white" />
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 rounded-full border-4 border-white" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary-foreground text-balance">
            {t("title")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-white">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            {t("subtitle")}
          </p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-base px-8 py-6"
            >
              <a href="#" className="gap-2">
                {t("primary")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 text-base px-8 py-6 gap-2"
            >
              <a href="#">
                <Download className="w-4 h-4" />
                {t("secondary")}
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="text-white hover:bg-white/10 text-base px-8 py-6 gap-2"
            >
              <a href="#">
                <Monitor className="w-4 h-4" />
                {t("tertiary")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
