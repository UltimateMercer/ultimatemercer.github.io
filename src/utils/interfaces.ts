import { ptBR, enUS } from "date-fns/locale";
import type { ReactNode } from "react";

export interface DateProps {
  date: string;
  locale?: "pt-br" | "en-us";
}

export interface LanguageStore {
  language: "pt-br" | "en-us";
  setLanguage: (language: string) => void;
}

export interface ArticleLayoutProps {
  doc: {
    title: string;
    tags: string[];
    date: string;
    image?: string;
  };
  children: ReactNode;
}

export interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
  slug: string;
}

export interface TocHeading {
  value: string;
  depth: number;
  url: string;
}
