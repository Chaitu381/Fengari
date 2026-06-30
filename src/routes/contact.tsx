import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { PageHero, Section, Shell } from "../components/layout";
import { COMPANY, PRODUCTS, SERVICES } from "../data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Fengari" },
      {
        name: "description",
        content:
          "Contact Fengari to build a professional website, application, edtech platform, SaaS product, dashboard, or automation system.",
      },
      { property: "og:title", content: "Contact Fengari" },
      {
        property: "og:description",
        content:
          "Start a serious software project with Fengari.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const briefPoints = [
  "What problem should the product solve?",
  "Who will use it?",
  "Which pages, roles, or dashboards are needed?",
  "Do you already have branding, content, or references?",
];

const projectTypes = [
  "Company website",
  "Web application",
  "SaaS platform",
  "EdTech platform",
  "Admin dashboard",
  "AI or automation system",
];

function Contact() {
  return (
    <Shell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s turn your idea into a{" "}
            <span className="gradient-text">serious product.</span>
          </>
        }
        sub="Tell us what you want to build. Fengari can help shape the idea, design the experience, plan the system, and build a polished product that is ready for real users."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <InfoCard
                icon={Mail}
                label="Email"
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-2/10 blur-3xl" />

              <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
                <MessageSquareText className="h-7 w-7" />
              </div>

              <h2 className="relative mt-6 font-display text-4xl font-black leading-tight">
                Start with a clear brief.
              </h2>

              <p className="relative mt-4 text-sm leading-7 text-muted-foreground">
                You do not need a perfect document. Share the idea, target users,
                required features, expected timeline, and any references. We can
                help turn that into a clear product plan.
              </p>

              <div className="relative mt-6 grid gap-3">
                {briefPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <p className="text-sm font-semibold leading-6">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sun text-foreground">
                  <Clock3 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-black">
                    What happens next?
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    After you send the brief, the next step is to understand the
                    project scope, required features, timeline, and the right
                    technical direction before starting development.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative mb-7">
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 shadow-sm">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
                  <Sparkles className="h-5 w-5" />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                  Project brief
                </span>
              </div>

              <h2 className="mt-5 font-display text-4xl font-black leading-tight">
                Tell us what needs to be built.
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Keep it simple. The goal is to understand the product, users,
                features, and timeline clearly enough to plan the next step.
              </p>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  required
                  className="input-field"
                  placeholder="Chaitanya Pilla"
                  maxLength={100}
                />
              </Field>

              <Field label="Email">
                <input
                  required
                  type="email"
                  className="input-field"
                  placeholder="you@example.com"
                  maxLength={255}
                />
              </Field>

              <Field label="Phone">
                <input
                  className="input-field"
                  placeholder="+91 ..."
                  maxLength={30}
                />
              </Field>

              <Field label="Project type">
                <select className="input-field" defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}

                  {SERVICES.map((service) => (
                    <option key={service.name}>{service.name}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Interested product">
                <select className="input-field" defaultValue="">
                  <option value="" disabled>
                    Choose one
                  </option>

                  {PRODUCTS.map((product) => (
                    <option key={product.slug}>{product.name}</option>
                  ))}

                  <option>New custom project</option>
                  <option>Not sure yet</option>
                </select>
              </Field>

              <Field label="Timeline">
                <select className="input-field" defaultValue="Flexible">
                  <option>Flexible</option>
                  <option>2 to 4 weeks</option>
                  <option>1 to 2 months</option>
                  <option>3 months plus</option>
                  <option>Need guidance</option>
                </select>
              </Field>
            </div>

            <div className="relative mt-4">
              <Field label="Project message">
                <textarea
                  required
                  rows={7}
                  className="input-field resize-y"
                  placeholder="Tell us about the website, app, dashboard, automation system, or product idea you want to build."
                  maxLength={2000}
                />
              </Field>
            </div>

            <button
              type="submit"
              className="button-press button-pop relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-extrabold text-white"
            >
              Send project brief <Send className="h-4 w-4" />
            </button>

            <p className="relative mt-4 text-center text-xs leading-6 text-muted-foreground">
              This form currently prevents page refresh. Connect it to email,
              backend API, or a form service to receive submissions.
            </p>
          </form>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-[2rem] border border-border bg-brand p-6 text-white shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-white/70">
                Build with clarity
              </p>

              <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
                A better brief leads to a better product.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Share the problem, users, features, and timeline. Fengari will
                help shape the right structure before development begins.
              </p>
            </div>

            <a
              href={`mailto:${COMPANY.email}`}
              className="button-press inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-brand"
            >
              Email directly <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </Shell>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>

      {children}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-white">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            {label}
          </div>

          <div className="truncate font-display text-lg font-black">
            {value}
          </div>
        </div>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
