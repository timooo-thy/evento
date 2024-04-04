import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvent(slug: string): Promise<EventoEvent> {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();

  return event;
}

export async function getEventsList(city: string): Promise<EventoEvent[]> {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const events: EventoEvent[] = await response.json();

  return events;
}
