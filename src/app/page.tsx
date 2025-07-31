import { MenuSection } from "@/components/menu";
import { Presentation } from "@/components/presentation";
import Ticker from "@/components/ticker-component";
import { allProjects } from "@/lib/source";
import { projects } from "../../source.config";

export default function Home() {
  const projectsRaw = allProjects.getPages();
  const projects = projectsRaw.map((p: any) => ({
    title: p.data.title,
    draft: p.data.draft,
    lang: p.data.lang,
  }));

  return (
    <>
      <Presentation />
      <Ticker />
      <MenuSection projects={projects} />
    </>
  );
}
