import Link from "next/link";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DirectionAwareHover } from "../../../components/direction-aware-hover";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "Weather App",
    tech: [
      <SiNextdotjs className="text-5xl" />,
      <SiTailwindcss className="text-5xl text-[#18B2B6]" />,
      <SiReact className="text-5xl text-[#61DAFB]" />,
      <SiTypescript className="text-5xl text-[#2F74C0]" />,
    ],
    link: "https://legendary-lamington-40fe4a.netlify.app",
    cover: "weatherApp.png",
  },
  {
    title: "Country App",
    tech: [
      <SiJavascript className="text-5xl text-[#EFD81D]" />,
      <SiHtml5 className="text-5xl text-[#DD4B25]" />,
      <SiCss3 className="text-5xl text-[#254BDD]" />,
    ],
    link: "https://weather-app-blond-chi-94.vercel.app/",
    cover: "CountryApp.png",
  },
];

const Project = () => {
  return (
    <div className=" flex flex-col gap-8 mb-10">
      <div className="flex items-center justify-center">
        <SectionTitle title="Projects" />
      </div>

      <div className="flex gap-10 flex-wrap items-center justify-center">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={project.title} target="_blank">
              <h3 className="text-center text-2xl mb-2 font-bold">
                {project.title}
              </h3>
              <DirectionAwareHover imageUrl={"/" + project.cover}>
                <h3 className="font-bold text-4xl mb-6"> {project.title}</h3>
                <div className="flex gap-5">
                  {project.tech.map((icon, idx) => {
                    return <p key={idx}>{icon}</p>;
                  })}
                </div>
              </DirectionAwareHover>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Project;
