import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./color.css";
import "./main.css";
import "./grid.css";

import Banner from "./sections/banner";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Employment from "./sections/employment";
import OpenSource from "./sections/OpenSource";
import Education from "./sections/Education";
import References from "./sections/References";
import { HeadingLevel } from "./components/structure";

createRoot(document.body!).render(
  <StrictMode>
    <Banner />

    <HeadingLevel.Provider value={2}>
      <main>
        <Profile />
        <Skills />
        <Employment />
        <OpenSource />
        <Education />
        <References />
      </main>
    </HeadingLevel.Provider >
  </StrictMode>,
);
