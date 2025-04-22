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
import Sample5 from "./projects/sample5/Sample5.tsx";
import { Provider } from "react-redux";
import { store } from "./store";

// Lazy load Sample1
const Sample1 = lazy(() => import("./projects/sample1/Sample1.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
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
            <Route path="/pokemon/:name" element={<PokeDetails />} />
            <Route path="sample2" element={<Sample2 />} />
            <Route path="sample3" element={<Sample3 />} />
            <Route path="sample4" element={<Sample4 />} />
            <Route path="sample5" element={<Sample5 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
