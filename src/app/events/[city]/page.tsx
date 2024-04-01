import H1 from "@/components/H1";
import React from "react";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default function EventPage({ params }: EventPageProps) {
  const city = params.city;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-dvh">
      <H1>{city === "all" ? "All Events" : `Events in ${city}`}</H1>
    </main>
  );
}
