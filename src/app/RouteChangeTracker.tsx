"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // fine in client code

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const qs = searchParams?.toString() ?? "";
    const page_path = qs ? `${pathname}?${qs}` : pathname;

    // Always log (helps debugging even if GA_ID is missing)
    console.log("Route change:", page_path);

    // Only send GA if configured
    // @ts-expect-error: Imported
    if (GA_ID && window.gtag) {
      // @ts-expect-error: Imported
      window.gtag("event", "page_view", {
        page_path,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
