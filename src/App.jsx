import { React, useState } from "react";
import HeroSection from "./components/HeroSection";

import Drawer from "./components/Drawer";

import ContactModal from "./components/ContactModal";

function App() {
  const [blurr, setBlurr] = useState(false);
  return (
    <div
      className=" flex flex-col h-screen w-screen  font-mono"
      data-theme="cupcake"
    >
      <Drawer setBlurr={setBlurr} />
      <ContactModal></ContactModal>
      <HeroSection blurr={blurr} />
    </div>
  );
}

export default App;
