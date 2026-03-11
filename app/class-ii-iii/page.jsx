import { PAGES } from "../components/shared";
import { ClassIIContent } from "../components/pages";

export const metadata = {
  title: PAGES.classii.title,
  description: PAGES.classii.desc,
};

export default function ClassIIPage() {
  return <ClassIIContent />;
}
