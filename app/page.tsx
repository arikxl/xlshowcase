
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import Dock from "@/components/Dock";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Terminal from "@/windows/Terminal";

gsap.registerPlugin(Draggable);


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Welcome />
      <Dock />
    
      
      <Terminal />
    </main>
  );
}
