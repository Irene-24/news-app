"use client";

import { formatWithDelimiter } from "@/lib/numberHelpers";
import React, { useState, useEffect } from "react";

if (!RegExp.escape) {
  RegExp.escape = function (text: string) {
    return text.replace(/[\\^,$*+?.()|[\]{}]/g, "\\$&");
  };
}

interface Props {
  delimiter?: string;
  value: number;
  setValue: (val: number) => void;
}

const NumberInputWithDelimiter = ({
  delimiter = " ",
  setValue,
  value,
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { formattedInput, value } = formatWithDelimiter(
      event.target.value,
      delimiter
    );

    setInputValue(formattedInput);

    setValue(+value);
  };

  useEffect(() => {
    setInputValue((formattedValue) => {
      if (value && !formattedValue) {
        return formatWithDelimiter(`${value}`, delimiter).formattedInput;
      } else {
        return formattedValue;
      }
    });
  }, [value, delimiter]);

  return (
    <input
      inputMode="numeric"
      value={inputValue}
      onChange={handleInputChange}
      placeholder={`e.g., 10000`}
    />
  );
};

export default NumberInputWithDelimiter;
