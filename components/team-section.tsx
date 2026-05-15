"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Users, Linkedin, Github, Twitter } from "lucide-react"

export function TeamSection() {
  const t = useTranslations("team")

  const members = t.raw("members") as Array<{
    name: string
    role: string
    skills: string
  }>

  // Colors for member cards
  const memberColors = [
    "from-blue-500/10 to-indigo-500/10",
    "from-accent/10 to-highlight/10",
    "from-cyan-500/10 to-teal-500/10",
    "from-orange-500/10 to-amber-500/10",
    "from-violet-500/10 to-purple-500/10",
    "from-pink-500/10 to-rose-500/10",
    "from-emerald-500/10 to-green-500/10",
  ]

  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-sm font-medium text-secondary-foreground mb-6">
            <Users className="w-4 h-4 text-accent" />
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

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-3xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${memberColors[index % memberColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${memberColors[index % memberColors.length]} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <span className="text-2xl font-bold text-foreground">
                      {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {member.skills}
                  </p>

                  {/* Social links (placeholder) */}
                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
