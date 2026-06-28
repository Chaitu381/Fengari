import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Layers, Sparkles } from "lucide-react";
import { PageHero, Section, Shell } from "../components/layout";
import { PRODUCTS } from "../data/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products - Fengari" },
      {
        name: "description",
        content:
          "Explore Fengari products including StayOps, BeThere, ScholarLearn, Rome, PS-Value Mart, Fiji Web Hub, and more.",
      },
      { property: "og:title", content: "Fengari Products" },
      {
        property: "og:description",
        content:
          "Professional software products for operations, AI attendance, learning, e-commerce, travel, and digital business workflows.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsLayout,
});

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

function ProductsLayout() {
  const matches = useMatches();
  const isChild = matches.some((match) => match.routeId === "/products/$slug");

  if (isChild) {
    return <Outlet />;
  }

  return (
    <Shell>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Fengari products for{" "}
            <span className="gradient-text">
              operations, learning, commerce, and digital growth.
            </span>
          </>
        }
        sub="Fengari builds practical software products for real workflows. Each product is designed to look professional, work clearly, and help businesses manage operations with less manual effort."
      />

      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-20" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

        <motion.div
          className="relative grid gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          {PRODUCTS.map((product) => (
            <motion.article
              key={product.slug}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.01,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative grid min-h-full overflow-hidden rounded-3xl border border-border/70 bg-card text-foreground shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(15,23,42,0.16)] lg:grid-cols-[0.9fr_1.4fr]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-brand/10 blur-3xl" />
              </div>

              {/* Moving shine */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className={`relative ${product.soft} p-6 lg:p-8`}>
                <div className="flex items-center justify-between gap-4">
                  <motion.div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-r ${product.accent} text-white shadow-sm`}
                    whileHover={{
                      rotate: -6,
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                  >
                    <Layers className="h-7 w-7" />
                  </motion.div>

                  <motion.span
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full bg-card px-3 py-1 text-xs font-extrabold text-muted-foreground shadow-sm"
                  >
                    {product.stat}
                  </motion.span>
                </div>

                <div className="mt-10">
                  <h2 className="font-display text-4xl font-black leading-tight text-slate-950 dark:text-white">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-base font-extrabold text-slate-600 dark:text-muted-foreground">
                    {product.category}
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col p-6 lg:p-8">
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {product.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.features.slice(0, 6).map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{
                        x: 5,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className="flex items-center gap-2 rounded-xl border border-border/70 bg-background/70 px-3 py-2 text-sm font-bold text-foreground"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="group/link button-press button-pop inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Open {product.name}
                    <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section className="relative overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: -6,
            scale: 1.01,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
          className="group relative grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] lg:grid-cols-[auto_1fr_auto] lg:items-center"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />
          </div>

          <motion.div
            className="relative grid h-14 w-14 place-items-center rounded-2xl bg-sun text-foreground"
            whileHover={{
              rotate: 8,
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
          >
            <Sparkles className="h-7 w-7" />
          </motion.div>

          <div className="relative">
            <h2 className="font-display text-2xl font-black text-foreground">
              Need one product customized?
            </h2>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Fengari can adapt product workflows, branding, dashboards, modules,
              and user experiences around your organization’s needs.
            </p>
          </div>

          <Link
            to="/contact"
            className="group/link relative inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-extrabold text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
          >
            Contact team
            <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1" />
          </Link>
        </motion.div>
      </Section>
    </Shell>
  );
}