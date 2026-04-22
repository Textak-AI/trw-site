import { PAGES } from "../components/shared";
import { SpeakUpContent } from "../components/pages";
import content from "../../public/data/content.json";

export const metadata = {
  title: PAGES.speakup.title,
  description: PAGES.speakup.desc,
};

export default function SpeakUpPage() {
  return <SpeakUpContent data={content.speakup} />;
}
