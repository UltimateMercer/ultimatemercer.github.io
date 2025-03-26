import { compareDesc } from "date-fns";

import { allArticles } from "contentlayer/generated";
import { allAuthors } from "contentlayer/generated";
import { allExperiences } from "contentlayer/generated";
import { allAcademics } from "contentlayer/generated";

export const DOCS_PER_PAGE = 18;
export const pathName = "projects";

export const rawDocuments = allArticles
  .filter((obj) => obj.draft === false)
  .sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

export const getAuthors = () => {
  return allAuthors;
};

export const getExperiences = allExperiences.sort((a, b) => {
  return compareDesc(new Date(a.start), new Date(b.start));
});

export const getAcademics = allAcademics.sort((a, b) => {
  return compareDesc(new Date(a.start), new Date(b.start));
})

export const frontmatter = (doc) => {
  return {
    title: doc.title,
    description: doc.description,
    imageHeader: doc.imageHeader,
    cover: doc.cover,
    date: doc.date,
    modifiedDate: doc.modifiedDate,
    channel: doc.channel,
    category: doc.category,
    tags: doc.tags,
    layout: doc.layout,
    filter: doc.filter,
    typography: doc.typography,
    draft: doc.draft,
    authors: doc.authors,
    gallery: doc.gallery,
    slug: doc.slug,
  };
};

export const fetchDocuments = (docs) => {
  return docs.map(async (doc) => {
    const document = frontmatter(doc);
    const authorList = doc.authors;
    const authorPromise = authorList.map(async (author) => {
      const authorResults = await allAuthors.filter(
        (obj) => obj.name === author.name
      );
      return authorResults;
    });
    let authordetails = await Promise.all(authorPromise);
    authordetails = authordetails.flat();
    return { document, authordetails };
  });
};

export const initialDisplayDocs = (docs, pageNumber) => {
  let initialDisplayDocuments;
  if (pageNumber) {
    initialDisplayDocuments = docs.slice(
      DOCS_PER_PAGE * (pageNumber - 1),
      DOCS_PER_PAGE * pageNumber
    );
  } else {
    initialDisplayDocuments = docs.slice(0, DOCS_PER_PAGE);
  }

  return initialDisplayDocuments;
};

export const paginationDocs = (docs, pageNumber) => {
  return {
    currentPage: pageNumber ? pageNumber : 1,
    totalPages: Math.ceil(docs.length / DOCS_PER_PAGE),
    totalDocs: docs.length,
  };
};

export const getDocuments = async () => {
  const documents = await Promise.all(fetchDocuments(rawDocuments));
  // const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);
  // const pagination = paginationDocs(documents, pageNumber);

  // return { props: { documents, initialDisplayDocuments, pagination } };
  // return { documents, initialDisplayDocuments, pagination };
  return documents;
};

export const getDocument = async (params) => {
  const allDocuments = await Promise.all(fetchDocuments(rawDocuments));

  const formattedRoute = `/${pathName}/${params.slug}`;
  const documentIndex = allDocuments.findIndex(
    (data) => data.document.slug === formattedRoute
  );

  const prev = {
    document: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].document
      : null,
    authordetails: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].authordetails
      : null,
  };

  const next = {
    document: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].document
      : null,
    authordetails: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].authordetails
      : null,
  };

  const doc = await rawDocuments.find((obj) => obj.slug === formattedRoute);

  const authorList = doc.authors;

  const authorPromise = authorList.map((author) =>
    allAuthors.filter((obj) => obj.name === author.name)
  );
  let authordetails = await Promise.all(authorPromise);
  authordetails = authordetails.flat();
  return { doc, authordetails, prev, next };
};

export const getDocumentsByChannel = async (channel, pageNumber) => {
  const filteredDocuments = channel
    ? rawDocuments.filter((doc) => doc.channel === channel)
    : rawDocuments;

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getDocumentsByCategory = async (category, pageNumber) => {
  const filteredDocuments = category
    ? rawDocuments.filter((doc) => doc.category === category)
    : rawDocuments;

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getDocumentsByTag = async (tag, pageNumber) => {
  const filteredDocuments = tag
    ? rawDocuments.filter((doc) => doc.tags.includes(tag))
    : rawDocuments;

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const user = {
  name: "Julian Silva da Cunha",
  initials: "JSC",
  role: "Desenvolvedor Front-end",
  location: "Pelotas, Rio Grande do Sul, Brasil",
  locationLink: "https://www.google.com/maps/place/Pelotas+-+RS",
  about:
    "Atualmente sou Desenvolvedor Front-end, tendo experiência trabalhando com React e Vue.JS. Em projetos pessoais venho praticando com frameworks back-end, como Express e NestJS, com o intuito de me tornar um Desenvolvedor FullStack.",
  avatar: "https://i.imgur.com/rkCtudG.jpg",
  social: {
    website: "http://ultimatemercer.com",
    email: "ultimatemercer.blklight+dev@gmail.com",
    github: "https://github.com/UltimateMercer",
    linkedin: "https://www.linkedin.com/in/ultimatemercer/",
    behance: "https://www.behance.net/ultimatemercer",
    medium: "https://medium.com/@ultimatemercer",
    instagram: "",
  },
};

export const techs = [
  {
    name: "Vue.JS",
    imageUrl: "https://i.imgur.com/qbNTl5W.png",
  },
  {
    name: "React",
    imageUrl: "https://i.imgur.com/Wa0TqhR.jpg",
  },
  {
    name: "Javascript",
    imageUrl: "https://i.imgur.com/MHHLm6d.png",
  },
  {
    name: "Next.JS",
    imageUrl: "https://i.imgur.com/WTpjqbw.jpg",
  },
  {
    name: "Nuxt",
    imageUrl: "https://i.imgur.com/vN0N4iX.jpg",
  },
  {
    name: "Node.js",
    imageUrl: "https://i.imgur.com/nStZvOB.jpg",
  },
  {
    name: "TailwindCSS",
    imageUrl: "https://i.imgur.com/kV9AGth.jpg",
  },
  {
    name: "Bootstrap",
    imageUrl: "https://i.imgur.com/eazD6Ja.jpg",
  },
  {
    name: "SASS",
    imageUrl: "https://i.imgur.com/wqYQJE0.jpg",
  },
  {
    name: "Git",
    imageUrl: "https://i.imgur.com/TFXBfp2.jpg",
  },

  {
    name: "Github",
    imageUrl: "https://i.imgur.com/NQEpMuE.jpg",
  },
  {
    name: "NPM",
    imageUrl: "https://i.imgur.com/AcB6T5Z.jpg",
  },
  {
    name: "Yarn",
    imageUrl: "https://i.imgur.com/3UvMJL4.jpg",
  },
  {
    name: "VSCode",
    imageUrl: "https://i.imgur.com/84ae3eq.jpg",
  },
  {
    name: "Docker",
    imageUrl: "https://i.imgur.com/xPqPYPd.jpg",
  },
  {
    name: "PostgreSQL",
    imageUrl: "https://i.imgur.com/aDnvaLa.jpg",
  },
];

export const links = {
  github: "https://github.com/UltimateMercer",
  email: "juliancunha2010@gmail.com",
  linkedin: "https://www.linkedin.com/in/ultimatemercer/",
  medium: "https://medium.com/@ultimatemercer",
  instagram: "https://www.instagram.com/ultimatemercer/",
  behance: "https://www.behance.net/ultimatemercer",
};
