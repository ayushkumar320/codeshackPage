import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiInstagram, SiGithub, SiLinkedin, SiDiscord, SiWhatsapp } from "react-icons/si";
import { twMerge } from "tailwind-merge";

// LogoItem component with explicit types
interface LogoItemProps {
  children: React.ReactNode;
  className?: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ children, className }) => (
  <div
    className={twMerge(
      "grid h-36 w-52 place-content-center rounded-lg bg-gray-700 text-6xl text-neutral-50",
      className
    )}
  >
    {children}
  </div>
);

// LogoRolodex component with explicit types
interface LogoRolodexProps {
  items: React.ReactNode[];
}

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex: React.FC<LogoRolodexProps> = ({ items }) => {
  const intervalRef = useRef<number | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-gray-950 bg-gray-950"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

// DivOrigami component
export const DivOrigami: React.FC = () => (
  
  <section className="flex h-screen flex-col items-center justify-center gap-12 bg-gradient-to-r from-black to-blue-600 px-4 py-24 md:flex-row">
    <h1
      className="
        text-4xl md:text-6xl font-bold 
        bg-gradient-to-r from-white to-transparent 
        text-transparent bg-clip-text inline-block
      "
    >
      Let us Connect ! Join and follow us here
    </h1>

    <LogoRolodex
      items={[
        <LogoItem key={1} className="bg-pink-300 text-neutral-900">
          <SiInstagram />
        </LogoItem>,
        <LogoItem key={2} className="bg-blue-400 text-black">
          <SiLinkedin />
        </LogoItem>,
        <LogoItem key={3} className="bg-blue-300 text-neutral-900">
          <SiDiscord />
        </LogoItem>,
        <LogoItem key={4} className="bg-black text-white">
          <SiGithub />
        </LogoItem>,
        <LogoItem key={5} className="bg-green-300 text-neutral-900">
          <SiWhatsapp />
        </LogoItem>,
      ]}
    />
  </section>
);
