"use client";
// NOTE: DO NOT use this component directly, use the NotFoundRoute component instead of this.

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return;
    const page_path = `${pathname}${
      searchParams?.toString() ? `?${searchParams}` : ""
    }`;
    // @ts-expect-error: Google Analytics attaches function
    // 
    window.gtag?.("event", "page_view", { page_path });
  }, [pathname, searchParams]);
  return null;
}
