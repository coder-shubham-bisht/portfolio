import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from "@/app/(home)/components/Project";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05] ">
        <div className="container  max-w-[1000px] mx-auto ">
          <HeroSection />
        </div>
      </div>

      <div className="container  max-w-[1000px] mx-auto ">
        <Skills />
        <Project />
      </div>
    </div>
  );
}
