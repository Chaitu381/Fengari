import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Crown,
  ImageIcon,
  UserRoundCheck,
} from "lucide-react";
import { Section, Shell } from "../components/layout";
import { PRODUCTS } from "../data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((item) => item.slug === params.slug);

    if (!product) {
      throw notFound();
    }

    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} - ${loaderData.category} | Fengari` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} by Fengari` },
          { property: "og:description", content: loaderData.description },
          { property: "og:url", content: `/products/${loaderData.slug}` },
          { property: "og:type", content: "product" },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `/products/${loaderData.slug}` }]
      : [],
  }),
  notFoundComponent: () => (
    <Shell>
      <Section>
        <h1 className="font-display text-3xl font-black">Product not found</h1>
        <Link
          to="/products"
          className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-brand"
        >
          <ArrowLeft className="h-4 w-4" /> All products
        </Link>
      </Section>
    </Shell>
  ),
  component: Product,
});

function Product() {
  const product = Route.useLoaderData();

  const contributors = "contributors" in product ? product.contributors : [];

  return (
    <Shell>
      <ProductHero product={product} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="space-y-8">
            <div className="card-pop overflow-hidden">
              <div className={`${product.soft} p-6`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-extrabold text-muted-foreground">
                      {product.category}
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-black">
                      {product.name} capabilities
                    </h2>
                  </div>

                  <span
                    className={`rounded-full bg-gradient-to-r ${product.accent} px-4 py-2 text-xs font-extrabold text-white`}
                  >
                    {product.stat}
                  </span>
                </div>
              </div>

              <div className="grid gap-3 p-6 sm:grid-cols-2">
                {product.features.map((feature: string) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-bold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-black">Outcomes</h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {product.outcomes.map((outcome: string) => (
                  <div
                    key={outcome}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-sun text-foreground">
                      <Crown className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-extrabold">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {contributors.length > 0 ? (
              <div className="card-pop p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand text-white">
                    <UserRoundCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <h2 className="font-display text-3xl font-black">
                      ScholarLearn project developers
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      These developers worked with Fengari on the ScholarLearn
                      application.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {contributors.map(
                    (person: {
                      name: string;
                      role: string;
                      contribution: string;
                    }) => (
                      <div
                        key={person.name}
                        className="rounded-lg border border-border bg-background p-4"
                      >
                        <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-2 font-display text-lg font-black text-white">
                          {person.name[0]}
                        </div>

                        <h3 className="mt-4 font-display text-xl font-black">
                          {person.name}
                        </h3>
                        <p className="text-xs font-extrabold text-brand">
                          {person.role}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-muted-foreground">
                          {person.contribution}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="card-pop p-6">
              <h2 className="font-display text-2xl font-black">
                {product.demoUrl ? "View live demo" : "Contact Fengari"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {product.demoUrl
                  ? `Open the live ${product.name} demo in a new tab.`
                  : `Contact Fengari to discuss how ${product.name} can be shaped around your team, users, and daily workflow.`}
              </p>

              {product.demoUrl ? (
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-press button-pop mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-extrabold text-white"
                >
                  Open demo <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="button-press button-pop mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-extrabold text-white"
                >
                  Contact Fengari <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-black">Other products</h3>

              <div className="mt-4 grid gap-3">
                {PRODUCTS.filter((item) => item.slug !== product.slug).map(
                  (item) => (
                    <Link
                      key={item.slug}
                      to="/products/$slug"
                      params={{ slug: item.slug }}
                      className="rounded-lg border border-border bg-background p-4 text-sm font-extrabold transition hover:-translate-y-0.5 hover:bg-muted"
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </Shell>
  );
}

function ProductHero({
  product,
}: {
  product: (typeof PRODUCTS)[number];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f2fbff] py-20 dark:bg-background sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-extrabold text-brand shadow-sm">
            {product.category}
          </span>

          <h1 className="mt-6 font-display text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
            <span
              className={`bg-gradient-to-r ${product.accent} bg-clip-text text-transparent`}
            >
              {product.name}
            </span>{" "}
            by Fengari
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {product.demoUrl ? (
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-press button-pop inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-extrabold text-white"
              >
                Product demo <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-extrabold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
          </div>
        </motion.div>

        <ProductImageCarousel
          productName={product.name}
          productStat={product.stat}
          images={product.images}
          demoUrl={product.demoUrl}
        />
      </div>
    </section>
  );
}

function ProductImageCarousel({
  demoUrl,
  images,
  productName,
  productStat,
}: {
  demoUrl?: string;
  images?: readonly string[];
  productName: string;
  productStat: string;
}) {
  const fallbackSlides = useMemo(
    () => [
      {
        title: `${productName} dashboard`,
        subtitle: "Product preview",
      },
      {
        title: "Clean workflow",
        subtitle: "Simple daily operations",
      },
      {
        title: "Actionable insights",
        subtitle: "Clear reports and tracking",
      },
    ],
    [productName],
  );

  const slides = images?.length ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [productName, slides.length]);

  useEffect(() => {
    const totalSlides = slides.length || fallbackSlides.length;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [slides.length, fallbackSlides.length]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 34, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[360px] lg:min-h-[430px]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-brand/20 blur-3xl" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-4 z-20 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur sm:block"
      >
        <p className="text-xs font-extrabold text-muted-foreground">Status</p>
        <p className="font-display text-xl font-black text-brand">
          {productStat}
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 right-0 z-20 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur sm:block"
      >
        <p className="text-xs font-extrabold text-muted-foreground">
          Experience
        </p>
        <p className="font-display text-xl font-black text-brand">Clean UX</p>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-muted">
          {slides.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[activeIndex]}
                src={slides[activeIndex]}
                alt={`${productName} preview ${activeIndex + 1}`}
                initial={{ opacity: 0, x: 70, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -70, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-background object-contain"
              />
            </AnimatePresence>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 70, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -70, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col justify-between bg-background p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                    <ImageIcon className="h-6 w-6" />
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-brand">
                    {fallbackSlides[activeIndex].subtitle}
                  </p>

                  <h3 className="mt-2 font-display text-4xl font-black">
                    {fallbackSlides[activeIndex].title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    Add real screenshots in the product data to replace this
                    animated placeholder with actual product previews.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Dashboard", "Reports", "Workflow"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border bg-card p-3 shadow-sm"
                    >
                      <div className="h-2 w-12 rounded-full bg-brand/50" />

                      <p className="mt-3 text-xs font-extrabold text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {(slides.length ? slides : fallbackSlides).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-brand"
                  : "w-2.5 bg-muted-foreground/25 hover:bg-muted-foreground/40"
              }`}
              aria-label={`Show ${productName} preview ${index + 1}`}
            />
          ))}
        </div>

        {demoUrl ? (
          <div className="mt-5 flex justify-center">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-press button-pop inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-extrabold text-white"
            >
              Product demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}