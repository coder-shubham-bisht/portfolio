import SectionTitle from "@/components/SectionTitle";
import { Meteors } from "@/components/meteors";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-0 gap-14 items-center justify-between min-h-[60vh]">
      {/* person info */}
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-4xl lg:7xl font-bold">
          Nice to meet you! 👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            I'm Shubham
          </span>
        </h1>
        <TextGenerateEffect
          className="md:w-96 text-blue-300 font-medium"
          words=" I'm a Web Developer with passion for building modern web application
          that users love ❤️"
        />

        <Link
          href={"mailto:bistshubham2016@gmail.com"}
          className="group mt-10 "
        >
          <h1 className="text-3xl font-bol group-hover:text-green-400 transition-all animate-bounce">
            Contact Me 📬
          </h1>

          <div className=" w-full bg-green-500 h-2  "></div>
          <div className=" w-full bg-indigo-500 h-2 translate-x-2"></div>
        </Link>
      </div>
      {/* available for hire */}
      <div className="mr-28">
        <SectionTitle title="Available for Work" />
      </div>

      {/* square and circle */}
      <div className="hidden sm:block">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500 "></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500 "></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500 "></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>

          <div className="glow animate-pulse absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
      <div className="glow animate-pulse absolute top-[40%] right-1/2 -z-10"></div>
    </div>
  );
};
export default HeroSection;
