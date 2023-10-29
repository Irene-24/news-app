import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Get the latest news worldwide",
  title: `Aster News: Search`,
};

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Search = ({ searchParams }: Props) => {
  console.log({ searchParams });

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
};

export default Search;
