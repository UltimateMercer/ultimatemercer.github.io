"use client";
import { socials } from "@/utils/socials";

export default function Ticker() {
  // Duplicate your socials array
  const duplicatedSocials = [...socials, ...socials, ...socials, ...socials];

  return (
    <section className="relative w-full h-[42px] py-0.25 overflow-hidden bg-[#252525] dark:bg-custom-brown flex ticker-container">
      <div className="flex items-center">
        <div className="text-custom-brown-text dark:text-[#121212] bg-[#252525] dark:bg-custom-brown font-medium pl-5 pr-8 flex-shrink-0">
          Social:
        </div>

        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="animate-scroll">
            {duplicatedSocials.map((social, index) =>
              social.link === "" ? null : (
                <a
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={social.link + index}
                  href={social.link}
                  className="text-custom-brown-text dark:text-[#121212] flex items-center rounded-xl h-10 ticker-item px-12 mr-8"
                >
                  <social.icon className="!size-6 mr-2" />
                  {social.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
