import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import Home from "./Home.tsx";
// import Sample1 from "./projects/sample1/Sample1.tsx";
import PokeDetails from "./projects/sample1/PokeDetails.tsx";

import Sample2 from "./projects/Sample2.tsx";
import Sample3 from "./projects/Sample3.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample4 from "./projects/sample4/Sample4.tsx";

// Lazy load Sample1
const Sample1 = lazy(() => import("./projects/sample1/Sample1.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="sample1"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Sample1 />
              </Suspense>
            }
          />
          {/* <Route path="sample1" element={<Sample1 />} /> */}
          <Route path="/pokemon/:name" element={<PokeDetails />} />
          <Route path="sample2" element={<Sample2 />} />
          <Route path="sample3" element={<Sample3 />} />
          <Route path="sample4" element={<Sample4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
