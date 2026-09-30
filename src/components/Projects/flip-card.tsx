"use client";

import { easeOut, motion } from "motion/react";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import styles from "./flip-card.module.css";

export interface FlipCardData {
  name: string;
  image: string;
  bio: string;
  github: string;
  live?: string;
}

interface FlipCardProps {
  data: FlipCardData;
}

export function FlipCard({ data }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div
      className="mt-2 relative w-full  h-65 md:w-[350px] md:h-[250px] perspective-1000 cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT: Profile */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-xl h-[250px] border-3 border-foreground/20 flex flex-col items-center justify-center bg-gradient-to-br from-muted via-background to-muted text-center"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        style={{
          transformStyle: "preserve-3d",
          backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45)),
      url(${data.image})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-lg opacity-90 font-bold text-foreground bg-black/50 border-1  p-2 rounded-full">
          {data.name}
        </h2>
      </motion.div>

      {/* BACK: Bio + Stats + Socials */}
      <motion.div
        className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-foreground/20  bg-black h-[250px] flex flex-col justify-between items-center gap-y-4 bg-gradient-to-tr from-muted via-background to-muted "
        initial={{ rotateY: 180 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        <p className="text-[13px] md:text-sm text-muted-foreground text-start p-4 pb-0">
          {data.bio}
        </p>
        <div className="flex text-[17px] w-full justify-center gap-2 pb-3 items-center overflow-hidden">
          <a
            href={data.github}
            className={`${styles.link} w-[40%] rounded-xl p-3 flex justify-center gap-2 h-full items-center`}
          >
            <FaGithub /> Github
          </a>
          {data.live && <a
            href={data.live}
            className={`${styles.link} w-[40%]  rounded-xl p-3 flex justify-center gap-2 h-full items-center`}
          >
            <TbWorldCode /> Live
          </a>}
        </div>
      </motion.div>
    </div>
  );
}
