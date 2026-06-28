import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Code2,
  GraduationCap,
  Link as LinkIcon,
  UsersRound,
  X,
} from "lucide-react";
import { PageHero, Section, Shell } from "../components/layout";
import { FOUNDERS, PORTFOLIO, SCHOLARLEARN_DEVELOPERS } from "../data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - Fengari" },
      {
        name: "description",
        content:
          "Meet the Fengari team and explore the professional products, platforms, and applications built by Fengari.",
      },
      { property: "og:title", content: "Fengari Portfolio" },
      {
        property: "og:description",
        content:
          "The Fengari portfolio page with team, product thinking, and selected application work.",
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
  about: string;
  focus: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
};

function Portfolio() {
  return (
    <Shell>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            The people and work behind{" "}
            <span className="gradient-text">Fengari.</span>
          </>
        }
        sub="A focused look at the team, product thinking, and software systems Fengari is building with clarity, structure, and polish."
      />

      <TeamSection />

      <PortfolioSection />

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
              Fengari is built with direct ownership, product thinking, and focused
              execution. Click any person to view their profile, portfolio,
              LinkedIn, about, and focus.
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
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                Leadership
              </p>
              <h3 className="mt-1 font-display text-2xl font-black">
                Founders
              </h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
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
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                ScholarLearn
              </p>
              <h3 className="mt-1 font-display text-2xl font-black">
                Project contributors
              </h3>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl border border-border bg-background p-6 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition duration-300 group-hover:bg-brand/20" />

      <div className="relative flex items-start gap-4">
        <Avatar
          name={person.name}
          color={isFounder ? "bg-brand" : "bg-brand-2"}
        />

        <div className="min-w-0">
          {isFounder && (
            <span className="mb-2 inline-flex rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-brand">
              Leadership
            </span>
          )}

          <h3 className="font-display text-2xl font-black leading-tight">
            {person.name}
          </h3>

          <p className="mt-1 text-sm font-extrabold text-brand">
            {person.role}
          </p>
        </div>
      </div>

      <p className="relative mt-5 line-clamp-3 text-sm leading-7 text-muted-foreground">
        {person.about}
      </p>

      <div className="relative mt-5 flex items-center justify-between border-t border-border pt-4">
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
          className="fixed inset-0 z-50 grid place-items-center bg-background/70 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${person.name} profile`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />

            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground"
              aria-label="Close profile dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <Avatar
                  name={person.name}
                  color={isFounder ? "bg-brand" : "bg-brand-2"}
                />

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-4xl font-black leading-tight">
                      {person.name}
                    </h2>

                    {isFounder && (
                      <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                        Founder team
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.18em] text-brand">
                    {person.role}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {person.portfolioUrl && (
                  <a
                    href={person.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-press inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-extrabold text-white"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Portfolio
                  </a>
                )}

                {person.linkedinUrl && (
                  <a
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-press inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-extrabold text-foreground transition hover:border-brand/40 hover:text-brand"
                  >
                    <LinkIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-background p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
                  About {person.name.split(" ")[0]}
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {person.about}
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-background p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
                  Focus
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {person.focus}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PortfolioSection() {
  return (
    <Section className="border-y border-border bg-card/45">
      <div className="max-w-3xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand">
          Portfolio
        </p>

        <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
          Products shaped with clear workflows and polished interfaces.
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Fengari focuses on useful software systems, not random screens. Each
          product is shaped around real users, clear navigation, structured data,
          and long-term maintainability.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {PORTFOLIO.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="card-pop overflow-hidden"
          >
            <div className={`${item.color} p-6`}>
              <div className="flex items-center justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-lg bg-card text-brand shadow-sm">
                  {item.tag === "Education" ? (
                    <GraduationCap className="h-7 w-7" />
                  ) : item.tag === "AI" ? (
                    <BarChart3 className="h-7 w-7" />
                  ) : (
                    <Code2 className="h-7 w-7" />
                  )}
                </div>

                <span className="rounded-full bg-card px-3 py-1 text-xs font-extrabold text-muted-foreground shadow-sm">
                  {item.metric}
                </span>
              </div>

              <h2 className="mt-6 font-display text-3xl font-black">
                {item.title}
              </h2>

              <p className="mt-1 text-sm font-extrabold text-muted-foreground">
                {item.tag}
              </p>
            </div>

            <div className="p-6">
              <p className="text-sm leading-6 text-muted-foreground">
                {item.desc}
              </p>

              <Link
                to="/products/$slug"
                params={{ slug: item.productSlug }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand"
              >
                View product <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
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
    <div className="rounded-2xl border border-border bg-background p-4 shadow-sm">
      <p className="font-display text-3xl font-black text-brand">{value}</p>
      <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div
      className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${color} font-display text-xl font-black text-white shadow-lg`}
    >
      {initials}
    </div>
  );
}