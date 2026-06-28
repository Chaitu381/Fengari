import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  DatabaseZap,
  GraduationCap,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero, Section, Shell } from "../components/layout";
import { PROCESS, SERVICES } from "../data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Fengari" },
      {
        name: "description",
        content:
          "Fengari builds modern websites, SaaS products, learning platforms, AI automation systems, dashboards, and cloud-ready software for serious businesses.",
      },
      { property: "og:title", content: "Fengari Services" },
      {
        property: "og:description",
        content:
          "Premium product engineering services for websites, platforms, automation, analytics, and cloud systems.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const serviceIcons = {
  Shapes: Layers3,
  MonitorSmartphone,
  Smartphone: MonitorSmartphone,
  Sparkles,
  GraduationCap,
  Cloud,
} as const;

const focusAreas = [
  {
    icon: Code2,
    title: "Product Engineering",
    desc: "We design and build complete software products with clean architecture, scalable code, and production-ready user flows.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "We create intelligent workflows, analytics systems, dashboards, and automation layers that reduce manual work.",
  },
  {
    icon: DatabaseZap,
    title: "Business Platforms",
    desc: "We build internal tools, admin panels, LMS platforms, SaaS systems, and role-based business applications.",
  },
];

const qualities = [
  "Clean UI with strong user experience",
  "Role-based dashboards and admin systems",
  "Fast frontend and backend integration",
  "Scalable database and API structure",
  "Cloud-ready deployment approach",
  "Long-term maintainable codebase",
];

function Services() {
  return (
    <Shell>
      <PageHero
        eyebrow="Services"
        title={
          <>
            We do not just build screens.{" "}
            <span className="gradient-text">We build systems that work.</span>
          </>
        }
        sub="Fengari helps businesses turn rough ideas into polished websites, SaaS platforms, learning systems, dashboards, automation tools, and cloud-ready products."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition duration-300 group-hover:bg-brand/20" />

                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="relative mt-6 font-display text-2xl font-black">
                  {area.title}
                </h2>

                <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
                  {area.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand">
                What we build
              </p>

              <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
                Services made for real products, not just pretty pages.
              </h2>

              <p className="mt-5 text-base leading-7 text-muted-foreground">
                A good website should generate trust. A good platform should save time.
                A good dashboard should make decisions easier. That is the difference
                between decoration and useful software.
              </p>

              <Link
                to="/contact"
                className="button-press button-pop mt-7 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-extrabold text-white"
              >
                Discuss your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICES.map((service, index) => {
                const Icon = serviceIcons[service.icon];

                return (
                  <motion.article
                    key={service.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="group rounded-2xl border border-border bg-background p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-brand/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-display text-lg font-black">
                          {service.name}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand">
              Delivery flow
            </p>

            <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
              From unclear idea to working release.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We keep the process clear: understand the business, design the flow,
              build the product, connect the APIs, test the system, and prepare it
              for launch.
            </p>

            <div className="mt-8 grid gap-4">
              {PROCESS.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand font-display text-lg font-black text-white">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h2 className="mt-6 font-display text-3xl font-black">
              What makes Fengari different?
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We do not sell random development hours. We build with structure,
              product thinking, and long-term maintainability from day one.
            </p>

            <div className="mt-7 grid gap-3">
              {qualities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                  <p className="text-sm font-semibold leading-6">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-brand p-5 text-white">
              <Sparkles className="h-6 w-6" />

              <p className="mt-4 font-display text-2xl font-black">
                Build something people can actually use, trust, and remember.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold"
              >
                Start the conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Shell>
  );
}