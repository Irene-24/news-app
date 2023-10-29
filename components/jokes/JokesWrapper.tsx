import React from "react";
import JokesProvider from "@/components/providers/JokesProvider";
import JokesCard from "./JokesCard";

const JokesWrapper = () => {
  //suspense and loading jsut in case
  return (
    <JokesProvider>{(jokes) => <JokesCard jokes={jokes} />}</JokesProvider>
  );
};

export default JokesWrapper;
