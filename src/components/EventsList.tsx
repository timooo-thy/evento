import { EventoEvent } from "@prisma/client";
import EventCard from "./EventCard";
import { getEventsList } from "@/lib/utils";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const events: EventoEvent[] = await getEventsList(city);
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
