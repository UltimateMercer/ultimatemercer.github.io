import { ListProjectCards } from "@/components/list-project-cards";
import { SectionHero } from "@/components/section-hero";
import { allProjects } from "@/lib/source";
import { Section } from "lucide-react";

export default async function Projects() {
  const projectsRaw = allProjects.getPages();

  const projects = projectsRaw.map((p: any) => ({
    title: p.data.title,
    description: p.data.description,
    imageHeader: p.data.imageHeader,
    cover: p.data.cover,
    date: p.data.date,
    modifiedDate: p.data.modifiedDate,
    channel: p.data.channel,
    category: p.data.category,
    tags: p.data.tags,
    layout: p.data.layout,
    filter: p.data.filter,
    draft: p.data.draft,
    authors: p.data.authors,
    gallery: p.data.gallery,
    lang: p.data.lang,
    url: p.url,
  }));

  // console.log(JSON.stringify(projects.slice(0, 2), null, 2));

  return (
    <section className="dark:bg-custom-brown bg-[#252525] border-b border-[#121212] dark:border-custom-brown rounded-2xl">
      <SectionHero />
      {/* <div className="flex items-center gap-8 px-8 py-10 rounded-2xl bg-custom-brown dark:bg-[#252525]">
        <div className="text-[#121212] dark:text-custom-brown-text">
          <h1 className="text-3xl font-bold tracking-tight">Meus projetos</h1>
          <p className="text-lg">
            Lista de meus projetos pessoais e profissionais
          </p>
        </div>
      </div> */}
      <div className="w-full h-[42px] px-5 flex items-center z-[2]">
        {/* <div className="text-custom-brown-text dark:text-[#121212]  font-medium flex-shrink-0">
          Modos de visualização: em construção
        </div> */}
      </div>

      <ListProjectCards projects={projects} />
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0.25 no-overlay">
        {[...Array(9)].map((_, i) => (
          <ProjectCard key={i} />
        ))}
      </div> */}
    </section>
  );
}
