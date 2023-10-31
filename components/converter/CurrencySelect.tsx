import React from "react";
import { matchSorter } from "match-sorter";
import { CurrencyItem } from "@/types/responses.types";

interface Props {
  list: CurrencyItem[];
}

const filter = (list: CurrencyItem[], query: string) => {
  return matchSorter(list, query, {
    keys: ["name", "color"],
    threshold: matchSorter.rankings.CONTAINS,
  });
};

const CurrencySelect = ({ list = [] }: Props) => {
  return <div>CurrencySelect</div>;
};

export default CurrencySelect;
