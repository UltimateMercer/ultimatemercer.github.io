import { compareDesc } from "date-fns";

interface ProjectLangProps {
  projects: any;
  lang?: "pt-br" | "en-us" | string;
}

export const getProjects = ({
  projects = [],
  lang = "en-us",
}: ProjectLangProps) => {
  return projects
    .filter((obj: any) => !obj.draft && obj.lang === lang)
    .sort((a: any, b: any) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
};
