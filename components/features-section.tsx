"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import {
  User,
  Leaf,
  Cpu,
  Calendar,
  Brain,
  Cloud,
  Check,
  Layers,
} from "lucide-react"

const categoryIcons = {
  profile: User,
  inventory: Leaf,
  monitoring: Cpu,
  tasks: Calendar,
  ai: Brain,
  climate: Cloud,
} as const

const categoryColors = {
  profile: "from-blue-500/20 to-indigo-500/20",
  inventory: "from-accent/20 to-highlight/20",
  monitoring: "from-cyan-500/20 to-teal-500/20",
  tasks: "from-orange-500/20 to-amber-500/20",
  ai: "from-violet-500/20 to-purple-500/20",
  climate: "from-sky-500/20 to-blue-500/20",
} as const

export function FeaturesSection() {
  const t = useTranslations("features")

  const categories = ["profile", "inventory", "monitoring", "tasks", "ai", "climate"] as const

  // Bento grid layout configuration
  const gridConfig = [
    { span: "md:col-span-2 lg:col-span-1 lg:row-span-2" },
    { span: "md:col-span-1" },
    { span: "md:col-span-1" },
    { span: "md:col-span-1 lg:col-span-2" },
    { span: "md:col-span-2 lg:col-span-1" },
    { span: "md:col-span-1" },
  ]

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-sm font-medium text-secondary-foreground mb-6">
            <Layers className="w-4 h-4 text-accent" />
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}{t("titleHighlight")}
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category]
            const color = categoryColors[category]
            const items = t.raw(`categories.${category}.items`) as string[]

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${gridConfig[index].span}`}
              >
                <div className="h-full bg-card rounded-3xl p-6 lg:p-8 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                          {t(`categories.${category}.title`)}
                        </h3>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 flex-grow">
                      {items.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative corner element */}
                    <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="w-32 h-32 text-foreground translate-x-8 translate-y-8" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
