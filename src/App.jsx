import { React, useState } from "react";
import HeroSection from "./components/HeroSection";

import Drawer from "./components/Drawer";
import { isVisible } from "@testing-library/user-event/dist/utils";

function App() {
  const [blurr, setBlurr] = useState(false);
  return (
    <div className=" flex flex-col h-screen w-screen bg-slate-800 font-mono">
      <Drawer setBlurr={setBlurr} />
      <HeroSection blurr={blurr} />
    </div>
  );
}

export default App;
