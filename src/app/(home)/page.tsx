import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Button } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <div className="container  max-w-[1000px] mx-auto  flex flex-col gap-24">
      <Navbar />
      <HeroSection />
    </div>
  );
}
