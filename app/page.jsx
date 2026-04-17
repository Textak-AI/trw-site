import { PAGES } from "./components/shared";
import { HomeContent } from "./components/pages";
import content from "../data/content.json";

export const metadata = {
  title: PAGES.home.title,
  description: PAGES.home.desc,
};

export default function HomePage() {
  return <HomeContent data={content.home} />;
}
