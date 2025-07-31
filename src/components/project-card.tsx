import Image from "next/image";
import { projectCardStyles } from "@/utils/styles";
import type { Project } from "@/utils/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// https://i.imgur.com/ps1THsK.jpg

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const fallbackImage = "/images/blklight-thumb.jpg";

  const cardImage = (data: any) => {
    const image = data.cover
      ? data.cover
      : data.imageHeader
      ? data.imageHeader
      : fallbackImage;
    return image;
  };

  return (
    <div
      className={projectCardStyles(
        "group p-0 h-[550px] text-custom-brown-text"
      )}
    >
      {/* group-hover:filter-black-red */}
      {/* https://i.imgur.com/BCY3uY6.jpg */}
      <div className="card-overlay">
        <Image
          src={cardImage(project)}
          className={cn(
            "w-full h-[550px] object-cover rounded-2xl filter-black-gold-grey",
            {
              "group-hover:filter-grey-gold-black":
                project.filter === "filter-grey-gold-black",
              "group-hover:filter-black-gold-uv":
                project.filter === "filter-black-gold-uv",
              "group-hover:filter-black-gold-grey":
                project.filter === "filter-black-gold-grey",
              "group-hover:filter-black-red":
                project.filter === "filter-black-red",
              "group-hover:filter-blklight-bluesky-white-black":
                project.filter === "filter-blklight-bluesky-white-black",
            }
          )}
          width={1000}
          height={1000}
          alt="project image"
        />
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 p-8 bg-gradient-to-b from-transparent from-35% to-black/90 rounded-2xl">
        <div className="flex flex-col justify-end h-full">
          <h4 className="text-3xl font-bold mb-2.5">{project.title}</h4>
          {project.description && (
            <p className="font-medium text-sm tracking-wide">
              {project.description}
            </p>
          )}
          {project.url && (
            <p className="mt-4 text-sm font-medium tracking-widest">
              {project.url}
            </p>
          )}

          <Button variant="outline" asChild>
            <Link href={project.url}>View Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
