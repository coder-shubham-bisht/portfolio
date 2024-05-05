import weatherAppImage from "@/images/Weatherapp.jpg";
import countryAppImage from "@/images/CountryApp.png";
import RemindMeAppImage from "@/images/RemindMeApp.png";
import infinteScollAppImage from "@/images/infinteScrollApp.png";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ImageContainer({
  src,
  href,
}: {
  src: string | StaticImageData;
  href: string;
}) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="group  w-full  overflow-hidden h-full"
    >
      <Image src={src} alt="dummy image" className="object-contain " />
    </Link>
  );
}
const tabs = [
  {
    title: "Weather App",
    value: "WeatherApp",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Weather App with Shadcn</p>
        <ImageContainer
          src={weatherAppImage}
          href="https://weather-app-blond-chi-94.vercel.app/?lat=45.4335833&lon=3.4161596"
        />
      </div>
    ),
  },
  {
    title: "Countries Api",
    value: "Countriesapi",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Services tab</p>
        <ImageContainer
          src={countryAppImage}
          href="https://legendary-lamington-40fe4a.netlify.app/"
        />
      </div>
    ),
  },
  {
    title: "RemindMeApp",
    value: "CountRemindMeAppriesapi",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>RemindMe</p>
        <ImageContainer
          src={RemindMeAppImage}
          href="https://remind-me-app-lemon.vercel.app/"
        />
      </div>
    ),
  },
  {
    title: "Infinete Scoll app",
    value: "Infinete Scoll app",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>RemindMe</p>
        <ImageContainer
          src={infinteScollAppImage}
          href="https://infinitescroll-with-api-data-fetching.vercel.app/"
        />
      </div>
    ),
  },
];

export { tabs };
