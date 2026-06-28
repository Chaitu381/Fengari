import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  DatabaseZap,
  GraduationCap,
  Layers3,
  Link as LinkIcon,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";
import { PageHero, Section, Shell } from "../components/layout";
import { FOUNDERS, SCHOLARLEARN_DEVELOPERS } from "../data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - Fengari" },
      {
        name: "description",
        content:
          "Meet the Fengari team and explore how Fengari designs, engineers, and delivers clear, scalable, production-ready software systems.",
      },
      { property: "og:title", content: "Fengari Portfolio" },
      {
        property: "og:description",
        content:
          "Fengari portfolio page showcasing the team, product thinking, engineering capability, delivery process, and software systems approach.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type TeamPerson = {
  name: string;
  role: string;
  headline?: string;
  summary?: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  about: string;
  focus: string;
};

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software",
    desc:
      "Business platforms, internal tools, admin systems, role-based portals, and workflow-driven applications built around real operations.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Platforms",
    desc:
      "Modern websites and web applications designed with clean interfaces, strong performance, responsive layouts, and scalable frontend structure.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc:
      "Automation workflows, analytics dashboards, prediction systems, smart reports, and AI-assisted tools that reduce manual work.",
  },
  {
    icon: GraduationCap,
    title: "EdTech Systems",
    desc:
      "Learning platforms with student dashboards, tests, attendance, coding practice, progress tracking, and performance analytics.",
  },
  {
    icon: DatabaseZap,
    title: "Backend & APIs",
    desc:
      "Secure APIs, database design, authentication, permissions, reporting layers, integrations, and backend systems built for reliability.",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready Delivery",
    desc:
      "Applications prepared for deployment, hosting, scaling, monitoring, maintenance, and future product growth.",
  },
];

const proofPoints = [
  "Product structure before development",
  "Clear user flows and role-based access",
  "Frontend, backend, API, and database alignment",
  "Dashboards built for decisions, not decoration",
];

const process = [
  {
    step: "01",
    title: "Understand the real workflow",
    desc:
      "We study the users, roles, business process, data movement, and pain points before designing screens or writing code.",
  },
  {
    step: "02",
    title: "Plan the product structure",
    desc:
      "We define modules, dashboards, permissions, APIs, database flow, and navigation so the system stays clean as it grows.",
  },
  {
    step: "03",
    title: "Build the connected system",
    desc:
      "Frontend, backend, authentication, APIs, database, dashboards, and reports are built as one working product.",
  },
  {
    step: "04",
    title: "Polish, test, and prepare release",
    desc:
      "We refine user experience, fix weak flows, improve performance, test key actions, and prepare the product for real users.",
  },
];

function Portfolio() {
  return (
    <Shell>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            The people and thinking behind{" "}
            <span className="gradient-text">Fengari.</span>
          </>
        }
        sub="A focused look at the team, product thinking, engineering approach, and software systems Fengari builds with structure, clarity, and polish."
      />

      <TeamSection />

      <PortfolioOverview />

      <CapabilitiesSection />

      <DeliverySection />

      <CTASection />
    </Shell>
  );
}

