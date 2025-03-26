"use client";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";

export const Navbar = () => {
  const route = useRouter();
  const segment = useSelectedLayoutSegments();
  return (
    <nav className="mx-auto w-full max-w-4xl p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="rounded-lg border-2 bg-[#121212] p-1.5 border-white">
              <img
                src="/images/ultimate-logo-red.svg"
                className="!max-w-none mx-auto w-[45px] h-[45px] block"
                width="42"
                height="42"
                alt="Ultimate Mercer Logo"
              />
            </div>
          </Link>

          {segment && segment.length > 1 && (
            <Button
              variant={"link"}
              onClick={() => route.back()}
              className="cursor-pointer"
              aria-label="Voltar a página anterior"
            >
              <CaretLeft size={24} />
              Voltar
            </Button>
          )}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
