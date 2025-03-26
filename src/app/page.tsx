import Image from "next/image";
import styles from "./page.module.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { getAcademics, getExperiences, getDocuments } from "@/services/index";
import { MyExperiences } from "@/components/my-experiences";
import { skills } from "@/services/skills";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MyEducations } from "@/components/my-educations";
import { MyProjects } from "@/components/my-projects";
import { ModeToggle } from "@/components/mode-toggle";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default async function Home() {
  const docs = await getDocuments();
  console.log(docs);

  const experiences = getExperiences;
  const educations = getAcademics;
  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="container mx-auto mb-6">
          <Hero />
        </div>
        {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <VelocityScroll>Sobre mim</VelocityScroll>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div> */}
        <div className="container mx-auto mb-6">
          <AboutMe />
        </div>
        <div className="container mx-auto mb-6">
          <TypingAnimation className="text-3xl font-bold leading-tight tracking-wide mb-3">
            Experiências e habilidades
          </TypingAnimation>
          {experiences.map((experience, index) => (
            <MyExperiences
              experience={experience}
              key={`${experience.company}-${index}`}
            />
          ))}
          <Separator className="my-4" />{" "}
          {/* <h2 className="text-3xl font-bold leading-tight tracking-wide mb-3">
            Habilidades
          </h2>
          <TypingAnimation */}
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <Badge
                key={`${skill}-${index}`}
                variant="outline"
                className="mb-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="container mx-auto mb-6">
          <TypingAnimation className="text-3xl font-bold leading-tight tracking-wide mb-3">
            Formações
          </TypingAnimation>
          {educations.map((education, index) => (
            <MyEducations
              education={education}
              key={`${education.institute}-${index}`}
              withImage
            />
          ))}
        </div>
        <div className="container mx-auto">
          <TypingAnimation className="text-3xl font-bold leading-tight tracking-wide mb-3">
            Meus projetos
          </TypingAnimation>
          <MyProjects projects={docs} />
        </div>
      </div>
      {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll>Sobre mim</VelocityScroll>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div> */}
    </>
  );
}
