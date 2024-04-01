"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchForm() {
  const router = useRouter();
  const [searchText, setSearchText] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };

  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for events in any city..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        spellCheck="false"
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
      />
    </form>
  );
}
