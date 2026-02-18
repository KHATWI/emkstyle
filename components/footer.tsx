"use client"

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border/50 bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              EMK <span className="text-copper">STYLE</span>
            </h3>
            <p className="mb-4 max-w-md text-balance text-sm leading-relaxed text-muted-foreground">
              Conquista el presente. Anticipa tu futuro. Aprende y emprende con EMK.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Estilo y Marketing</span>{" "}
              para dominar el futuro.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Areas</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("business")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  EMK Business
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("alma")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  EMK by Alma
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("kids")}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  EMK Kids
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contacto</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="mailto:contacto@emkstyle.cl"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  contacto@emkstyle.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EMK STYLE — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
