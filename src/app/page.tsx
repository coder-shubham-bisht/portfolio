"use client";

import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { Spotlight } from "@/components/Spotlight";
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
import { Vortex } from "@/components/vortex";
import { Boxes } from "@/components/background-boxes";

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

      <div className="h-screen  w-full rounded-md  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* name and skills description */}
        <div className="translate-y-3/4 px-4">
          <h1 className="text-4xl w-full animate-bounce md:text-7xl font-bold text-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400  bg-clip-text text-transparent animate-gradient bg-300%">
            Shubham Bisht
            <br />
            FullStack Developer
          </h1>

          <TextGenerateEffect
            className="text-center"
            words=" Skilled in Tailwind, ReactJS, NextJS, TypeScript, Prisma, drizzle focused on responsive, dynamic web development with efficient code"
          />
        </div>

        <Vortex
          backgroundColor="transparent"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="w-full absolute inset-0 h-full"
        />
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

      <ContainerScroll
        titleComponent={
          <h2 className=" text-center text-4xl md:text-[6rem] font-bold mt-20 leading-none tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 animate-gradient bg-300%">
            Projects
          </h2>
        }
      >
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

      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />

        <h1 className=" text-lg md:text-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600  text-center font-sans font-bold animate-gradient bg-300%">
          Contact Me
        </h1>

        <div className="max-w-2xl mx-auto p-4">
          <HoverEffect items={contacts} />
        </div>
      </div>

      {/* <Boxes /> */}
    </main>
  );
}
