// app/GoogleTag.tsx
import Script from "next/script";

export default function GoogleTag() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // G-XXXXXXXXXX
  if (!GA_ID) return null;

  return (
    <>
      {/* Load GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {/* Init + Consent defaults + disable auto page_view */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Consent Mode v2 defaults (adjust to your CMP)
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied'
          });

          // Disable automatic page_view, we'll send our own on route changes
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
