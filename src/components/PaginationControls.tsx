import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PaginationControlsProps = {
  nextPage: string;
  previousPage: string;
};

const btnStyles =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm";

export default function PaginationControls({
  nextPage,
  previousPage,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPage ? (
        <Link href={previousPage} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link href={nextPage} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
