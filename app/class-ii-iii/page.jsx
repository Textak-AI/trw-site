import { PAGES } from "../components/shared";
import { ClassIIContent } from "../components/pages";
import content from "../../public/data/content.json";

export const metadata = {
  title: PAGES.classii.title,
  description: PAGES.classii.desc,
};

export default function ClassIIPage() {
  return <ClassIIContent data={content.classii} />;
}
