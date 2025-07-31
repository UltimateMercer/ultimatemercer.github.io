import {
  defineCollections,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

import { compareDesc } from "date-fns";

export const projects = defineDocs({
  dir: "src/content/projects",
  docs: {
    schema: z.object({
      title: z.string(),
      description: z.string().nullable().optional(),
      imageHeader: z.string().optional(),
      cover: z.string().optional(),
      date: z.date().or(z.string()),
      modifiedDate: z.date().or(z.string()).nullable().optional(),
      channel: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      layout: z.string().optional(),
      filter: z.string().optional(),
      typography: z.string().nullable().optional(),
      draft: z.boolean().default(false),
      authors: z
        .array(
          z.object({
            name: z.string(),
            quote: z.string().nullable().optional(),
          })
        )
        .nullable()
        .optional(),
      gallery: z.array(z.string()).nullable().optional(),
      lang: z.enum(["en-us", "pt-br"]),
    }),
  },
  meta: {
    // options for `meta` collection
  },
});

// export const projects = defineCollections({
//   type: "doc",
//   dir: "src/content/projects",
//   schema: frontmatterSchema.extend({
//     title: z.string(),
//     description: z.string().nullable().optional(),
//     imageHeader: z.string().optional(),
//     cover: z.string().optional(),
//     date: z.date().or(z.string()),
//     modifiedDate: z.date().or(z.string()).nullable().optional(),
//     channel: z.string().optional(),
//     category: z.string().optional(),
//     tags: z.array(z.string()).optional(),
//     layout: z.string().optional(),
//     filter: z.string().optional(),
//     typography: z.string().nullable().optional(),
//     draft: z.boolean().default(false),
//     authors: z
//       .array(
//         z.object({
//           name: z.string(),
//           quote: z.string().nullable().optional(),
//         })
//       )
//       .nullable()
//       .optional(),
//     gallery: z.array(z.string()).nullable().optional(),
//     lang: z.enum(["en-us", "pt-br"]),
//   }),
// });

// export function getProjects(lang = "en-us") {
//   return projects.docs
//     .filter((doc) => doc.file.path.startsWith(`blog/${lang}/`))
//     .sort((a, b) => {
//       // Assuming 'date' is a frontmatter property for sorting blog posts
//       const dateA = new Date(a.data.date || 0).getTime();
//       const dateB = new Date(b.data.date || 0).getTime();
//       return compareDesc(dateA, dateB); // Sort in descending order (newest first)
//     });
// }
