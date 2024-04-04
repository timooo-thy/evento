import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

type EventPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: EventPageProps): Metadata {
  const city = params.city;
  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
    description:
      city === "all"
        ? "All upcoming events"
        : `All upcoming events in ${
            city.charAt(0).toUpperCase() + city.slice(1)
          }`,
  };
}

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
