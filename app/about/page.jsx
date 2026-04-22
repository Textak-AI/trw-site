import { PAGES } from "../components/shared";
import { AboutContent } from "../components/pages";
import content from "../../public/data/content.json";

export const metadata = {
  title: PAGES.about.title,
  description: PAGES.about.desc,
};

export default function AboutPage() {
  return <AboutContent data={content.about} />;
}
