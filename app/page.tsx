"use client"

import { ArrowDown } from "lucide-react"
import { CollapsibleSection } from "@/components/collapsible-section"

const businessCourses = [
  {
    title: "CRM Inteligente: Triplica tus Ventas y Gestiona tus Clientes",
    image: "/course-crm.jpg",
    link: "https://go.hotmart.com/I104388030E?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Tus primeras ventas",
    image: "/course-first-sales.jpg",
    link: "https://go.hotmart.com/J104388385O?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "De cero a tienda online",
    image: "/course-online-store.jpg",
    link: "https://go.hotmart.com/B104388791N?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Como vender mas por Instagram",
    image: "/course-instagram.jpg",
    link: "https://go.hotmart.com/O103116912W?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Convierte a WhatsApp en una maquina de vender",
    image: "/course-whatsapp.jpg",
    link: "https://go.hotmart.com/T103117325A?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Crea imagenes y videos para tus productos con IA",
    image: "/course-ai-images.jpg",
    link: "https://go.hotmart.com/L103210551Y?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Curso de marketing digital enfocado a redes sociales y ecommerce",
    image: "/course-marketing-digital.jpg",
    link: "https://go.hotmart.com/U103211006L?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "IA Bot vende en automatico",
    image: "/course-chatbot.jpg",
    link: "https://go.hotmart.com/S104103717J?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Guia generativa para emprendedores y vendedores",
    image: "/course-ai-generativa.jpg",
    link: "https://go.hotmart.com/P103210353Q?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "IA para negocios y emprendedores",
    image: "/course-ia-negocios.jpg",
    link: "https://go.hotmart.com/K103188787E?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Instagram para negocios",
    image: "/course-ig-negocios.jpg",
    link: "https://go.hotmart.com/E104103470S?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Marketing digital",
    image: "/course-mkt-digital.jpg",
    link: "https://go.hotmart.com/E103116814T?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Paso a paso en dropshipping",
    image: "/course-dropshipping.jpg",
    link: "https://go.hotmart.com/J103211217J?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Crea Ebooks rentables con IA desde tu celular",
    image: "/course-ebooks.jpg",
    link: "https://go.hotmart.com/Q103210709U?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
]

const almaCourses = [
  {
    title: "200 plantas medicinales mas eficientes",
    image: "/course-plantas.jpg",
    link: "https://go.hotmart.com/H103211676Q?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Curso de Angeles & Arcangeles",
    image: "/course-angeles.jpg",
    link: "https://go.hotmart.com/B104388791N?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Alimentacion consciente y sin gluten",
    image: "/course-alimentacion.jpg",
    link: "https://go.hotmart.com/V103211590H?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Curso de pilates",
    image: "/course-pilates.jpg",
    link: "https://go.hotmart.com/P104103740X?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Desarrolla tu potencial",
    image: "/course-potencial.jpg",
    link: "https://go.hotmart.com/I103211728N?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "El arte de manifestar: crear tu realidad",
    image: "/course-manifestar.jpg",
    link: "https://go.hotmart.com/W103211329F?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "RECONQUISTA de los Heraldos del Evangelio",
    image: "/course-heraldos.jpg",
    link: "https://go.hotmart.com/R104388984K?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Elimina los sintomas fisicos de la ansiedad",
    image: "/course-ansiedad.jpg",
    link: "https://go.hotmart.com/T103211346B?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Manual de amor propio y transformacion personal",
    image: "/course-amor-propio.jpg",
    link: "https://go.hotmart.com/X103211385J?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Yoga para controlar tus emociones",
    image: "/course-yoga.jpg",
    link: "https://go.hotmart.com/S103211445C?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
]

const kidsCourses = [
  {
    title: "Videojuego de las tablas de multiplicar",
    image: "/course-multiplicar.jpg",
    link: "https://go.hotmart.com/N103276919G?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Ingles para ninos",
    image: "/course-ingles-ninos.jpg",
    link: "https://go.hotmart.com/R104389100O?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Guia de estimulacion temprana para bebes",
    image: "/course-estimulacion.jpg",
    link: "https://go.hotmart.com/Q103211795C?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Guias de estimulacion, juegos y actividades 0 a 5 anos",
    image: "/course-guias-juegos.jpg",
    link: "https://go.hotmart.com/U104389296R?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Matematicas divertidas en casa",
    image: "/course-mates-divertidas.jpg",
    link: "https://go.hotmart.com/Y103276898N?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Venciendo el TDAH desde casa",
    image: "/course-tdah.jpg",
    link: "https://go.hotmart.com/K104389199C?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "Ninos felices, enfocados y emocionalmente fuertes",
    image: "/course-ninos-felices.jpg",
    link: "https://go.hotmart.com/Y103211904C?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
  {
    title: "100 Snacks Saludables para Ninos con TDAH",
    image: "/course-snacks.jpg",
    link: "https://go.hotmart.com/S104389422J?prj=prj_hd4RXTVw6bj0CWrP2FP2ITlBSh74",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Domina el futuro
        </div>
        <h1 className="mb-6 max-w-4xl text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Conquista el presente.
          <br />
          <span className="text-copper">Anticipa tu futuro.</span>
        </h1>
        <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Aprende y emprende con <span className="font-semibold text-primary">EMK</span>.{" "}
          <strong className="text-foreground">Estilo y Marketing</strong> para transformar tu vida, tu negocio y tu
          futuro con Inteligencia Artificial, Desarrollo Personal y Educacion Infantil.
        </p>
        <button
          type="button"
          onClick={() => {
            document.getElementById("business")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          Explorar cursos
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </button>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Three collapsible sections */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Tres caminos, <span className="text-copper">infinitas posibilidades</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
            Haz clic en cada seccion para descubrir todos los cursos disponibles
          </p>
        </div>

        <div className="flex flex-col gap-14">
          <CollapsibleSection
            id="business"
            sectionTitle="Business"
            sectionSubtitle=""
            coverImage="/cover-business.png"
            coverAlt="EMK Business - Personas trabajando y celebrando exito empresarial"
            courses={businessCourses}
          />

          <CollapsibleSection
            id="alma"
            sectionTitle="By Alma"
            sectionSubtitle=""
            coverImage="/cover-alma.png"
            coverAlt="EMK by Alma - Personas meditando en la playa al atardecer"
            courses={almaCourses}
          />

          <CollapsibleSection
            id="kids"
            sectionTitle="Kids"
            sectionSubtitle=""
            coverImage="/cover-kids.png"
            coverAlt="EMK Kids - Ninos felices jugando y aprendiendo"
            courses={kidsCourses}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="gradient-copper rounded-3xl p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1c1c1e] md:text-4xl">
            Transforma tu vida, tu negocio y tu futuro
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-balance text-[#1c1c1e]/80">
            Miles de estudiantes ya han transformado sus vidas con nuestros cursos. Elige tu curso, aprende a tu ritmo y
            empieza hoy mismo.
          </p>
          <button
            type="button"
            onClick={() => {
              document.getElementById("business")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1c1c1e] px-8 py-4 text-base font-semibold text-[#f0ebe3] transition-all hover:bg-[#2a2a2e]"
          >
            Quiero empezar ahora
          </button>
        </div>
      </div>
    </div>
  )
}
