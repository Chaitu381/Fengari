import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Cloud,
  GraduationCap,
  MonitorSmartphone,
  Rocket,
  Shapes,
  Sparkles,
  Star,
} from "lucide-react";
import { AppPathPreview, Section, Shell } from "../components/layout";
import {
  COMPANY,
  METRICS,
  PROCESS,
  PRODUCTS,
  SERVICES,
  TESTIMONIALS,
  TIMELINE,
} from "../data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
    {
      title: "Fengari | Software Development, AI Systems, Web Apps & Mobile Apps",
    },
    {
      name: "description",
      content:
        "Fengari builds modern software products, EdTech platforms, AI attendance systems, business dashboards, automation tools, and operations software with clean app-like interfaces.",
    },
  
    // Keywords
    {
      name: "keywords",
      content:
        "Fengari, software development company, professional software, EdTech platform, AI attendance system, business software, operations software, web applications, SaaS development, dashboard software, React software, Spring Boot software",
    },
  
    // Robots
    {
      name: "robots",
      content: "index, follow",
    },
  
    // Open Graph
    {
      property: "og:title",
      content: "Fengari | Software Development, AI Systems, Web Apps & Mobile Apps",
    },
    {
      property: "og:description",
      content:
        "Fengari creates practical software products for education, businesses, operations, AI attendance, dashboards, and automation.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://fengari.me/",
    },
    {
      property: "og:site_name",
      content: "Fengari",
    },
    {
      property: "og:image",
      content: "https://fengari.me/og-image.png",
    },
  
    // Twitter / X
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Fengari | Professional Software, AI & EdTech Solutions",
    },
    {
      name: "twitter:description",
      content:
        "Modern software products, EdTech platforms, AI attendance systems, dashboards, and automation tools built with clean professional UI.",
    },
    {
      name: "twitter:image",
      content: "https://fengari.me/og-image.png",
    },
  
    // Theme
    {
      name: "theme-color",
      content: "#58cc02",
    },
  ],
  
  links: [
    {
      rel: "canonical",
      href: "https://fengari.me/",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
  ],
  }),
  component: Home,
});

const serviceIcons = {
  Shapes,
  MonitorSmartphone,
  Smartphone: MonitorSmartphone,
  Sparkles,
  GraduationCap,
  Cloud,
} as const;

