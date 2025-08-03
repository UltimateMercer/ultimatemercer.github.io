"use client";
import Link from "next/link";
import { socials } from "@/utils/socials";
import { Button } from "./ui/button";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { LanguageStore } from "@/utils/interfaces";

export const Footer = () => {
  const { language } = useLanguageStore() as LanguageStore;
  return (
    <footer className="max-w-full pt-8 px-6 pb-12 print:hidden rounded-t-2xl bg-custom-brown dark:bg-[#252525]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-2">
          <Link href="/" className="">
            <img
              src="/images/ultimate-logo-red.svg"
              className="hidden dark:block"
              width="125"
              height="125"
              alt="Ultimate Mercer Logo"
            />
          </Link>

          <Link href="/" className="">
            <img
              src="/images/ultimate-logo-dark.svg"
              className="block dark:hidden"
              width="125"
              height="125"
              alt="Ultimate Mercer Logo"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <div className="flex gap-2 mb-3">
            {socials.map((social) => {
              return social.link ? (
                <Button key={social.link} variant="ghost" size={"icon"} asChild>
                  <Link
                    href={social.link}
                    className="!text-dark-500 hover:!text-dark-900 dark:!text-light-500 hover:dark:!text-light-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="!size-6" />
                  </Link>
                </Button>
              ) : null;
            })}
          </div>

          <p className="text-sm text-[#121212] dark:text-[#f7f7f7]">
            © {new Date().getFullYear()}
            {language === "pt-br"
              ? " Feito por Julian Silva da Cunha (a.k.a. Ultimate Mercer)"
              : " Made by Julian Silva da Cunha (a.k.a. Ultimate Mercer)"}
          </p>
        </div>
      </div>
    </footer>
  );
};
