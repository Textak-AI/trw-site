import { PAGES } from "../components/shared";
import { EventsContent } from "../components/pages";
import content from "../../data/content.json";

export const metadata = {
  title: PAGES.events.title,
  description: PAGES.events.desc,
};

export default function EventsPage() {
  return <EventsContent data={content.events} />;
}
