import { getJokes } from "@/lib/fetchData";
import { Joke } from "@/lib/types/responses.types";
import React from "react";

interface Props {
  children: (jokes: Joke[]) => React.ReactNode;
}

const JokesProvider = async ({ children }: Props) => {
  const jokesRes = await getJokes();

  return <>{children(jokesRes.jokes)}</>;
};

export default JokesProvider;
