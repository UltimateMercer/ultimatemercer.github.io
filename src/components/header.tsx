import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { brandBtnStyles, btnStyles } from "@/utils/styles";
import { Logo } from "./logo";
import { TranslateIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { LangSwitcher } from "./lang-switcher";

export const Header = () => {
  return (
    <>
      <header className="background-header rounded-b-2xl ">
        <Link href="/" className={brandBtnStyles("rounded-br-2xl")}>
          <Logo />
          {/* Ultimate Mercer */}
        </Link>
        <div className="lg:flex hidden "></div>
        <div className="flex justify-end">
          <LangSwitcher />
          <ModeToggle />
        </div>
      </header>
      {/* <header></header> */}
    </>
  );
};
