import { PAGES } from "../components/shared";
import { ContactContent } from "../components/pages";
import content from "../../public/data/content.json";

export const metadata = {
  title: PAGES.contact.title,
  description: PAGES.contact.desc,
};

export default function ContactPage() {
  return <ContactContent data={content.contact} />;
}
