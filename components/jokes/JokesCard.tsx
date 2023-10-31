"use client";

import React, { useId } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Joke } from "@/types/responses.types";
import {
  selectAppState,
  incrementJokeIndex,
  decrementJokeIndex,
  setJokesIndex,
} from "@/redux/slice";
import Arrow from "@/icons/Arrow";
import { JOKES_SIZE } from "@/lib/constants";

interface Props {
  jokes: Joke[];
}

const btnClass = `center p-1 bg-foreground/50 text-white rounded-full`;

const max = JOKES_SIZE - 1;
const JokesCard = ({ jokes }: Props) => {
  const { jokeIndex } = useAppSelector(selectAppState);
  const dispatch = useAppDispatch();

  const back = () => {
    if (jokeIndex <= 0) {
      dispatch(setJokesIndex(max));
      return;
    }

    dispatch(decrementJokeIndex());
  };

  const next = () => {
    if (jokeIndex >= max) {
      dispatch(setJokesIndex(0));
      return;
    }
    dispatch(incrementJokeIndex());
  };

  const current = `${jokeIndex < max ? "0" : ""}${jokeIndex + 1}`;

  return (
    <article className="relative p-2 py-3 font-shan">
      <header>
        <h4 className="text-center"> Today&apos;s Jokes</h4>
      </header>

      <hr className="my-1 mx-1" />

      <section className="divide-y">
        <section>
          <div className="min-h-[180px] space-y-2 py-2">
            <p className="">
              <span className="px-1 bg-foreground/50 text-white rounded-full h-6 w-6 inline-block mr-1 text-center ">
                Q:
              </span>
              {jokes[jokeIndex].setup}
            </p>
            <p className="">
              <span className="px-1 bg-foreground/50 text-white rounded-full h-6 w-6 inline-block mr-1 text-center ">
                A:
              </span>
              {jokes[jokeIndex].delivery}
            </p>
          </div>
        </section>

        <div className="btwn py-2 space-x-1">
          <button className={`${btnClass} left-0`} onClick={back} type="button">
            <span className="sr-only">Back</span>
            <Arrow />
          </button>

          <span className="font-mono">
            {current} / {jokes.length}
          </span>

          <button
            className={`${btnClass} right-0 rotate-180`}
            onClick={next}
            type="button"
          >
            <span className="sr-only">Next</span>
            <Arrow />
          </button>
        </div>
      </section>
    </article>
  );
};

export default JokesCard;
