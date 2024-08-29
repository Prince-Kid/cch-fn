import Announcements from "./components/announcements/announcements";
import Hero from "./components/Home/hero/hero";
import Homepage from "./components/Home/navbar/homepage";

export default function Home() {
  return (
    <>
      <Homepage />
      <Hero />
      <Announcements />
    </>
  );
}
