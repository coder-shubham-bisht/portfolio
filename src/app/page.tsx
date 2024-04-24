"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { Tabs } from "@/components/ui/tabs";
import { contacts } from "@/utils/contactData";
import { items } from "@/utils/gridData";
import { tabs } from "@/utils/tabsData";

export default function Home() {
  return (
    <main className="">
      {/* source code */}
      <div></div>
      {/* spotlight section */}

      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Shubham Bisht
            <br /> FullStack Developer
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Skilled in Tailwind, ReactJS, NextJS, TypeScript,Prisma,drizzle
            focused on responsive, dynamic web development with efficient code
          </p>
        </div>
      </div>

      {/* project tabs */}
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40 ">
        <h2 className="text-center w-full sm:text-6xl text-3xl mb-10">
          Projects
        </h2>
        <Tabs tabs={tabs} />
      </div>

      {/* projects grid */}
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      {/* contact me section */}
      <div className=" w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-2 ">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Me
          </h1>

          <HoverEffect items={contacts} />
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
