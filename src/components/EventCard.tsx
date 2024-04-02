import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
    >
      <section className="w-full h-full relative flex flex-col state-effects bg-white/[3%] rounded-xl overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="text-sm text-white/50 mt-4">{event.organizerName}</p>
          <p>{event.location}</p>
          <section className="flex flex-col justify-center items-center absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
            <p className="text-xl font-bold">
              {new Date(event.date).toLocaleDateString("en-US", {
                day: "2-digit",
              })}
            </p>
            <p className="text-xs uppercase text-accent -mb-[5px]">
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "short",
              })}
            </p>
          </section>
        </div>
      </section>
    </Link>
  );
}
