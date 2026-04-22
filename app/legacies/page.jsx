import { PAGES } from "../components/shared";
import { LegaciesContent } from "../components/pages";
import content from "../../public/data/content.json";

export const metadata = {
  title: PAGES.legacies.title,
  description: PAGES.legacies.desc,
};

export default function LegaciesPage() {
  return <LegaciesContent data={content.legacies} />;
}
