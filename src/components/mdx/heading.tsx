// import { cn } from "@/lib/utils";
// import slugify from "slugify";
// import {
//   forwardRef,
//   ComponentPropsWithoutRef,
//   ElementType,
//   Children,
//   isValidElement,
// } from "react";

// type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// interface HeadingProps<T extends HeadingTag>
//   extends ComponentPropsWithoutRef<T> {
//   as?: T;
// }

// const Heading = forwardRef(
//   <T extends HeadingTag = "h2">(
//     { as, className, children, ...props }: HeadingProps<T>,
//     ref: React.Ref<HTMLHeadingElement>
//   ) => {
//     const Component = as || "h2";

//     // Cria um slug com base no conteúdo textual
//     const text =
//       typeof children === "string"
//         ? children
//         : Array.isArray(children)
//         ? children
//             .map((child) => (typeof child === "string" ? child : ""))
//             .join(" ")
//         : "";

//     const id = slugify(text, { lower: true, strict: true });

//     return (
//       <Component
//         ref={ref}
//         id={id}
//         className={cn("scroll-m-20 font-bold tracking-tight group", className)}
//         {...(props as JSX.IntrinsicElements[T])}
//       >
//         {/* Ícone de link ao lado do heading */}
//         <a
//           href={`#${id}`}
//           className="opacity-0 group-hover:opacity-100 ml-2 text-muted-foreground text-sm no-underline"
//           aria-label="Anchor"
//         >
//           {children}
//         </a>
//       </Component>
//     );
//   }
// );

// Heading.displayName = "Heading";

// export default Heading;

// import { cn } from "@/lib/utils";
// import slugify from "slugify";
// import {
//   forwardRef,
//   ComponentPropsWithoutRef,
//   ElementType,
//   Children,
//   isValidElement,
// } from "react";

// type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// interface HeadingProps<T extends HeadingTag>
//   extends ComponentPropsWithoutRef<T> {
//   as?: T;
// }

// const Heading = forwardRef(
//   <T extends HeadingTag = "h2">(
//     { as, className, children, ...props }: HeadingProps<T>,
//     ref: React.Ref<HTMLHeadingElement>
//   ) => {
//     const Component = as || "h2";

//     const text =
//       typeof children === "string"
//         ? children
//         : Array.isArray(children)
//         ? children
//             .map((child) => (typeof child === "string" ? child : ""))
//             .join(" ")
//         : "";

//     const id = slugify(text, { lower: true, strict: true });

//     return (
//       <Component
//         ref={ref}
//         id={id}
//         className={cn("scroll-m-28 font-bold tracking-tight", className)}
//         {...(props as JSX.IntrinsicElements[T])}
//       >
//         <a href={`#${id}`} className="no-underline text-inherit">
//           {children}
//         </a>
//       </Component>
//     );
//   }
// );

// Heading.displayName = "Heading";

// export default Heading;

import { cn } from "@/lib/utils";
import slugify from "slugify";
import {
  forwardRef,
  ComponentPropsWithoutRef,
  ElementType,
  Children,
  isValidElement,
} from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps<T extends HeadingTag>
  extends ComponentPropsWithoutRef<T> {
  as?: T;
}

const Heading = forwardRef(
  <T extends HeadingTag = "h2">(
    { as, className, children, ...props }: HeadingProps<T>,
    ref: React.Ref<HTMLHeadingElement>
  ) => {
    const Component = as || "h2";

    // Extrai texto dos children
    const getText = (children: React.ReactNode): string => {
      if (typeof children === "string") return children;
      if (Array.isArray(children)) {
        return children.map((child) => getText(child)).join(" ");
      }
      if (isValidElement(children)) {
        return getText(children.props.children);
      }
      return "";
    };

    const text = getText(children);
    const id = slugify(text, { lower: true, strict: true });

    return (
      <Component
        ref={ref}
        id={id}
        className={cn("scroll-m-20 font-bold tracking-tight group", className)}
        {...(props as JSX.IntrinsicElements[T])}
      >
        <a href={`#-${id}`} className="no-underline hover:underline">
          {children}
        </a>
      </Component>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
