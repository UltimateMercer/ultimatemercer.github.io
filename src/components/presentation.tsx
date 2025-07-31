"use client";
import { GlobeIcon } from "@phosphor-icons/react";
import Image from "next/image";

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
          <h1 className="text-3xl font-bold tracking-tight">Ultimate Mercer</h1>
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
