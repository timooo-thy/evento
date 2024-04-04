import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
}

export async function getEventsList(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city:
        city === "all"
          ? undefined
          : city.charAt(0).toUpperCase() + city.slice(1),
    },
    orderBy: {
      date: "asc",
    },
  });

  return events;
}