function TeamSection() {
  const [selectedPerson, setSelectedPerson] = useState<TeamPerson | null>(null);

  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-2/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 shadow-sm">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
                <UsersRound className="h-5 w-5" />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                Team
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">
              Founder-led team with focused contributors.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Fengari is built with direct ownership, product thinking, and
              focused execution. Click any person to view their profile,
              portfolio, LinkedIn, about, and focus.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:w-[300px]">
            <MiniStat value={FOUNDERS.length} label="Founders" />
            <MiniStat
              value={SCHOLARLEARN_DEVELOPERS.length}
              label="Contributors"
            />
          </div>
        </div>

        <div className="relative mt-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
            Leadership
          </p>

          <h3 className="mt-1 font-display text-2xl font-black">
            Founders
          </h3>

          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {FOUNDERS.map((person, index) => (
              <TeamCard
                key={person.name}
                person={person}
                index={index}
                isFounder={true}
                onClick={() => setSelectedPerson(person)}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
            ScholarLearn
          </p>

          <h3 className="mt-1 font-display text-2xl font-black">
            Project contributors
          </h3>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SCHOLARLEARN_DEVELOPERS.map((person, index) => (
              <TeamCard
                key={person.name}
                person={person}
                index={index}
                isFounder={false}
                onClick={() => setSelectedPerson(person)}
              />
            ))}
          </div>
        </div>
      </div>

      <PersonDialog
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </Section>
  );
}

function TeamCard({
  person,
  index,
  isFounder,
  onClick,
}: {
  person: TeamPerson;
  index: number;
  isFounder: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      onClick={onClick}
      className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-border bg-background p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl"
    >
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand/10 blur-3xl transition duration-300 group-hover:bg-brand/20" />

      <div className="relative flex items-center gap-4">
        <TeamAvatar
          name={person.name}
          color={isFounder ? "bg-brand" : "bg-brand-2"}
        />

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-black leading-tight tracking-tight text-foreground sm:text-2xl">
            {person.name}
          </h3>

          <p className="mt-1 text-sm font-extrabold text-brand">
            {person.role}
          </p>
        </div>
      </div>

      <p className="relative mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">
        {person.about}
      </p>

      <div className="relative mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
          View profile
        </span>

        <ArrowRight className="h-4 w-4 text-brand transition duration-300 group-hover:translate-x-1" />
      </div>
    </motion.button>
  );
}

function PersonDialog({
  person,
  onClose,
}: {
  person: TeamPerson | null;
  onClose: () => void;
}) {
  const isFounder = person
    ? FOUNDERS.some((founder) => founder.name === person.name)
    : false;

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-background/70 p-3 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${person.name} profile`}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-border bg-card/95 text-foreground shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
          >
            {/* Theme background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
              <div className="absolute -right-20 top-8 h-64 w-64 rounded-full bg-brand-2/14 blur-3xl" />
              <div className="absolute bottom-[-7rem] left-1/3 h-72 w-72 rounded-full bg-sky-300/16 blur-3xl" />

              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.35))]" />

              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(100,116,139,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,.28)_1px,transparent_1px)] [background-size:36px_36px]" />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/85 text-muted-foreground shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-brand hover:text-white"
              aria-label="Close profile dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-10 grid lg:grid-cols-[265px_1fr]">
              {/* Left side */}
              <aside className="relative border-b border-border bg-background/45 p-5 backdrop-blur-xl lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-brand/14 blur-3xl" />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-brand">
                      Fengari
                    </span>

                    {isFounder && (
                      <span className="rounded-full border border-amber-400/35 bg-amber-400/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-amber-600">
                        Leadership
                      </span>
                    )}
                  </div>

                  <div className="mt-5">
                    <Avatar
                      name={person.name}
                      color={
                        isFounder
                          ? "from-brand to-brand-2"
                          : "from-brand-2 to-sky-400"
                      }
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand">
                      {person.role}
                    </p>

                    <h2 className="mt-2 font-display text-2xl font-black leading-tight tracking-tight text-foreground">
                      {person.name}
                    </h2>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <ProfileStat label="Role" value={person.role} />
                    <ProfileStat label="Status" value="Active" />
                  </div>

                  <div className="mt-4 rounded-[1.1rem] border border-border bg-background/65 p-3 backdrop-blur-xl">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      Contribution
                    </p>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {person.summary ??
                        "Contributes to Fengari with practical execution and product-focused delivery."}
                    </p>
                  </div>
                </div>
              </aside>

              {/* Right side */}
              <main className="relative p-5">
                <div className="max-w-2xl pr-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-brand">
                    {isFounder ? "Leadership Profile" : "Developer Profile"}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-black leading-tight tracking-tight text-foreground sm:text-3xl">
                    {person.headline ?? person.name}
                  </h3>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-muted-foreground sm:text-sm">
                    {person.summary ?? `${person.role} at Fengari.`}
                  </p>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <InfoPanel
                    title={`About ${person.name.split(" ")[0]}`}
                    content={person.about}
                  />

                  <InfoPanel title="Focus" content={person.focus} />
                </div>

                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <MiniCard
                    title="Role"
                    value={isFounder ? "Leadership" : "Engineering"}
                  />
                  <MiniCard
                    title="Area"
                    value={isFounder ? "Strategy" : "Product"}
                  />
                  <MiniCard
                    title="Mode"
                    value="Execution"
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[1.15rem] border border-border bg-background/65 p-3 backdrop-blur-xl">
                  <p className="max-w-md text-xs font-semibold leading-5 text-muted-foreground">
                    {person.name} focuses on {person.focus.toLowerCase()}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {person.portfolioUrl && (
                      <a
                        href={person.portfolioUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button-press inline-flex items-center gap-2 rounded-xl bg-brand px-3.5 py-2 text-xs font-black text-white shadow-[0_12px_30px_rgba(99,102,241,0.25)] transition hover:-translate-y-0.5"
                      >
                        <LinkIcon className="h-3.5 w-3.5" />
                        Portfolio
                      </a>
                    )}

                    {person.linkedinUrl && (
                      <a
                        href={person.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button-press inline-flex items-center gap-2 rounded-xl border border-border bg-background/80 px-3.5 py-2 text-xs font-black text-foreground shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
                      >
                        <LinkIcon className="h-3.5 w-3.5" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </main>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PortfolioOverview() {
  return (
    <Section className="pt-0">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-2/10 blur-3xl" />

          <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
            <Layers3 className="h-8 w-8" />
          </div>

          <h2 className="relative mt-7 font-display text-4xl font-black leading-tight sm:text-5xl">
            We build software that is clear, scalable, and ready for real users.
          </h2>

          <p className="relative mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            A serious product is not just a polished interface. It needs clear user roles,
            strong workflows, reliable APIs, useful dashboards, structured data, and a smooth
            experience from login to final action.
          </p>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard value="Flow" label="User journeys" />
            <StatCard value="Build" label="Full-stack execution" />
            <StatCard value="Scale" label="System architecture" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-8"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-2 text-white">
            <ShieldCheck className="h-7 w-7" />
          </div>

          <h3 className="mt-6 font-display text-3xl font-black">
             Built to show capability, not just visuals.
          </h3>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            This portfolio highlights how Fengari thinks, designs, and builds complete
            software systems. The focus is on product structure, user workflows,
            engineering quality, and delivery from idea to launch.
          </p>

          <div className="mt-7 grid gap-3">
            {proofPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <p className="text-sm font-semibold leading-6">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function CapabilitiesSection() {
  return (
    <Section className="pt-0">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand">
          Capabilities
        </p>

        <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
          The kind of work Fengari is built for.
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          We focus on practical software that solves business problems, improves
          operations, and gives users a clean way to get work done.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl"
            >
              <div className="grid h-13 w-13 place-items-center rounded-2xl bg-brand/10 text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.desc}
              </p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

function DeliverySection() {
  return (
    <Section className="border-y border-border bg-card/45">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
            <Workflow className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.25em] text-brand">
            Delivery approach
          </p>

          <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
            We do not build blindly.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Weak teams jump straight into coding and later wonder why the
            product is confusing. Fengari starts with structure, then builds
            with clarity.
          </p>
        </div>

        <div className="grid gap-4">
          {process.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-border bg-background p-5 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand font-display text-lg font-black text-white">
                  {item.step}
                </div>

                <div>
                  <h3 className="font-display text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
            <DatabaseZap className="h-7 w-7" />
          </div>

          <h2 className="mt-6 font-display text-3xl font-black">
            Built for data-backed decisions.
          </h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Software should do more than store information in tables. It should help
            teams understand performance, identify problems, and take the next clear
            action. Fengari builds dashboards, reports, analytics, and decision-focused
            workflows that turn raw data into something useful for daily operations.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-2 text-white">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="mt-6 font-display text-3xl font-black">
            Polished beyond basic completion.
          </h2>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            A product is not finished just because the buttons work and the pages open.
            Real quality comes from the details: smooth flows, clear navigation, reliable
            behavior, readable interfaces, and a product experience that people can trust
            every day. Fengari focuses on that final layer of polish that makes software
            feel complete.
          </p>
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section>
      <div className="rounded-3xl border border-border bg-brand p-6 text-white shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-white/70">
              Work with Fengari
            </p>

            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              Build software that looks serious and works properly.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Fengari helps shape, design, build, and polish products with clear
              user flows, strong structure, and clean execution.
            </p>
          </div>

          <Link
            to="/contact"
            className="button-press inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-brand"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

function MiniStat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-3 shadow-sm">
      <p className="font-display text-2xl font-black text-brand">{value}</p>
      <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <p className="font-display text-2xl font-black">{value}</p>
      <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
function Avatar({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative h-20 w-20">
      <div className="absolute inset-0 rounded-[1.45rem] bg-brand/20 blur-2xl" />

      <div className="absolute inset-0 rounded-[1.45rem] bg-gradient-to-br from-white/80 via-white/35 to-white/10 p-px shadow-lg">
        <div className="h-full w-full rounded-[1.45rem] bg-background/45 backdrop-blur-xl" />
      </div>

      <div
        className={`relative grid h-full w-full place-items-center rounded-[1.45rem] bg-gradient-to-br ${color} font-display text-xl font-black text-white shadow-[0_14px_35px_rgba(15,23,42,0.20)]`}
      >
        {initials}
      </div>
    </div>
  );
}

function InfoPanel({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="relative min-h-[135px] overflow-hidden rounded-[1.15rem] border border-border bg-background/65 p-4 backdrop-blur-xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

      <p className="relative text-[9px] font-black uppercase tracking-[0.22em] text-brand">
        {title}
      </p>

      <p className="relative mt-2 text-xs leading-6 text-muted-foreground">
        {content}
      </p>
    </div>
  );
}

function ProfileStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/65 p-3 backdrop-blur-xl">
      <p className="text-[8px] font-black uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 font-display text-sm font-black text-foreground">
        {value}
      </p>
    </div>
  );
}

function MiniCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/65 p-3 backdrop-blur-xl">
      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </p>

      <p className="mt-1 font-display text-base font-black text-foreground">
        {value}
      </p>
    </div>
  );
}

function TeamAvatar({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${color} font-display text-xl font-black text-white shadow-lg`}
    >
      {initials}
    </div>
  );
}