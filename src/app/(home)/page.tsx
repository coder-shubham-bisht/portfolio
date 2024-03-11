import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="container  max-w-[1000px] mx-auto overflow-hidden  flex flex-col gap-24">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
