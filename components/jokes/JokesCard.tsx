"use client";

import React, { useId } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Joke } from "@/types/responses.types";
import {
  selectAppState,
  incrementJokeIndex,
  decrementJokeIndex,
  setJokesIndex,
} from "@/redux/slice";

interface Props {
  jokes: Joke[];
}

const nums = Array.from({ length: 10 }).map((_, i) => i);

const JokesCard = ({ jokes }: Props) => {
  const { jokeIndex } = useAppSelector(selectAppState);
  const dispatch = useAppDispatch();

  const back = () => {
    if (jokeIndex <= 0) {
      dispatch(setJokesIndex(9));
      return;
    }

    dispatch(decrementJokeIndex());
  };

  const next = () => {
    if (jokeIndex >= 9) {
      dispatch(setJokesIndex(0));
      return;
    }
    dispatch(incrementJokeIndex());
  };

  return (
    <article className="relative">
      <button onClick={back} type="button">
        Back
      </button>

      <button onClick={next} type="button">
        Next
      </button>

      <Tabs defaultValue={`${jokeIndex}`} className="w-[400px]">
        <TabsList className="sr-only">
          {jokes.map((n, i) => (
            <TabsTrigger key={n.id} value={`${i}`}>
              Joke number {1 + i}
            </TabsTrigger>
          ))}
        </TabsList>

        {jokes.map((n, i) => (
          <TabsContent key={n.id} value={`${i}`}>
            index = {jokeIndex}
            <p className="break-all">
              {JSON.stringify(jokes[jokeIndex], null, 2)}
            </p>
          </TabsContent>
        ))}
      </Tabs>
    </article>
  );
};

export default JokesCard;
