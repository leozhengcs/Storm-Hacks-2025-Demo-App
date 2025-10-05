import { Suspense } from "react";
import RouteChangeTracker from "./RouteChangeTracker";

export default function NotFoundRoute() {
  return (
    <>
      <h1>Page not found</h1>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
