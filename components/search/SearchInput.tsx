"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import React, { useId, useState, useEffect } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const inputId = useId();
  const instructionsId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    //preserve search value across all instances
    window.sessionStorage.setItem("query", val);
    setQuery(val);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keywords = query
      .split(",")
      .map((k) => k?.trim())
      .filter((k) => k);

    router.push(`/search`);
  };

  useEffect(() => {
    setQuery(window.sessionStorage.getItem("query") || "");
  }, []);

  return (
    <form
      className="flex-col tiny:max-h-[75vh] max-h-96 flex "
      onSubmit={onSubmit}
    >
      <label className="w-full block  mt-4" htmlFor={inputId}>
        <input
          aria-describedby={instructionsId}
          type="search"
          name="search"
          id={inputId}
          value={query}
          onChange={handleChange}
          placeholder="Search keywords..."
          className="w-full bg-input p-2 px-3 rounded outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  transition-colors placeholder:text-muted-foreground text-foreground "
        />

        <span className="sr-only">Search</span>
      </label>
      <ScrollArea className="flex-1 text-sm" id={instructionsId}>
        <p className="text-lg font-semibold my-2">Tip:</p>

        <p className="!text-sm">
          To narrow down your search for articles even more, you can specify one
          or multiple comma-separated search keywords. As with other parameters,
          you can also exclude keywords by prepending a - symbol. Find a few
          clarifications about this parameter below.
        </p>

        <ul className="space-y-3 list-disc p-5 ">
          <li>
            <code className="p-1 rounded  text-xs bg-destructive font-medium text-destructive-foreground">
              &amp; keywords = food industry
            </code>{" "}
            - Search for keyword
            <q>food industry</q>
          </li>
          <li>
            <code className="p-1 rounded  text-xs bg-destructive font-medium text-destructive-foreground">
              &amp; keywords = food industry, meat
            </code>{" "}
            - Search for keywords <q>food industry</q> and <q>meat</q>
          </li>
          <li>
            <code className="p-1 rounded  text-xs bg-destructive font-medium text-destructive-foreground">
              &amp; keywords = food industry, -meat
            </code>{" "}
            - Search for keywords <q>food industry</q>, but exclude <q>meat</q>
          </li>
          <li>
            <code className="p-1 rounded  text-xs bg-destructive font-medium text-destructive-foreground">
              &amp; keywords = -food industry, -meat
            </code>{" "}
            - Search for all news, excluding <q>food industry</q> and{" "}
            <q>meat</q>
          </li>
          <li>
            <code className="p-1 rounded  text-xs bg-destructive font-medium text-destructive-foreground">
              &amp; keywords = a-plus
            </code>{" "}
            - Search for keyword <q>a-plus</q>
          </li>
          <li>
            <code className="p-1 rounded  text-xs bg-destructive font-medium text-destructive-foreground">
              &amp; keywords = a, -plus
            </code>{" "}
            - Search for keyword <q>a</q>, but exclude <q>plus</q>
          </li>
        </ul>
      </ScrollArea>
    </form>
  );
};

export default SearchInput;
