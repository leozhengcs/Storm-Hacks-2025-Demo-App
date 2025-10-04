"use client";

import { useEffect, useState } from "react";

type ConsentState = "unknown" | "granted" | "denied";

export default function ConsentBanner() {
  const [visible, setVisible] = useState<ConsentState>("unknown");

  useEffect(() => {
    const saved = localStorage.getItem("consent-v2");
    if (saved === "granted" || saved === "denied") setVisible(saved);
  }, []);

  if (visible !== "unknown") return null;

  const grant = () => {
    // @ts-ignore
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
    localStorage.setItem("consent-v2", "granted");
    setVisible("granted");
  };

  const deny = () => {
    // @ts-ignore
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    localStorage.setItem("consent-v2", "denied");
    setVisible("denied");
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 m-4 rounded-lg border bg-white p-4 shadow">
      <p className="mb-3 text-sm">
        We use cookies for analytics and ads personalization. You can change
        this anytime in settings.
      </p>
      <div className="flex gap-2">
        <button
          onClick={grant}
          className="rounded bg-black px-3 py-2 text-white"
        >
          Accept all
        </button>
        <button onClick={deny} className="rounded border px-3 py-2">
          Reject
        </button>
      </div>
    </div>
  );
}
