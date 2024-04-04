import "server-only";
import { unstable_cache } from "next/cache";
import prisma from "./db";
import { notFound } from "next/navigation";

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});

export const getEventsList = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: {
        equals: city === "all" ? undefined : city,
        mode: "insensitive",
      },
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
        city: {
          equals: city === "all" ? undefined : city,
          mode: "insensitive",
        },
      },
    })) -
    page * 6;

  return { events, remainingCount };
});
