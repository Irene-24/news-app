"use client";

import { restrictToNumberAndOneDot } from "@/lib/numberHelpers";
import React, { useState } from "react";

declare global {
  interface RegExpConstructor {
    escape(text: string): string;
  }
}

if (!RegExp.escape) {
  RegExp.escape = function (text: string) {
    return text.replace(/[\\^,$*+?.()|[\]{}]/g, "\\$&");
  };
}

interface Props {
  delimiter?: string;
}

const NumberInputWithDelimiter = ({ delimiter = " " }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [numericValue, setNumericValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = restrictToNumberAndOneDot(event.target.value);

    const escapedDelimiter = RegExp.escape(delimiter);

    const formattedInput = value.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      escapedDelimiter
    ); // Add space delimiter every 3 digits
    setInputValue(formattedInput);
    setNumericValue(value);
  };

  return (
    <div>
      <label>Enter Number:</label>
      <input
        inputMode="numeric"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="e.g., 1000000"
      />
      <div>
        <label>Numeric Value:</label> <div>{numericValue}</div>
      </div>
    </div>
  );
};

export default NumberInputWithDelimiter;
