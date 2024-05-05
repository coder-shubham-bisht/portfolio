import weatherAppImage from "@/images/Weatherapp.jpg";
import countryAppImage from "@/images/CountryApp.png";
import RemindMeAppImage from "@/images/RemindMeApp.png";
import infinteScollAppImage from "@/images/infinteScrollApp.png";

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
      className="  rounded-xl group  relative w-full h-40 overflow-hidden"
    >
      <Image
        className=" object-cover  w-full h-full group-hover:scale-110 transition-all duration-500 absolute"
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
    title: "RemindMe App",
    description:
      "This website is built with  Nextjs, Tailwindcss, Shadcn, Drizzle , Neon Db, Clerk Auth ",
    header: (
      <ItemImage
        src={RemindMeAppImage}
        href="https://remind-me-app-lemon.vercel.app/"
      />
    ),
  },
  {
    title: "Infinte scroll with Server actions",
    description:
      "This website is built with  Nextjs with Server actions to load api data on user scoll",
    header: (
      <ItemImage
        src={infinteScollAppImage}
        href="https://infinitescroll-with-api-data-fetching.vercel.app/"
      />
    ),
  },
];

export { items };