function Home() {
  return (
    <Shell>
      <Hero />
      {/* <Metrics /> */}
      <Timeline/>
      <Services />
      <Process />
      <Products />
      <Testimonials />
      <CTA />
    </Shell>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[calc(92svh-4rem)] overflow-hidden bg-[#f2fbff] dark:bg-background">
      <div className="absolute inset-0 soft-grid opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-85">
        <div className="absolute left-1/2 top-8 w-[54rem] max-w-[96vw] -translate-x-1/2 sm:top-12 lg:top-8">
          <AppPathPreview />
        </div>

        <FloatingPanel
          className="left-[5%] top-[12%] hidden md:block"
          title="Founder-led"
          value="Direct build"
          tone="green"
        />

        <FloatingPanel
          className="right-[20%] top-[8%] hidden lg:block"
          title="Quality focus"
          value="Clean UX"
          tone="blue"
        />

        <FloatingPanel
          className="bottom-[45%] left-[10%] hidden lg:block"
          title="Launch ready"
          value="6 products"
          tone="yellow"
        />

        <FloatingPanel
          className="bottom-[60%] right-[5%] hidden xl:block"
          title="Full-stack"
          value="Web + Apps"
          tone="green"

        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-extrabold text-brand shadow-sm">
             Founder-led software studio for modern businesses.
          </span>
          <h1 className="mt-6 font-display text-6xl font-black leading-none sm:text-7xl lg:text-8xl">Fengari</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Fengari builds customized software solutions with fully interactive user experiences — including websites, web apps, mobile apps, AI systems, automation tools, dashboards, and business platforms designed for real-world use.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/products"
              className="button-press button-pop inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-extrabold text-white"
            >
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-muted"
            >
              Start a project
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-12 grid w-full max-w-4xl gap-3 sm:grid-cols-3"
        >
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="card-pop group flex min-h-36 flex-col justify-between p-4 text-left transition hover:-translate-y-1"
            >
              <div>
                <div className={`mb-3 h-2 w-14 rounded-full bg-gradient-to-r ${product.accent}`} />
                <h2 className="font-display text-xl font-black">{product.name}</h2>
                <p className="mt-1 text-xs font-bold text-muted-foreground">{product.category}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-brand">
                View product <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPanel({
  title,
  value,
  tone,
  className,
}: {
  title: string;
  value: string;
  tone: "green" | "blue" | "yellow";
  className: string;
}) {
  const colors = {
    green: "bg-[#eefbe7] text-[#245c12]",
    blue: "bg-[#e8f6ff] text-[#075985]",
    yellow: "bg-[#fff8df] text-[#7a4b00]",
  } as const;

  return (
    <div className={`absolute animate-floaty rounded-lg border border-white/80 px-4 py-3 shadow-xl ${colors[tone]} ${className}`}>
      <div className="text-xs font-extrabold opacity-75">{title}</div>
      <div className="font-display text-2xl font-black">{value}</div>
    </div>
  );
}

function Metrics() {
  return (
    <Section className="-mt-5 relative z-10">
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {METRICS.map((metric) => (
          <motion.div
            key={metric.label}
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                scale: 0.94,
                filter: "blur(6px)",
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{
              y: -8,
              scale: 1.035,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-6 text-center shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
          >
            {/* Soft glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
            </div>

            {/* Moving shine */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <motion.div
              className="relative font-display text-4xl font-black text-brand"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              {metric.value}
            </motion.div>

            <div className="relative mt-2 text-sm font-bold text-muted-foreground">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section className="relative overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm font-extrabold text-brand"
        >
          Our Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-2 font-display text-3xl font-black leading-tight sm:text-5xl"
        >
          A focused path toward practical software products.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base"
        >
          Fengari is building a product ecosystem across AI, education, operations,
          mobility, and business software — one focused product at a time.
        </motion.p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl px-4 sm:mt-14 sm:px-6">
        {/* Timeline line */}
        <div className="absolute left-9 top-0 h-full w-px bg-border sm:left-1/2" />

        {/* Active glowing line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-9 top-0 w-px bg-gradient-to-b from-brand via-brand-2 to-brand sm:left-1/2"
        />

        <div className="grid gap-8">
          {TIMELINE.map((t, i) => {
            const isActive = i === activeIndex;
            const isPrevious = i < activeIndex;
            const isUpcoming = i > activeIndex;

            return (
              <motion.div
                key={`${t.year}-${t.title}`}
                onViewportEnter={() => setActiveIndex(i)}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.97,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={{
                  opacity: isPrevious ? 0.5 : isUpcoming ? 0.78 : 1,
                  filter: isPrevious ? "blur(2px)" : "blur(0px)",
                  scale: isActive ? 1 : 0.985,
                }}
                className={`relative grid grid-cols-1 gap-5 pl-10 sm:grid-cols-2 sm:gap-12 sm:pl-0 ${
                  i % 2 ? "sm:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Year side - desktop only */}
                <div
                  className={`hidden sm:block ${
                    i % 2 ? "text-left" : "text-right"
                  }`}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.08 : 1,
                      opacity: isPrevious ? 0.45 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className={`inline-flex rounded-2xl border px-5 py-3 shadow-sm transition-colors duration-300 ${
                      isActive
                        ? "border-brand/40 bg-brand/10"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="font-display text-3xl font-black gradient-text">
                      {t.year}
                    </span>
                  </motion.div>
                </div>

                {/* Dot */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.35 : 1,
                    opacity: isPrevious ? 0.55 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={`absolute left-5 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background sm:left-1/2 sm:top-6 ${
                    isActive
                      ? "bg-brand shadow-[0_0_0_10px_rgba(88,204,2,0.18)]"
                      : "bg-brand shadow-[0_0_0_6px_rgba(88,204,2,0.12)]"
                  }`}
                />

                {/* Content card */}
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                    transition: {
                      duration: 0.22,
                      ease: "easeOut",
                    },
                  }}
                  className={`group relative w-full overflow-hidden rounded-3xl border p-5 shadow-sm backdrop-blur-xl transition-all duration-300 sm:p-6 ${
                    isActive
                      ? "border-brand/35 bg-card shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
                      : "border-border/70 bg-card/90"
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand/15 blur-3xl" />
                  </div>

                  {/* Moving shine */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="relative z-10">
                    <div className="font-display text-2xl font-black gradient-text sm:hidden">
                      {t.year}
                    </div>

                    <h3
                      className={`mt-1 font-display text-xl font-black sm:mt-0 sm:text-2xl ${
                        isActive ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {t.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {t.desc}
                    </p>

                    <div
                      className={`mt-5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-32 bg-brand"
                          : "w-20 bg-brand/20 group-hover:w-32 group-hover:bg-brand"
                      }`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Products() {
  return (
    <Section id="products" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-25" />
      <div className="pointer-events-none absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-extrabold text-brand">Products</p>

          <h2 className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl">
            Products built for real workflows, not just good-looking screens.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Fengari builds practical software products for operations, attendance,
            learning, mobility, e-commerce, and digital business growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-extrabold text-brand shadow-sm transition hover:-translate-y-0.5 hover:bg-muted"
          >
            See all products
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {PRODUCTS.map((product) => (
          <motion.article
            key={product.slug}
            variants={{
              hidden: {
                opacity: 0,
                y: 26,
                scale: 0.96,
                filter: "blur(6px)",
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{
              y: -8,
              scale: 1.015,
              transition: {
                duration: 0.22,
                ease: "easeOut",
              },
            }}
            className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />
            </div>

            {/* Moving shine */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className={`relative ${product.soft} p-6`}>
              <motion.div
                className={`h-2 w-20 rounded-full bg-gradient-to-r ${product.accent}`}
                whileHover={{ width: 120 }}
                transition={{ duration: 0.25 }}
              />

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-black leading-none text-slate-950 dark:text-black">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-muted-foreground">
                    {product.category}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full bg-gradient-to-r ${product.accent} px-3 py-1.5 text-[11px] font-extrabold text-white shadow-sm`}
                >
                  {product.stat}
                </span>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col p-6">
              <p className="text-sm leading-6 text-muted-foreground">
                {product.summary}
              </p>

              <div className="mt-5 grid gap-2">
                {product.features.slice(0, 4).map((feature: string) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-sm font-bold"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="group/link inline-flex items-center gap-2 text-sm font-extrabold text-brand"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1" />
                </Link>

                <span className="text-xs font-extrabold text-muted-foreground">
                  {product.features.length}+ features
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function Services() {
  return (
    <Section className="relative overflow-hidden border-y border-border bg-card/45">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm font-extrabold text-brand"
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl"
        >
          Everything needed to design, build, and launch serious digital products.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base"
        >
          From professional websites to full-stack apps, AI workflows, and learning platforms,
          Fengari focuses on clean design, reliable engineering, and launch-ready execution.
        </motion.p>
      </div>

      <motion.div
        className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {SERVICES.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <motion.div
              key={service.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                  scale: 0.96,
                  filter: "blur(6px)",
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand/15 blur-3xl" />
              </div>

              {/* Shine */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <motion.div
                className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_30px_rgba(88,204,2,0.25)]"
                whileHover={{ rotate: -5, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Icon className="h-5 w-5" />
              </motion.div>

              <h3 className="relative mt-5 font-display text-xl font-black">
                {service.name}
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
                {service.desc}
              </p>

              <div className="relative mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-brand opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Built for real use <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

function Process() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-30" />
      <div className="pointer-events-none absolute -left-24 top-1 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-24"
        >
          <p className="text-sm font-extrabold text-brand">How we work</p>

          <h2 className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl">
            A focused process from idea to launch.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Fengari keeps every project clear and practical: define the goal, design the
            experience, build the product, polish the details, and launch with confidence.
          </p>

          <div className="mt-6 rounded-3xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
              Delivery style
            </p>
            <p className="mt-2 font-display text-2xl font-black">
              Clean scope. Fast execution. Reliable handoff.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative grid gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          {/* Timeline line */}
          <div className="absolute bottom-8 left-7 top-8 hidden w-px bg-border sm:block" />

          {PROCESS.map((item) => (
            <motion.div
              key={item.step}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 28,
                  scale: 0.97,
                  filter: "blur(6px)",
                },
                show: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: {
                  duration: 0.22,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:grid sm:grid-cols-[4rem_1fr] sm:gap-4"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand/15 blur-3xl" />
              </div>

              {/* Moving shine */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <motion.div
                className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-brand font-display text-xl font-black text-white shadow-[0_12px_30px_rgba(88,204,2,0.25)]"
                whileHover={{ rotate: -5, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {item.step}
              </motion.div>

              <div className="relative z-10 mt-4 sm:mt-0">
                <h3 className="font-display text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.desc}
                </p>

                <div className="mt-4 h-1.5 w-20 rounded-full bg-brand/20 transition-all duration-300 group-hover:w-32 group-hover:bg-brand" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

   
function Testimonials() {
  return (
    <Section className="relative overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm font-extrabold text-brand"
        >
          Client feedback
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl"
        >
          Clear communication, clean execution, and software that feels ready.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base"
        >
          Fengari focuses on practical delivery: sharp interfaces, reliable builds, and
          a process clients can actually follow.
        </motion.p>
      </div>

      <motion.div
        className="relative mt-10 grid gap-5 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {TESTIMONIALS.map((item) => (
          <motion.article
            key={item.name}
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                scale: 0.96,
                filter: "blur(6px)",
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: {
                duration: 0.24,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand/15 blur-3xl" />
            </div>

            {/* Moving shine */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                  >
                    <Star className="h-4 w-4 fill-current" />
                  </motion.span>
                ))}
              </div>

              <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-extrabold text-muted-foreground">
                Verified
              </span>
            </div>

            <p className="relative mt-5 text-sm leading-6 text-muted-foreground">
              “{item.quote}”
            </p>

            <div className="relative mt-6 border-t border-border pt-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand font-display text-base font-black text-white">
                  {item.name[0]}
                </div>

                <div>
                  <div className="font-display text-base font-black">
                    {item.name}
                  </div>
                  <div className="text-xs font-bold text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#122035] px-6 py-12 text-center text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] sm:px-10 sm:py-16"
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-20 soft-grid" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-72 w-72 rounded-full bg-brand-2/20 blur-3xl" />

        {/* Moving shine */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand text-white shadow-[0_16px_40px_rgba(88,204,2,0.3)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="h-7 w-7" />
          </motion.div>

          <h2 className="mt-6 font-display text-4xl font-black leading-tight sm:text-5xl">
            Ready to turn your idea into a product people trust?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            Share your website, app, AI workflow, or platform idea. Fengari will help
            shape it into a clean, reliable, launch-ready digital product.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="button-press inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-extrabold text-white shadow-[0_5px_0_#3c9700]"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-extrabold text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              View products
            </Link>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl gap-3 border-t border-white/10 pt-6 text-left sm:grid-cols-3">
            {["Clear scope", "Clean design", "Launch-ready build"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-extrabold text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
