import dynamic from "next/dynamic";
import { ComponentType, ReactNode } from "react";
// import { MdxCustomComponents } from "@/components/mdx-custom-components";

type LayoutProps = {
  data: any;
  children: ReactNode;
};

export const MdxWithLayout = ({
  data,
  children,
}: {
  data: any;
  children: any;
}) => {
  console.log(data.layout);
  const Layout = dynamic<LayoutProps>(() =>
    import(`@/components/article-layouts/${"fullpage-layout"}`).then(
      (mod) => mod.default
    )
  );

  return <Layout data={data}>{children}</Layout>;
};
