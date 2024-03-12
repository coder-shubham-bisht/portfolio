import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="container  max-w-[1000px] mx-auto  flex flex-col gap-24">
      <Navbar />
      <HeroSection />
      <Skills />
    </div>
  );
}
