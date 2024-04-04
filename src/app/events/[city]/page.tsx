import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import React, { Suspense } from "react";
import Loading from "./loading";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventPageProps) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-dvh">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${city}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
