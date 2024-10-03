import Image from "next/image";
import { Block } from "./Block";

export const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <Image
      src="/Logo.png"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
      width={56} 
      height={56} 
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, KlikFilm <span className="text-zinc-400">is live now.</span>
    </h1>
  </Block>
);
