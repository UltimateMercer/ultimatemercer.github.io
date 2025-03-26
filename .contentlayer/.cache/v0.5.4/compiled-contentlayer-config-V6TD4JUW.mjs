// contentlayer.config.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.(md|mdx)`,
  contentType: "markdown",
  fields: {
    name: {
      type: "string",
      required: true
    },
    avatar: {
      type: "string",
      required: false
    },
    occupation: {
      type: "string",
      required: false
    },
    email: {
      type: "string",
      required: false
    },
    github: {
      type: "string",
      required: false
    },
    medium: {
      type: "string",
      required: false
    },
    twitter: {
      type: "string",
      required: false
    },
    linkedin: {
      type: "string",
      required: false
    },
    instagram: {
      type: "string",
      required: false
    }
  }
}));
var AuthorsArticle = defineNestedType(() => ({
  name: "AuthorsArticle",
  fields: {
    name: {
      type: "string",
      required: true
    },
    quote: {
      type: "string",
      required: false
    }
  }
}));
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `projects/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      required: false
    },
    cover: {
      type: "string",
      required: false
    },
    imageHeader: {
      type: "string",
      required: false
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    modifiedDate: {
      type: "date",
      required: false
    },
    channel: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: {
        type: "string"
      },
      required: false,
      default: []
    },
    layout: {
      type: "string",
      required: false
    },
    filter: {
      type: "string",
      required: false
    },
    typography: {
      type: "string",
      required: false
    },
    draft: {
      type: "boolean",
      required: true
    },
    authors: {
      type: "list",
      of: AuthorsArticle,
      required: true
    },
    gallery: {
      type: "list",
      of: { type: "string" },
      required: false
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (article) => `/${article._raw.flattenedPath}`
    }
  }
}));
var Academic = defineDocumentType(() => ({
  name: "Academic",
  filePathPattern: `academics/**/*.(md|mdx)`,
  contentType: "markdown",
  fields: {
    institute: {
      type: "string",
      required: true
    },
    course: {
      type: "string",
      required: true
    },
    status: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: false
    }
  }
}));
var Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: `experiences/**/*.(md|mdx)`,
  contentType: "markdown",
  fields: {
    company: {
      type: "string",
      required: true
    },
    role: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: false
    },
    start: {
      type: "string",
      required: true
    },
    end: {
      type: "string",
      required: false
    },
    image: {
      type: "string",
      required: false
    },
    tags: {
      type: "list",
      of: {
        type: "string"
      },
      required: false,
      default: []
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: ".src/content",
  documentTypes: [Article, Author, Academic, Experience],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "night-owl",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link para a se\xE7\xE3o"
          }
        }
      ]
    ]
  }
});
export {
  Academic,
  Article,
  Author,
  AuthorsArticle,
  Experience,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-V6TD4JUW.mjs.map
