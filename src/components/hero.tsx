"use client";
import { Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { socials } from "@/utils/socials";
import { Button } from "./ui/button";
import { MorphingText } from "./magicui/morphing-text";

export const Hero = () => {
  return (
    <div className="flex gap-5 justify-between">
      <Avatar className="size-48 rounded-md">
        <AvatarImage
          src="/images/me.jpeg"
          alt="Julian Silva da Cunha"
          className="object-cover"
        />
        <AvatarFallback className={"!rounded-lg font-bold text-xl"}>
          JSC
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1.5 font-sans">
        <h1 className="text-5xl font-bold leading-tight tracking-wide">
          Julian Silva da Cunha
        </h1>
        <p className="text-pretty text-xl">
          Desenvolvedor Front-End / Designer em formação
        </p>
        <div className="max-w-md items-center text-pretty">
          <span className="inline-flex gap-x-1.5 items-center leading-none">
            <Globe size={24} />
            Pelotas, Brasil
          </span>
        </div>
        <div className="flex print:flex-col gap-x-1.5 text-sm !mt-0.5">
          {socials.map((social) =>
            social.link === "" ? null : (
              <div key={social.name}>
                <Button
                  className="print:hidden"
                  variant="outline"
                  size={"icon"}
                  asChild
                >
                  <a
                    href={
                      social.name === "Email"
                        ? `mailto:${social.link}`
                        : social.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acessar ${social.name}`}
                  >
                    <social.icon className="!size-6" />
                  </a>
                </Button>
                {social.printable && (
                  <a
                    href={
                      social.name === "Email"
                        ? `mailto:${social.link}`
                        : social.link
                    }
                    className="hidden print:flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acessar ${social.name}`}
                  >
                    <social.icon size={24} className="mr-1" />
                    {social.link}
                  </a>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
