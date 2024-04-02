import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";
import React from "react";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-dvh">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${city}`}
      </H1>
      <EventsList events={events} />
    </main>
  );
}
