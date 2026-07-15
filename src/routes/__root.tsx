import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { FloatingActions } from "../components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs tracking-[0.3em] text-accent uppercase">404</p>
        <h1 className="mt-4 font-display text-4xl text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-royal"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Please try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-royal"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Go home
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
      { title: "Elegance Curtains & Blinds — Luxury Custom Curtains in Dubai & Abu Dhabi" },
      {
        name: "description",
        content:
          "Premium custom curtains, blinds and motorized systems for villas, apartments and offices across Dubai & Abu Dhabi. Free home visit, measurement & installation.",
      },
      { name: "author", content: "Elegance Curtains & Blinds" },
      { name: "theme-color", content: "#041636" },
      { property: "og:site_name", content: "Elegance Curtains & Blinds" },
      {
        property: "og:title",
        content: "Elegance Curtains & Blinds — Luxury Custom Curtains in Dubai & Abu Dhabi",
      },
      {
        property: "og:description",
        content:
          "A legacy of refinement. Custom curtains & blinds crafted for elegant living across Dubai & Abu Dhabi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Elegance Curtains & Blinds",
          image: "https://elegancecurtains.ae/og.jpg",
          telephone: "+971 54 711 6465",
          priceRange: "AED",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. FBD 14 Tai Zhan Building, Dragon Mart 1",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
          },
          sameAs: [
            "https://instagram.com/elegancecurtains.ae",
            "https://www.facebook.com/share/18mN9kizE5/?mibextid=wwXIfr",
          ],
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
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </QueryClientProvider>
  );
}
