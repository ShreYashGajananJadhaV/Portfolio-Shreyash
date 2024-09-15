import { React, useState } from "react";
import HeroSection from "./components/HeroSection";

import Drawer from "./components/Drawer";

import ContactModal from "./components/ContactModal";

function App() {
  const [blurr, setBlurr] = useState(false);
  return (
    <div
      className=" w-auto h-auto flex flex-col  font-mono overflow-x-hidden"
      data-theme="cupcake"
    >
      <Drawer setBlurr={setBlurr} />
      <ContactModal></ContactModal>
      <HeroSection blurr={blurr} />
    </div>
  );
}

export default App;
