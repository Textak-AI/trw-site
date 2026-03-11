import { PAGES } from "../components/shared";
import { InsightsContent } from "../components/pages";

export const metadata = {
  title: PAGES.insights.title,
  description: PAGES.insights.desc,
};

export default function InsightsPage() {
  return <InsightsContent />;
}
