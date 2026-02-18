"use client"

import { ExternalLink } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  image: string
  link: string
  index: number
}

export function CourseCard({ title, description, image, link, index }: CourseCardProps) {
  return (
    <article
      className="animate-fade-in-up group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "backwards" }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">{title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
        >
          Comprar ahora
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}
