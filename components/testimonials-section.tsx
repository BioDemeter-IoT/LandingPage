"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Quote, Leaf, MessageCircle } from "lucide-react"

export function TestimonialsSection() {
  const t = useTranslations("testimonials")

  const testimonials = t.raw("items") as Array<{
    quote: string
    author: string
    role: string
    plants: string
  }>

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
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
            <MessageCircle className="w-4 h-4 text-accent" />
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}{t("titleHighlight")}
            </span>
          </h2>
        </motion.div>

        {/* Testimonials grid with masonry-like effect */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${index % 3 === 0 ? "md:row-span-1" : ""}`}
            >
              <div className="h-full p-8 lg:p-10 rounded-3xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-accent" />
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground leading-relaxed mb-8">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-highlight/20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-accent">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  {/* Plants count */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 text-xs text-muted-foreground">
                    <Leaf className="w-3.5 h-3.5 text-accent" />
                    {testimonial.plants}
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
