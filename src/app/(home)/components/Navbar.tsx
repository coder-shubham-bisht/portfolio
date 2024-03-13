import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const socials = [
  {
    link: "",
    label: "LinkedIn",
    icon: <SiLinkedin className="hover:scale-125 transition-all" />,
  },
  {
    link: "",
    label: "Github",
    icon: <SiGithub className="hover:scale-125 transition-all" />,
  },
];
const Navbar = () => {
  return (
    <header className="sticky top-1 z-50 flex justify-between items-center backdrop-blur-sm container  max-w-[1000px] mx-auto">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 animate-pulse">
        Shubham Bisht 👨🏻‍💻
      </h1>
      <ThemeToggle />
      <nav className="flex justify-between items-center">
        <div className=" flex items-center gap-5">
          {socials.map((social, index) => {
            return (
              <Link
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={index}
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
