import EventCard from "./EventCard";
import { getEventsList } from "@/lib/utils";
import PaginationControls from "./PaginationControls";

type EventsListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, remainingCount } = await getEventsList(city, page);
  const nextPage = remainingCount > 0 ? `/events/${city}?page=${page + 1}` : "";
  const previousPage = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  return (
    <>
      <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <PaginationControls nextPage={nextPage} previousPage={previousPage} />
      </section>
    </>
  );
}
