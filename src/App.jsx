import { React, useState } from "react";
import HeroSection from "./components/HeroSection";

import Drawer from "./components/Drawer";

function App() {
  const [blurr, setBlurr] = useState(false);
  return (
    <div
      className=" flex flex-col h-screen w-screen  font-mono"
      data-theme="cupcake"
    >
      <Drawer setBlurr={setBlurr} />
      <HeroSection blurr={blurr} />
    </div>
  );
}

export default App;
