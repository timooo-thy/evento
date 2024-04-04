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

export async function getEventsList(city: string, page = 1) {
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
    skip: (page - 1) * 6,
    take: 6,
  });

  const remainingCount =
    (await prisma.eventoEvent.count({
      where: {
        city:
          city === "all"
            ? undefined
            : city.charAt(0).toUpperCase() + city.slice(1),
      },
    })) -
    page * 6;

  return { events, remainingCount };
}
