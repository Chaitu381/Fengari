import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BadgeCheck, HeartHandshake, Lightbulb, Rocket } from "lucide-react";
import { PageHero, Section, Shell } from "../components/layout";
import { PROCESS, VALUES } from "../data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fengari - Software Product Studio" },
      {
        name: "description",
        content:
          "Learn about Fengari, a software product studio building professional websites, apps, edtech platforms, AI workflows, automation systems, and digital business solutions.",
      },
      { property: "og:title", content: "About Fengari" },
      {
        property: "og:description",
        content:
          "Software product design, engineering, automation, and digital growth solutions.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const highlights = [
  {
    icon: Lightbulb,
    title: "Clear Product Thinking",
    desc: "We turn early ideas into practical flows, useful modules, and realistic launch-ready scope.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Execution",
    desc: "Every page, feature, and interaction is shaped for trust, clarity, performance, and real business use.",
  },
  {
    icon: HeartHandshake,
    title: "Close Collaboration",
    desc: "We work closely with each project’s goals, users, and business needs so the final product stays practical, focused, and useful.",
  },
  {
    icon: Rocket,
    title: "Launch-Focused Delivery",
    desc: "The goal is not just a polished screen. It is a complete product that users can actually use.",
  },
] as const;

function About() {
  return (
    <Shell>
      <PageHero
        eyebrow="About Fengari"
        title={
          <>
            Software built with{" "}
            <span className="gradient-text">clarity, craft, and purpose.</span>
          </>
        }
        sub="Fengari is a software product studio that builds professional websites, apps, platforms, AI workflows, automation systems, and digital business solutions. We focus on products that look clean, work clearly, and solve real operational problems."
      />

      <Mission />

      <CompanyOverview />

      <Values />

      <AboutProcess />
    </Shell>
  );
}

function Mission() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-25" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-extrabold text-brand">Mission</p>

          <h2 className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl">
            Make powerful software feel simple to use.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Fengari builds digital products with clean structure, polished
            interfaces, and practical workflows. We focus on software that feels
            easy from the first interaction while staying reliable enough for
            real teams, real users, and real business operations.
          </p>

          <div className="mt-6 rounded-3xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
              What we care about
            </p>
            <p className="mt-2 font-display text-2xl font-black">
              Clean design. Reliable engineering. Clear product direction.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
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
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand/15 blur-3xl" />
                </div>

                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <motion.div
                  className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_30px_rgba(88,204,2,0.25)]"
                  whileHover={{ rotate: -5, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                <h3 className="relative mt-5 font-display text-xl font-black">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

function CompanyOverview() {
  return (
    <Section className="relative overflow-hidden border-y border-border bg-card/45">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm font-extrabold text-brand"
        >
          Company Overview
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl"
        >
          Building digital products for modern business workflows.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground"
        >
          Fengari is a software product studio focused on building practical
          digital solutions for modern businesses. We design and develop
          professional websites, web applications, learning platforms,
          attendance systems, operations tools, AI-powered workflows,
          automation systems, and digital growth solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground"
        >
          Our work is built around clarity, reliability, and real-world
          usability. Instead of creating software that only looks good, Fengari
          focuses on building products that help teams manage work better,
          reduce manual effort, improve user experience, and support business
          growth.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground"
        >
          From product planning and interface design to frontend development,
          backend systems, automation, and launch-ready execution, Fengari helps
          turn ideas into complete digital products that are simple to use,
          scalable, and professional.
        </motion.p>
      </div>

      <motion.div
        className="relative mt-10 grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {[
          {
            title: "Product Design",
            desc: "Clean user interfaces, structured page flows, and user-friendly experiences built around real use cases.",
          },
          {
            title: "Software Engineering",
            desc: "Reliable frontend, backend, API, database, and platform development for scalable digital products.",
          },
          {
            title: "Automation & AI",
            desc: "AI workflows, operational automation, and smart systems that reduce manual effort and improve speed.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
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
              scale: 1.015,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand/15 blur-3xl" />
            </div>

            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <h3 className="relative font-display text-2xl font-black">
              {item.title}
            </h3>

            <p className="relative mt-3 text-sm leading-6 text-muted-foreground">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Values() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-20" />

      <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-extrabold text-brand">Values</p>

          <h2 className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl">
            The standards behind the interface.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Good software is not only about how it looks. It should be clear,
            dependable, maintainable, and built around the people using it.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
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
          {VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 22,
                  scale: 0.96,
                  filter: "blur(6px)",
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.5,
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
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand/15 blur-3xl" />
              </div>

              <h3 className="relative font-display text-xl font-black">
                {value.title}
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function AboutProcess() {
  return (
    <Section className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-20" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm font-extrabold text-brand"
        >
          Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-2 font-display text-4xl font-black leading-tight sm:text-5xl"
        >
          How projects move.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base"
        >
          A simple delivery process that keeps the project understandable from
          idea to launch.
        </motion.p>
      </div>

      <motion.div
        className="relative mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {PROCESS.map((item) => (
          <motion.div
            key={item.step}
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
              scale: 1.015,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand/15 blur-3xl" />
            </div>

            <div className="relative font-display text-3xl font-black text-brand">
              {item.step}
            </div>

            <h3 className="relative mt-3 font-display text-lg font-black">
              {item.title}
            </h3>

            <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}