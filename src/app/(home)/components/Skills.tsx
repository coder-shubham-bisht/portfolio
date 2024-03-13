import SectionTitle from "@/components/SectionTitle";
import { HoverEffect } from "@/components/card-hover-effect";
import { Meteors } from "@/components/meteors";
import { Button } from "@/components/ui/moving-border";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    text: "React",
    icon: <SiReact className="text-5xl text-[#61DAFB]" />,
  },
  {
    text: "NextJS",
    icon: <SiNextdotjs className="text-5xl " />,
  },
  {
    text: "Javascript",
    icon: <SiJavascript className="text-5xl text-[#EFD81D]" />,
  },
  {
    text: "Typescript",
    icon: <SiTypescript className="text-5xl text-[#2F74C0]" />,
  },
  {
    text: "HTML",
    icon: <SiHtml5 className="text-5xl text-[#DD4B25]" />,
  },
  {
    text: "CSS",
    icon: <SiCss3 className="text-5xl text-[#254BDD]" />,
  },
  {
    text: "TailwindCss",
    icon: <SiTailwindcss className="text-5xl text-[#18B2B6]" />,
  },
];
const Skills = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <SectionTitle title="Skills" />
      </div>
      {/* all skills */}
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};
export default Skills;
