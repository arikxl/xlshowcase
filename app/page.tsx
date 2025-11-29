import Dock from "@/components/Dock";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Welcome />
      <Dock />
    
    </main>
  );
}
