import { Route, Routes } from "react-router-dom";
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
        <Route path="/travel" element={<Travel />} />
        <Route path="/games" element={<Games />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
