"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { Button } from "./ui/button";
import { CaretLeft } from "@phosphor-icons/react";
import type { LanguageStore } from "@/utils/interfaces";

export function NavigationBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const returnBtn = React.useRef("return_btn");
  const router = useRouter();
  const segments = useSelectedLayoutSegments();

  return (
    <div className="sticky top-0 z-50 w-full border-border/40 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 justify-between items-center px-4">
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <div className="inline-flex mr-4">
            <Link href="/" className="">
              <img
                src="/images/ultimate-logo-red.svg"
                className="!max-w-none mx-auto w-[56px] h-[56px] hidden dark:block"
                width="56"
                height="56"
                alt="Ultimate Mercer Logo"
              />
            </Link>

            <Link href="/">
              <img
                src="/images/ultimate-logo-dark.svg"
                className="!max-w-none mx-auto w-[56px] h-[56px] block dark:hidden"
                width="56"
                height="56"
                alt="Ultimate Mercer Logo"
              />
            </Link>
          </div>
          {segments && segments.length > 1 && (
            <Button
              id={returnBtn.current}
              variant={"link"}
              onClick={() => router.push("/")}
            >
              <CaretLeft size={20} />
            </Button>
          )}
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
