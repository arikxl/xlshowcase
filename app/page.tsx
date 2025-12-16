'use client'

import gsap from "gsap";
import Image from "next/image";
import { Draggable } from "gsap/Draggable";

import Dock from "@/components/Dock";
import Text from "@/windows/Text";
import Safari from "@/windows/Safari";
import Navbar from "@/components/Navbar";
import Finder from "@/windows/Finder";
import Photos from "@/windows/Photos";
import Resume from "@/windows/Resume";
import Welcome from "@/components/Welcome";
import Contact from "@/windows/Contact";
import Terminal from "@/windows/Terminal";
import ImageWin from "@/windows/ImageWin";
import Settings from "@/windows/Settings";
import HomeComp from "@/components/HomeComp";
import useSystemStore from "@/store/system";

gsap.registerPlugin(Draggable);


export default function Home() {

  const { wallpaper } = useSystemStore();

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
          key={wallpaper}
          alt="Background Wallpaper"
          src={wallpaper}
          placeholder="empty"
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
      <HomeComp/>
        
      
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWin />
      <Contact />
      <Photos />
      <Settings/>
    </main>
  );
}
