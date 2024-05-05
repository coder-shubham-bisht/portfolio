"use client";

import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Spotlight } from "@/components/Spotlight";
import { BackgroundBeams } from "@/components/background-beams";
import { buttonVariants } from "@/components/ui/button";
import { HoverEffect } from "@/components/card-hover-effect";
import { SparklesCore } from "@/components/sparkles";
import { Tabs } from "@/components/tabs";
import { cn } from "@/utils/cn";
import { contacts } from "@/utils/contactData";
import { items } from "@/utils/gridData";
import { tabs } from "@/utils/tabsData";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { Separator } from "@/components/ui/separator";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function Home() {
  return (
    <main>
      {/* source code */}
      <Link
        href="https://github.com/coder-shubham-bisht/portfolio"
        className={cn(
          buttonVariants({
            className: "fixed top-4 right-4  z-50 flex space-x-1 ",
            variant: "default",
          })
        )}
      >
        <span>Code</span> <FaGithub size={24} />
      </Link>

      {/* spotlight section */}

      <div className="h-screen  w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* name and skills description */}
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400  bg-clip-text text-transparent animate-gradient bg-300%">
            Shubham Bisht
            <br />
            FullStack Developer
          </h1>

          <TextGenerateEffect
            className="text-center"
            words=" Skilled in Tailwind, ReactJS, NextJS, TypeScript, Prisma, drizzle focused on responsive, dynamic web development with efficient code"
          />
        </div>

        {/* sparkle background */}
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <Spotlight
          className="top-20 left-10 md:left-60 md:-top-40"
          fill="white"
        />
      </div>

      {/* project tabs */}
      <h2 className=" text-center text-4xl md:text-[6rem] font-bold mt-1 leading-none tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 animate-gradient bg-300%">
        Projects
      </h2>
      <ContainerScroll titleComponent={""}>
        <Tabs tabs={tabs} contentClassName="mt-2 p-0" />
      </ContainerScroll>

      {/* projects grid */}
      <BentoGrid className=" container mb-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
          />
        ))}
      </BentoGrid>

      <Separator />
      {/* contact me section */}
      <div className=" w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased  ">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className=" text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600  text-center font-sans font-bold animate-gradient bg-300%">
            Contact Me
          </h1>

          <HoverEffect items={contacts} />
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
