"use client";
import { GlobeIcon } from "@phosphor-icons/react";
import Image from "next/image";
import RotatingText from "@/components/RotatingText/RotatingText";
export const Presentation = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#252525] dark:bg-custom-brown">
      <div className="flex items-center gap-8 px-8 py-10 rounded-2xl bg-custom-brown dark:bg-[#252525]">
        <Image
          src={"/images/ultimate-logo-dark.svg"}
          className="block dark:hidden"
          width={150}
          height={150}
          alt="logo"
        />
        <Image
          src={"/images/ultimate-logo-red.svg"}
          className="dark:block hidden"
          width={150}
          height={150}
          alt="logo"
        />
        <div className="text-[#121212] dark:text-custom-brown-text">
          <RotatingText
            texts={["Ultimate Mercer", "Julian Silva da Cunha"]}
            mainClassName="text-4xl font-bold tracking-tight overflow-hidden"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.075}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
          {/* <h1 className="text-3xl font-bold tracking-tight">Ultimate Mercer</h1> */}
          <p className="text-lg">
            Desenvolvedor Front-End / Designer em formação
          </p>
          <div className="flex items-center text-base gap-1">
            <GlobeIcon size={24} />
            Pelotas, Brasil
          </div>
        </div>
      </div>
    </section>
  );
};
