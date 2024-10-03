import { products, testimonials } from "@/common/constant/dummy";
import Grid from "@/modules/Grid";
import Home from "@/modules/Home/components/Home";
import MovingCard from "@/modules/MovingCard";
import ParallaxContent from "@/modules/ParallaxContent";
import Spotlight from "@/modules/Spotlight";

export default function HomePage() {
  return (
    <>
      <Home products={products} />
      <ParallaxContent />
      <MovingCard speed="normal" items={testimonials} />
      <MovingCard speed="normal" items={testimonials} direction="right" />
      <Grid />
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            KlikFilm <br /> Bring you the best movie experience
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            KlikFilm is a movie streaming platform that provides a wide range of movies, series, and documentaries. 
          </p>
        </div>
      </div>
    </>
  );
}
