import { PAGES } from "../components/shared";
import { InsightsContent } from "../components/pages";
import content from "../../data/content.json";

export const metadata = {
  title: PAGES.insights.title,
  description: PAGES.insights.desc,
};

export default function InsightsPage() {
  return <InsightsContent data={content.insights} />;
}
