import { Metadata, ResolvingMetadata } from "next";
import { MDXComponents } from "@/components/mdx";
import { getDocument, getDocuments, rawDocuments } from "@/services/index";

const DEFAULT_LAYOUT = "simple-layout";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const docs = await getDocuments();
  console.log(
    docs.map((doc) => ({
      slug: doc.document.slug.replace("/projects/", ""),
    }))
  );

  return docs.map((doc) => ({
    slug: doc.document.slug.replace("/projects/", ""),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = await getDocument(await params);

  return (
    <>
      {article && (
        <MDXComponents
          layout={DEFAULT_LAYOUT}
          doc={article.doc}
          code={article.doc?.body.code}
          authordetails={article.authordetails}
        />
      )}
    </>
  );
}
