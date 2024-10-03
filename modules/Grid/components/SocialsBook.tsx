import { SiTiktok } from "react-icons/si";
import { Block } from "./Block";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

export const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-white md:col-span-3"
    >
      <a href="https://play.google.com/store/apps/details?id=net.klikfilm.app&hl=in&gl=US" className="grid h-full place-content-center text-3xl text-green-500">
        <IoLogoGooglePlaystore />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-400 md:col-span-3"
    >
      <a href="https://apps.apple.com/id/app/klikfilm/id1057143732?l=id" className="grid h-full place-content-center text-3xl text-black">
        <IoLogoAppleAppstore />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a href="https://www.tiktok.com/@klikfilm" className="grid h-full place-content-center text-3xl text-black">
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a href="https://x.com/KlikFilm" className="grid h-full place-content-center text-3xl text-white">
        <SlSocialTwitter />
      </a>
    </Block>
  </>
);
