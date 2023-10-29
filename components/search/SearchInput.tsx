"use client";

import { useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Category } from "@/lib/types/requests.types";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectAppState, setQuery } from "@/redux/slice";

const options = ["business", "entertainment", "health", "sports", "technology"];

const SearchInput = () => {
  const [cat, setCat] = useState<Category | "">("");

  const dispatch = useAppDispatch();

  const { query } = useAppSelector(selectAppState);

  const router = useRouter();

  const inputId = useId();
  const instructionsId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    dispatch(setQuery(val));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keywords = query
      .split(",")
      .map((k) => k?.trim())
      .filter((k) => k)
      .map((k) => `keywords=${encodeURIComponent(k)}`)
      .join("&");

    const fullQuery = cat ? `${keywords}&categories=${cat}` : keywords;

    if (fullQuery) {
      router.push(`/search?${fullQuery}`);
    }
  };

  const handleCatChange = (c: Category) => {
    setCat(c);
  };

  return (
    <form
      className="flex-col tiny:max-h-[75vh] max-h-96 flex "
      onSubmit={onSubmit}
    >
      <div className="mt-4 space-x-1 center">
        <label className="flex-1 " htmlFor={inputId}>
          <input
            aria-describedby={instructionsId}
            type="search"
            name="search"
            id={inputId}
            value={query}
            onChange={handleChange}
            placeholder="Search keywords..."
            className="w-full p-2 px-3 transition-colors rounded-md outline-none bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring placeholder:text-muted-foreground text-foreground "
          />

          <span className="sr-only">Search</span>
        </label>

        <button
          className="px-3 py-2 font-semibold text-white rounded-md bg-primary "
          type="submit"
        >
          Go
        </button>
      </div>

      <section className="flex items-center mt-3 space-x-1">
        <p className="basis-[15%] text-sm font-medium ">Filter By Category?</p>
        <RadioGroup
          className="flex-1 "
          value={cat}
          onValueChange={handleCatChange}
        >
          <div className="gap-1 gap-y-1.5 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] xs:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] ">
            {options.map((opt) => (
              <div className="flex items-center space-x-2" key={opt}>
                <RadioGroupItem
                  id={`${inputId}-${opt}`}
                  value={opt}
                  className="center !justify-start"
                />
                <Label
                  className="font-normal capitalize"
                  htmlFor={`${inputId}-${opt}`}
                >
                  {opt}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </section>

      <ScrollArea className="flex-1 text-sm" id={instructionsId}>
        <p className="my-2 text-lg font-semibold">Tip:</p>

        <p className="!text-sm">
          To narrow down your search for articles even more, you can specify one
          or multiple comma-separated search keywords. As with other parameters,
          you can also exclude keywords by prepending a - symbol. Find a few
          clarifications about this parameter below.
        </p>

        <ul className="p-5 space-y-3 list-disc ">
          <li>
            <code className="p-1 text-xs font-medium rounded bg-destructive text-destructive-foreground">
              &amp; keywords = food industry
            </code>{" "}
            - Search for keyword
            <q>food industry</q>
          </li>
          <li>
            <code className="p-1 text-xs font-medium rounded bg-destructive text-destructive-foreground">
              &amp; keywords = food industry, meat
            </code>{" "}
            - Search for keywords <q>food industry</q> and <q>meat</q>
          </li>
          <li>
            <code className="p-1 text-xs font-medium rounded bg-destructive text-destructive-foreground">
              &amp; keywords = food industry, -meat
            </code>{" "}
            - Search for keywords <q>food industry</q>, but exclude <q>meat</q>
          </li>
          <li>
            <code className="p-1 text-xs font-medium rounded bg-destructive text-destructive-foreground">
              &amp; keywords = -food industry, -meat
            </code>{" "}
            - Search for all news, excluding <q>food industry</q> and{" "}
            <q>meat</q>
          </li>
          <li>
            <code className="p-1 text-xs font-medium rounded bg-destructive text-destructive-foreground">
              &amp; keywords = a-plus
            </code>{" "}
            - Search for keyword <q>a-plus</q>
          </li>
          <li>
            <code className="p-1 text-xs font-medium rounded bg-destructive text-destructive-foreground">
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
