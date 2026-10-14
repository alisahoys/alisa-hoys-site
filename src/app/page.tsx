import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Portfolio } from "@/components/Portfolio";
import { Play } from "@/components/Play";
import { Contact } from "@/components/Contact";
import { Twin } from "@/components/Twin";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <Portfolio />
        <Play />
        <Contact />
      </main>
      <Twin />
    </>
  );
}
