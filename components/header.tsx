"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-card">
            <span className="text-base font-bold text-primary">EMK</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            EMK <span className="text-copper">STYLE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => scrollTo("business")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Business
          </button>
          <button
            type="button"
            onClick={() => scrollTo("alma")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            By Alma
          </button>
          <button
            type="button"
            onClick={() => scrollTo("kids")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Kids
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => scrollTo("business")}
              className="py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Business
            </button>
            <button
              type="button"
              onClick={() => scrollTo("alma")}
              className="py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              By Alma
            </button>
            <button
              type="button"
              onClick={() => scrollTo("kids")}
              className="py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Kids
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
