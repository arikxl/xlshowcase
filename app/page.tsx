
import gsap from "gsap";
import Image from "next/image";
import { Draggable } from "gsap/Draggable";

import Dock from "@/components/Dock";
import Text from "@/windows/Text";
import Safari from "@/windows/Safari";
import Navbar from "@/components/Navbar";
import Finder from "@/windows/Finder";
import Resume from "@/windows/Resume";
import Welcome from "@/components/Welcome";
import bgImage from "@/public/images/wallpaper2.png";
import Contact from "@/windows/Contact";
import Terminal from "@/windows/Terminal";
import ImageWin from "@/windows/ImageWin";

gsap.registerPlugin(Draggable);


export default function Home() {
  return (
    <main style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div style={{
        position: "fixed",
        height: "100dvh",
        width: "100vw",
        overflow: "hidden",
        zIndex: -1,
      }}>
        <Image
          alt="Background Wallpaper"
          src={bgImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          priority
        />
      </div>
      <Navbar />

      <Welcome />
      <Dock />


      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWin />
      <Contact />
    </main>
  );
}
