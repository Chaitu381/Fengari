import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { ThemeProvider } from "../components/theme";
import { reportAppError } from "../lib/error-reporting";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="card-pop max-w-md p-8 text-center">
        <h1 className="text-7xl font-black gradient-text">404</h1>
        <h2 className="mt-4 font-display text-2xl font-black">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page is not part of the new Fengari website.</p>
        <Link
          to="/"
          className="button-press button-pop mt-6 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-extrabold text-white"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="card-pop max-w-md p-8 text-center">
        <h1 className="font-display text-2xl font-black">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="button-press button-pop rounded-lg bg-brand px-4 py-2 text-sm font-extrabold text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-lg border border-border px-4 py-2 text-sm font-bold">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fengari - Professional Software, EdTech, AI and Automation" },
      {
        name: "description",
        content:
          "Fengari builds professional web apps, edtech platforms, AI attendance systems, and operations software with bright app-like interfaces.",
      },
      { name: "theme-color", content: "#58cc02" },
      { property: "og:site_name", content: "Fengari" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Fengari - Joyful software for serious growth" },
      {
        property: "og:description",
        content: "Professional software products, AI workflows, edtech platforms, and automation systems.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fengari",
          url: "/",
          founder: ["Chaitanya Pilla", "Bala Adithya Pilla"],
          slogan: "Joyful software for serious growth.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
