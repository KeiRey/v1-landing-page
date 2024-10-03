import Link from "next/link";

import { MotionValue, motion } from "framer-motion";
import Image from "next/image";

export const ProductCard = ({
    product,
    translate,
  }: {
    product: {
      title: string;
      link: string;
      thumbnail: string;
    };
    translate: MotionValue<number>;
  }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        key={product.title}
        className="group/product h-96 w-[30rem] relative flex-shrink-0"
      >
        <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
            <Image
                src={product.thumbnail}
                height="600"
                width="600"
                className="object-cover object-left-top absolute h-full w-full inset-0"
                alt={product.title}
            />
      </Link>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.link}</h2>
      </motion.div>
    );
  };