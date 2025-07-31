import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { brandBtnStyles, btnStyles } from "@/utils/styles";
import { Logo } from "./logo";
import { CaretLeftIcon, TranslateIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { LangSwitcher } from "./lang-switcher";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { Button } from "./ui/button";
import { useLanguageStore } from "@/store/useLanguageStore";
import type { LanguageStore } from "@/utils/interfaces";

export const Header = () => {
  const { language } = useLanguageStore() as LanguageStore;

  const route = useRouter();
  const segment = useSelectedLayoutSegments();

  return (
    <>
      <header className="background-header rounded-b-2xl ">
        <Link href="/" className={brandBtnStyles("rounded-br-2xl")}>
          <Logo />
          {/* Ultimate Mercer */}
        </Link>
        <div className="flex ">
          {segment && segment.length > 1 && (
            <Button
              variant={"link"}
              className="text-[#121212] dark:text-custom-brown-text cursor-pointer"
              onClick={() => route.back()}
              aria-label={
                language === "pt-br"
                  ? "Voltar para a página anterior"
                  : "Back to the previous page"
              }
            >
              <CaretLeftIcon size={32} weight="bold" />
              {language === "pt-br" ? "Voltar" : "Back"}
            </Button>
          )}
        </div>
        <div className="flex justify-end">
          <LangSwitcher />
          <ModeToggle />
        </div>
      </header>
      {/* <header></header> */}
    </>
  );
};
