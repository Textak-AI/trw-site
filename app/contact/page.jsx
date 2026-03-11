import { PAGES } from "../components/shared";
import { ContactContent } from "../components/pages";

export const metadata = {
  title: PAGES.contact.title,
  description: PAGES.contact.desc,
};

export default function ContactPage() {
  return <ContactContent />;
}
