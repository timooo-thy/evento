import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();

  return (
    <main>
      <section className="flex justify-center items-center relative overflow-hidden py-14 md:py-20 ">
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover blur-3xl z-0 overflow-hidden"
          priority
        />
        <div className="z-1 relative flex gap-6 flex-col lg:gap-16 lg:flex-row">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-white/50 object-cover border-2 "
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl text-white/75">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organised by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="capitalize lg:mt-auto mt-5 bg-white/20 text-lg w-[95vw] sm:w-full py-2 rounded border-white/10 border-2 bg-blur state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionParagraph>{event.description}</SectionParagraph>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionParagraph>{event.location}</SectionParagraph>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
