import weatherAppImage from "@/images/Weatherapp.jpg";
import countryAppImage from "@/images/CountryApp.png";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

function ItemImage({
  src,
  href,
}: {
  src: string | StaticImageData;
  href: string;
}) {
  return (
    <Link
      target="_blank"
      href={href ?? ""}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden  "
    >
      <Image
        className="h-full w-full object-cover"
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}
const items = [
  {
    title: "Weather App",
    description:
      "This website is built with openweatherapi  with techstack like Nextjs , Shadcn , tailwindcss",
    header: (
      <ItemImage
        src={weatherAppImage}
        href="https://weather-app-blond-chi-94.vercel.app/?lat=45.4335833&lon=3.4161596"
      />
    ),
  },
  {
    title: "Countries Api",
    description:
      "This website is built with vanilla Javascript wiht countries Api",
    header: (
      <ItemImage
        src={countryAppImage}
        href="https://legendary-lamington-40fe4a.netlify.app/"
      />
    ),
  },
  {
    title: "Countries Api",
    description: "",
    header: <Skeleton />,
  },
];

export { items };
