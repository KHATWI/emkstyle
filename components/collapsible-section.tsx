"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { CourseCard } from "@/components/course-card"

interface Course {
  title: string
  description: string
  image: string
  link: string
}

interface CollapsibleSectionProps {
  id: string
  sectionTitle: string
  sectionSubtitle: string
  coverImage: string
  coverAlt: string
  courses: Course[]
}

export function CollapsibleSection({
  id,
  sectionTitle,
  sectionSubtitle,
  coverImage,
  coverAlt,
  courses,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id={id} className="scroll-mt-20">
      {/* Cover + Clickable Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/40"
      >
        <div className="relative aspect-[21/9] overflow-hidden sm:aspect-[3/1]">
          <img
            src={coverImage || "/placeholder.svg"}
            alt={coverAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-[#1c1c1e]/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-[#f0ebe3] md:text-4xl lg:text-5xl">
              {sectionTitle}
            </h2>
            <p className="mb-4 max-w-2xl text-balance text-sm text-[#f0ebe3]/80 md:text-base">
              {sectionSubtitle}
            </p>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#c8913a]/40 bg-[#c8913a]/10 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            >
              <ChevronDown className="h-5 w-5 text-[#c8913a]" />
            </div>
          </div>
        </div>
      </button>

      {/* Collapsible Course Grid */}
      {isOpen && (
        <div className="animate-slide-down mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              image={course.image}
              link={course.link}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  )
}
