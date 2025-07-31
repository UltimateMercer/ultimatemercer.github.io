import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { projects } from "../../.source";

export const allProjects = loader({
  baseUrl: "/projects",
  // source: createMDXSource(projects),
  source: projects.toFumadocsSource(),
});
