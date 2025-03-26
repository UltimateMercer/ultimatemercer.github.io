"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FormatDate } from "./date-format";
import { Project } from "@/types";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "./ui/badge";

interface CardProps {
  document: Project;
  authors: any;
  isFeatured?: boolean;
}

export const CardBackground = ({
  document,
  authors,
  isFeatured = false,
}: CardProps) => {
  const fallbackImage = "/images/blklight-thumb.jpg";

  const image = (document: any) => {
    const data = document.cover
      ? document.cover
      : document.imageHeader
      ? document.imageHeader
      : fallbackImage;
    return data;
  };
  return (
    <div className="card card-background border border-dark-500 dark:border-light-500 hover:hover-card !rounded-xs hover:hover-card-dark-bordered hover:dark:hover-card-light-bordered view-anchor group">
      <img
        src={image(document)}
        className={`!rounded-xs scale-150 ${document.filter} ${
          isFeatured
            ? "card-background-image-featured"
            : "card-background-image"
        }`}
        alt={`${document.title} image`}
      />
      <div className="mask texture-mask-4"></div>
      <div className="card-img-overlay flex flex-col">
        <div className="flex items-center leading-normal !text-base">
          <span className="marker-line text-light-500 rounded-xs font-medium bg-dark-500 !py-1 text-lg tracking-wide">
            <FormatDate date={document.date} />
          </span>
        </div>
      </div>
      <div className="card-img-overlay flex flex-col justify-end">
        <h3 className="card-title text-3xl">
          <Link
            className=""
            href={`${document.slug}`}
            aria-label="Ir para o projeto"
          >
            <span className="marker-line rounded-xs bg-dark-500 text-light-500 !py-1 hover:underline underline-offset-1">
              {document.title}
            </span>
          </Link>
        </h3>

        <div className="flex mt-1">
          {authors &&
            authors.map((author: any) => (
              <div key={author.name} className="flex items-center my-1">
                <div className="shrink-0">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <img
                          id={`anchor-${author.slug}-${document.slug}`}
                          src={author.avatar}
                          className="w-[50px] h-[50px] object-cover rounded-full border border-dark-500 mr-2"
                          alt={`${author.name} avatar`}
                        />
                      </TooltipTrigger>
                      <TooltipContent align="center" side="right">
                        <p>{author.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            ))}

          <div className="flex flex-1 items-center">
            <Button className="ml-auto" asChild>
              <Link href={`${document.slug}`} aria-label="Ir para o projeto">
                Ler mais
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
