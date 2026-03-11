import { PAGES } from "../components/shared";
import { SpeakUpContent } from "../components/pages";

export const metadata = {
  title: PAGES.speakup.title,
  description: PAGES.speakup.desc,
};

export default function SpeakUpPage() {
  return <SpeakUpContent />;
}
