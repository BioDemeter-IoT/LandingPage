"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Check, Star, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const t = useTranslations("pricing")

  const plans = ["basic", "premium", "pro"] as const

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 text-sm font-medium text-terracotta mb-6">
            <CreditCard className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-orange-500">
              {" "}{t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const isPremium = plan === "premium"
            const features = t.raw(`plans.${plan}.features`) as string[]

            return (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${isPremium ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {/* Popular badge */}
                {isPremium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-terracotta to-orange-500 text-white text-sm font-medium shadow-lg">
                      <Star className="w-4 h-4" />
                      {t(`plans.${plan}.popular`)}
                    </span>
                  </div>
                )}

                <div
                  className={`h-full rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                    isPremium
                      ? "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground border-2 border-primary shadow-2xl shadow-primary/20"
                      : "bg-card border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
                  }`}
                >
                  {/* Plan header */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-2 ${isPremium ? "text-primary-foreground" : "text-foreground"}`}>
                      {t(`plans.${plan}.name`)}
                    </h3>
                    <p className={`text-sm ${isPremium ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {t(`plans.${plan}.description`)}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl lg:text-5xl font-bold ${isPremium ? "text-primary-foreground" : "text-foreground"}`}>
                        {t(`plans.${plan}.price`)}
                      </span>
                      <span className={`text-sm ${isPremium ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {t(`plans.${plan}.period`)}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPremium ? "bg-primary-foreground/20" : "bg-accent/20"
                        }`}>
                          <Check className={`w-3 h-3 ${isPremium ? "text-primary-foreground" : "text-accent"}`} />
                        </div>
                        <span className={`text-sm ${isPremium ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    size="lg"
                    className={`w-full ${
                      isPremium
                        ? "bg-white text-primary hover:bg-white/90"
                        : plan === "pro"
                        ? "bg-gradient-to-r from-terracotta to-orange-500 text-white hover:opacity-90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <a href="#">{t(`plans.${plan}.cta`)}</a>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
