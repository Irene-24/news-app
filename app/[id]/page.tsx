import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { capitalizeFirstLetter } from "@/lib/stringHelpers";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id as string;

  return {
    description: `Get the latest updates in "${id}" worldwide`,
    title: `Aster News: ${capitalizeFirstLetter(id)}`,
  };
}

const News = ({ params }: Props) => {
  return <h1 className="capitalize">{params.id}</h1>;
};

export default News;
