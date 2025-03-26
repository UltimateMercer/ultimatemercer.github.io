import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const MyProjects = ({ projects }: any) => {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {projects.map((project: any) => (
          <CarouselItem
            key={project.document.slug}
            className="xl:basis-1/3 lg:basis-1/2 basis-full"
          >
            <div className="relative flex self-start min-w-0 flex-col bg-clip-border border border-black dark:border-white rounded-md  min-h-80 overflow-hidden group">
              <img
                src={
                  project.document.imageHeader
                    ? project.document.imageHeader
                    : project.document.cover
                }
                className="w-full h-[400px] object-cover rounded-md"
                alt={project.document.title}
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 rounded-md flex flex-col">
                <Link
                  href={`${project.document.slug}`}
                  className={cn("hover:underline text-white")}
                >
                  <h4 className={cn("text-[24px] font-barlow font-bold mb-2")}>
                    <span
                      className={cn(
                        "marker-line text-white bg-black py-1 px-2"
                      )}
                    >
                      {project.document.title}
                    </span>
                  </h4>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
