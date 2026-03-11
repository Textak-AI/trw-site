import { PAGES } from "./components/shared";
import { HomeContent } from "./components/pages";

export const metadata = {
  title: PAGES.home.title,
  description: PAGES.home.desc,
};

export default function HomePage() {
  return <HomeContent />;
}
