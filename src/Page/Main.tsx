import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Routes/Home"));
const Portfolio = lazy(() => import("./Routes/Portfolio"));
const Piano = lazy(() => import("./Routes/Piano"));
const Travel = lazy(() => import("./Routes/Travel"));
const Games = lazy(() => import("./Routes/Games"));
const Project = lazy(() => import("./Routes/Project"));
const NotFound = lazy(() => import("./Routes/NotFound"));

export default function Main() {
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
