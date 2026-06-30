import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Menu, Send, X } from "lucide-react";
import { useState, type ReactNode, type SVGProps } from "react";
import { COMPANY } from "../data/site";
import { ThemeToggle } from "./theme";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

function IconGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49v-1.73c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.93.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.22 9.22 0 0 1 12 6.96c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.91v2.77c0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function IconLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3c0-.72-.6-1.3-1.33-1.3ZM8.34 18.33H5.67V9.75h2.67v8.58ZM7 8.58a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Zm11.33 9.75h-2.66v-4.17c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.24H10V9.75h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.1v4.7Z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 font-display ${className}`}
      aria-label={`${COMPANY.name} home`}
    >
      <span className="grid h-13 w-13 place-items-center overflow-hidden rounded-full border border-border bg-background p-1 shadow-sm transition duration-300 group-hover:scale-105">
        <img
          src="/Fengari.png"
          alt={`${COMPANY.name} logo`}
          className="h-full w-full rounded-full object-cover"
        />
      </span>

      <span className="text-xl font-black tracking-tight text-foreground">
        {COMPANY.name}
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:bg-muted hover:text-foreground" }}
              className="rounded-lg px-3 py-2 text-sm font-bold transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="button-press button-pop hidden items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-extrabold text-white sm:inline-flex"
          >
            Start project <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-foreground lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-bold text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-extrabold text-white"
            >
              Start project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            {COMPANY.tagline} We design and build web apps, AI workflows, edtech platforms, and operations products with a clean app-like experience.
          </p>
          <div className="mt-6 flex gap-2">
            <SocialLink label="LinkedIn" href="#" icon={<IconLinkedin className="h-4 w-4" />} />
            <SocialLink label="GitHub" href="#" icon={<IconGithub className="h-4 w-4" />} />
            <SocialLink label="Email" href={`mailto:${COMPANY.email}`} icon={<Mail className="h-4 w-4" />} />
          </div>
        </div>

        <FooterList title="Explore" links={[["Home", "/"], ["About", "/about"], ["Portfolio", "/portfolio"]]} />
        <FooterList title="Products" links={[["StayOps", "/products/stayops"], ["BeThere", "/products/bethere"], ["ScholarLearn", "/products/scholarlearn"]]} />
        <div>
          <h4 className="font-display text-sm font-black">Contact</h4>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <a className="flex items-center gap-2 hover:text-foreground" href={`mailto:${COMPANY.email}`}>
              <Mail className="h-4 w-4" /> {COMPANY.email}
            </a>
    
          </div>
          <Link
            to="/contact"
            className="button-press button-pop mt-5 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-extrabold text-white"
          >
            Send brief <Send className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Fengari. All rights reserved.</p>
          <p>Built with clean UI, useful motion, and founder-led ownership.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, href, icon }: { label: string; href: string; icon: ReactNode }) {
  return (
    <a
      aria-label={label}
      href={href}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
    >
      {icon}
    </a>
  );
}

function FooterList({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-black">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href} className="hover:text-foreground">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-[#f2fbff] dark:bg-background">
      <div className="absolute inset-0 soft-grid opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute right-4 top-10 hidden w-[34rem] max-w-[45vw] lg:block">
        <AppPathPreview compact />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-extrabold text-brand shadow-sm">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          {sub && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{sub}</p>}
        </motion.div>
      </div>
    </section>
  );
}

export function AppPathPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? "h-56" : "h-[28rem]"} w-full`}>
      <div className="absolute left-[12%] top-[8%] lesson-node bg-brand animate-floaty">1</div>
      <div className="absolute left-[42%] top-[25%] lesson-node bg-brand-2 animate-floaty [animation-delay:450ms]">2</div>
      <div className="absolute left-[20%] top-[48%] lesson-node bg-sun text-foreground animate-floaty [animation-delay:850ms]">3</div>
      <div className="absolute left-[58%] top-[62%] lesson-node bg-coral animate-floaty [animation-delay:1200ms]">4</div>
      <div className="absolute left-[76%] top-[35%] lesson-node bg-brand animate-floaty [animation-delay:1600ms]">5</div>
      <svg className="absolute inset-0 h-full w-full text-border" viewBox="0 0 600 360" fill="none" aria-hidden="true">
        <path
          d="M90 65 C180 80 190 150 255 155 C335 162 295 245 385 250 C470 255 430 130 515 145"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="18 18"
        />
      </svg>
    </div>
  );
}
