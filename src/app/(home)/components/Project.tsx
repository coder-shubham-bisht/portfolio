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
      <SiNextdotjs className="md:text-5xl text-xl" />,
      <SiTailwindcss className="md:text-5xl text-xl text-[#18B2B6]" />,
      <SiReact className="md:text-5xl text-xl text-[#61DAFB]" />,
      <SiTypescript className="md:text-5xl text-xl text-[#2F74C0]" />,
    ],
    cover: "weatherApp.png",
    link: "https://weather-app-blond-chi-94.vercel.app/",
  },
  {
    title: "Country App",
    tech: [
      <SiJavascript className="md:text-5xl text-xl text-[#EFD81D]" />,
      <SiHtml5 className="md:text-5xl text-xl text-[#DD4B25]" />,
      <SiCss3 className="md:text-5xl text-xl text-[#254BDD]" />,
    ],
    link: "https://legendary-lamington-40fe4a.netlify.app",

    cover: "CountryApp.png",
  },
];

const Project = () => {
  return (
    <div className=" flex flex-col gap-8 mb-10">
      <div className="flex items-center justify-center">
        <SectionTitle title="Projects" />
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 items-center justify-center">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} target="_blank" key={idx}>
              <h3 className="text-center text-2xl mb-2 font-bold">
                {project.title}
              </h3>
              <div className="flex items-center justify-center">
                <DirectionAwareHover imageUrl={"/" + project.cover}>
                  <h3 className="font-bold md:text-4xl text-xl mb-6">
                    {project.title}
                  </h3>
                  <div className="flex gap-5">
                    {project.tech.map((icon, idx) => {
                      return <p key={idx}>{icon}</p>;
                    })}
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Project;
