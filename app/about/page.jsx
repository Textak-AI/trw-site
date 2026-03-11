import { PAGES } from "../components/shared";
import { AboutContent } from "../components/pages";

export const metadata = {
  title: PAGES.about.title,
  description: PAGES.about.desc,
};

export default function AboutPage() {
  return <AboutContent />;
}
