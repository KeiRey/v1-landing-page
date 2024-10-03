"use client";

import React from "react";
import { parallaxContent } from "@/common/constant/dummy";
import { TextParallaxContent } from "./TextParallaxContent";
import { Content } from "./Content";

export const ParallaxContent = () => {

  return (
    <div className="bg-black">
      {parallaxContent.map((content) => (
        <TextParallaxContent
          key={content.heading}
          imgUrl={content.imgUrl}
          subheading={content.subheading}
          heading={content.heading}
        >
          <Content contentTitle={content.contentTitle} contentDescription={content.contentDescription} />
        </TextParallaxContent>
      ))}
    </div>
  );
};