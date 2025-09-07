import { Route, Routes, ScrollRestoration } from "react-router-dom";
import {
  Home,
  Portfolio,
  Piano,
  Travel,
  Games,
  Project,
  NotFound,
} from "./Routes";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/voyages" element={<Travel />} />
        <Route path="/jeux" element={<Games />} />
        <Route path="/projets/:projectId" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollRestoration />
    </main>
  );
}
