"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Sparkles,
  Camera,
  TrendingUp,
  Bot,
  User,
  Send,
} from "lucide-react"

const featureIcons = {
  chat: MessageSquare,
  recommendations: Sparkles,
  diagnosis: Camera,
  learning: TrendingUp,
} as const

export function AISection() {
  const t = useTranslations("ai")

  const features = ["chat", "recommendations", "diagnosis", "learning"] as const

  return (
    <section id="ai" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Neural network pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-violet-500" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-violet-500/30" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-violet-500/30" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-violet-500/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm font-medium text-violet-700 dark:text-violet-400 mb-6">
            <Sparkles className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
              {" "}{t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = featureIcons[feature]
                return (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t(`features.${feature}.title`)}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`features.${feature}.description`)}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Chat UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            
            {/* Chat window */}
            <div className="relative bg-card rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">PlantSync AI</h4>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>

              {/* Chat messages */}
              <div className="p-6 space-y-4 min-h-[300px]">
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="flex items-start gap-3 max-w-[80%]">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3">
                      <p className="text-sm">{t("chatExample.user")}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </motion.div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-secondary/50 border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-sm text-foreground leading-relaxed">
                        {t("chatExample.assistant")}
                      </p>
                      {/* Quick actions */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-400">
                          Ver datos
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-400">
                          Ajustar riego
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input area */}
              <div className="px-6 py-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex-grow relative">
                    <input
                      type="text"
                      placeholder="Escribe tu pregunta..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/30"
                      readOnly
                    />
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-500/20 flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-violet-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
