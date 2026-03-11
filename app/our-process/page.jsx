import { PAGES } from "../components/shared";
import { ProcessContent } from "../components/pages";

export const metadata = {
  title: PAGES.process.title,
  description: PAGES.process.desc,
};

export default function ProcessPage() {
  return <ProcessContent />;
}
