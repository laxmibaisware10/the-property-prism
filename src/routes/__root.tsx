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
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6">Error · 404</p>
        <h1 className="font-display text-6xl">Address not found.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This listing may have been withdrawn from the market or moved to our private register.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors"
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6">Something went awry</p>
        <h1 className="font-display text-4xl">This page didn't load.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Please refresh or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-marble hover:bg-brass transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-foreground/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
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
      { title: "Vayuva · India's Premium Real Estate Institution" },
      { name: "description", content: "Buy, sell, rent luxury homes, commercial spaces and plots across India. RERA-verified listings, NRI advisory, market insights and channel-partner network." },
      { name: "author", content: "Vayuva" },
      { property: "og:site_name", content: "Vayuva" },
      { property: "og:title", content: "Vayuva · India's Premium Real Estate Institution" },
      { property: "og:description", content: "The definitive collection of Indian luxury residences, commercial real estate and investment-grade land." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
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
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
