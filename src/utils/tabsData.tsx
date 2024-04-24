import weatherAppImage from "@/images/Weatherapp.jpg";
import countryAppImage from "@/images/CountryApp.png";

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
    <Link href={href ?? ""} target="_blank">
      <Image
        src={src}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
      />
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
  // {
  //   title: "Instagram Clone",
  //   value: "instagram-clone",
  //   content: (
  //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
  //       <p>Instagram Clone</p>
  //       <ImageContainer src={} />
  //     </div>
  //   ),
  // },
];

export { tabs };
