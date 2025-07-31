"use client";
import { MenuCard } from "@/components/menu-card";
// import { Brain } from "lucide-react";
// import {
//   GraduationCapIcon,
//   UserCircleIcon,
//   FoldersIcon,
//   ToolboxIcon,
//   FileTextIcon,
// } from "@phosphor-icons/react";
import { useMenu } from "./menu-items";

export const MenuSection = () => {
  // const menu = [
  //   {
  //     title: "About",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda animi dolores suscipit laborum eum doloremque, aliquid, eius et beatae cum nulla illo sit ullam? Ratione unde soluta rem quaerat!",
  //     icon: UserCircleIcon,
  //     count: "",
  //     url: "/about",
  //   },
  //   {
  //     title: "Experiences",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda animi dolores suscipit laborum eum doloremque, aliquid, eius et beatae cum nulla illo sit ullam? Ratione unde soluta rem quaerat!",
  //     icon: Brain,
  //     count: "8",
  //     url: "/experiences",
  //   },
  //   {
  //     title: "Academics",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda animi dolores suscipit laborum eum doloremque, aliquid, eius et beatae cum nulla illo sit ullam? Ratione unde soluta rem quaerat!",
  //     icon: GraduationCapIcon,
  //     count: "3",
  //     url: "#",
  //   },
  //   {
  //     title: "Projects",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda animi dolores suscipit laborum eum doloremque, aliquid, eius et beatae cum nulla illo sit ullam? Ratione unde soluta rem quaerat!",
  //     icon: FoldersIcon,
  //     count: "3",
  //     url: "/projects",
  //   },
  //   {
  //     title: "About this website",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda animi dolores suscipit laborum eum doloremque, aliquid, eius et beatae cum nulla illo sit ullam? Ratione unde soluta rem quaerat!",
  //     icon: ToolboxIcon,
  //     count: "3",
  //     url: "#",
  //   },
  //   {
  //     title: "CV",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda animi dolores suscipit laborum eum doloremque, aliquid, eius et beatae cum nulla illo sit ullam? Ratione unde soluta rem quaerat!",
  //     icon: FileTextIcon,
  //     count: "",
  //     url: "#",
  //   },
  // ];
  const menu = useMenu();
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-[#252525] dark:bg-custom-brown gap-0.25 border-b border-[#121212] dark:border-custom-brown">
      {menu.map((item) => (
        <MenuCard data={item} key={item.title} />
      ))}
    </section>
  );
};
