import { PAGES } from "../components/shared";
import { ProcessContent } from "../components/pages";
import content from "../../public/data/content.json";

export const metadata = {
  title: PAGES.process.title,
  description: PAGES.process.desc,
};

export default function ProcessPage() {
  return <ProcessContent data={content.process} />;
}
