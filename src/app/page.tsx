import { MenuSection } from "@/components/menu";
import { Presentation } from "@/components/presentation";
import Ticker from "@/components/ticker-component";

export default function Home() {
  return (
    <>
      <Presentation />
      <Ticker />
      <MenuSection />
    </>
  );
}
