import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const routeLoaders = {
  home: () => import("./Routes/Home"),
  portfolio: () => import("./Routes/Portfolio"),
  piano: () => import("./Routes/Piano"),
  travel: () => import("./Routes/Travel"),
  games: () => import("./Routes/Games"),
  project: () => import("./Routes/Project"),
  notFound: () => import("./Routes/NotFound"),
};

const Home = lazy(routeLoaders.home);
const Portfolio = lazy(routeLoaders.portfolio);
const Piano = lazy(routeLoaders.piano);
const Travel = lazy(routeLoaders.travel);
const Games = lazy(routeLoaders.games);
const Project = lazy(routeLoaders.project);
const NotFound = lazy(routeLoaders.notFound);

export default function Main() {
  useEffect(() => {
    const preloadRoutes = () => {
      Object.values(routeLoaders).forEach((loadRoute) => {
        loadRoute().catch(() => undefined);
      });
    };
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (idleWindow.requestIdleCallback) {
      const idleCallbackId = idleWindow.requestIdleCallback(preloadRoutes);

      return () => {
        idleWindow.cancelIdleCallback?.(idleCallbackId);
      };
    }

    const timeoutId = window.setTimeout(preloadRoutes, 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/voyages" element={<Travel />} />
          <Route path="/jeux" element={<Games />} />
          <Route path="/projets/:projectId" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}
