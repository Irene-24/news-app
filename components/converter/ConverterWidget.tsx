"use client";
import { matchSorter } from "match-sorter";

import { useGetSymbolsQuery, useGetRatesQuery } from "@/redux/api";
import {
  selectAppState,
  setFromSym,
  setToSym,
  setFromVal,
  setToVal,
} from "@/redux/slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useMemo, useCallback, useState } from "react";
import { Combobox } from "@/components/ui/combobox";

import { CurrencyItem } from "@/types/responses.types";

//from curr => value,symb

//to curr => val, symb

/**
 *
 * to another curreny
 * toRate = rates[toCurr]
 * fromRate = rates[fromCurr]
 * converted = (value*toRate)/fromRate
 *
 *
 */

interface Props {
  list: CurrencyItem[];
}

const filter = (list: CurrencyItem[], query: string) => {
  return matchSorter(list, query, {
    keys: ["name", "symbol"],
    threshold: matchSorter.rankings.CONTAINS,
  });
};

const frameworks = [
  {
    symbol: "AED",
    name: "United Arab Emirates Dirham",
  },
  {
    symbol: "AFN",
    name: "Afghan Afghani",
  },
  {
    symbol: "ALL",
    name: "Albanian Lek",
  },
  {
    symbol: "AMD",
    name: "Armenian Dram",
  },
  {
    symbol: "ANG",
    name: "Netherlands Antillean Guilder",
  },
  {
    symbol: "AOA",
    name: "Angolan Kwanza",
  },
  {
    symbol: "ARS",
    name: "Argentine Peso",
  },
  {
    symbol: "AUD",
    name: "Australian Dollar",
  },
  {
    symbol: "AWG",
    name: "Aruban Florin",
  },
  {
    symbol: "AZN",
    name: "Azerbaijani Manat",
  },
  {
    symbol: "BAM",
    name: "Bosnia-Herzegovina Convertible Mark",
  },
  {
    symbol: "BBD",
    name: "Barbadian Dollar",
  },
  {
    symbol: "BDT",
    name: "Bangladeshi Taka",
  },
  {
    symbol: "BGN",
    name: "Bulgarian Lev",
  },
  {
    symbol: "BHD",
    name: "Bahraini Dinar",
  },
  {
    symbol: "BIF",
    name: "Burundian Franc",
  },
  {
    symbol: "BMD",
    name: "Bermudan Dollar",
  },
  {
    symbol: "BND",
    name: "Brunei Dollar",
  },
  {
    symbol: "BOB",
    name: "Bolivian Boliviano",
  },
  {
    symbol: "BRL",
    name: "Brazilian Real",
  },
  {
    symbol: "BSD",
    name: "Bahamian Dollar",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
  },
  {
    symbol: "BTN",
    name: "Bhutanese Ngultrum",
  },
  {
    symbol: "BWP",
    name: "Botswanan Pula",
  },
  {
    symbol: "BYN",
    name: "New Belarusian Ruble",
  },
  {
    symbol: "BYR",
    name: "Belarusian Ruble",
  },
  {
    symbol: "BZD",
    name: "Belize Dollar",
  },
  {
    symbol: "CAD",
    name: "Canadian Dollar",
  },
  {
    symbol: "CDF",
    name: "Congolese Franc",
  },
  {
    symbol: "CHF",
    name: "Swiss Franc",
  },
  {
    symbol: "CLF",
    name: "Chilean Unit of Account (UF)",
  },
  {
    symbol: "CLP",
    name: "Chilean Peso",
  },
  {
    symbol: "CNY",
    name: "Chinese Yuan",
  },
  {
    symbol: "COP",
    name: "Colombian Peso",
  },
  {
    symbol: "CRC",
    name: "Costa Rican Colón",
  },
  {
    symbol: "CUC",
    name: "Cuban Convertible Peso",
  },
  {
    symbol: "CUP",
    name: "Cuban Peso",
  },
  {
    symbol: "CVE",
    name: "Cape Verdean Escudo",
  },
  {
    symbol: "CZK",
    name: "Czech Republic Koruna",
  },
  {
    symbol: "DJF",
    name: "Djiboutian Franc",
  },
  {
    symbol: "DKK",
    name: "Danish Krone",
  },
  {
    symbol: "DOP",
    name: "Dominican Peso",
  },
  {
    symbol: "DZD",
    name: "Algerian Dinar",
  },
  {
    symbol: "EGP",
    name: "Egyptian Pound",
  },
  {
    symbol: "ERN",
    name: "Eritrean Nakfa",
  },
  {
    symbol: "ETB",
    name: "Ethiopian Birr",
  },
  {
    symbol: "EUR",
    name: "Euro",
  },
  {
    symbol: "FJD",
    name: "Fijian Dollar",
  },
  {
    symbol: "FKP",
    name: "Falkland Islands Pound",
  },
  {
    symbol: "GBP",
    name: "British Pound Sterling",
  },
  {
    symbol: "GEL",
    name: "Georgian Lari",
  },
  {
    symbol: "GGP",
    name: "Guernsey Pound",
  },
  {
    symbol: "GHS",
    name: "Ghanaian Cedi",
  },
  {
    symbol: "GIP",
    name: "Gibraltar Pound",
  },
  {
    symbol: "GMD",
    name: "Gambian Dalasi",
  },
  {
    symbol: "GNF",
    name: "Guinean Franc",
  },
  {
    symbol: "GTQ",
    name: "Guatemalan Quetzal",
  },
  {
    symbol: "GYD",
    name: "Guyanaese Dollar",
  },
  {
    symbol: "HKD",
    name: "Hong Kong Dollar",
  },
  {
    symbol: "HNL",
    name: "Honduran Lempira",
  },
  {
    symbol: "HRK",
    name: "Croatian Kuna",
  },
  {
    symbol: "HTG",
    name: "Haitian Gourde",
  },
  {
    symbol: "HUF",
    name: "Hungarian Forint",
  },
  {
    symbol: "IDR",
    name: "Indonesian Rupiah",
  },
  {
    symbol: "ILS",
    name: "Israeli New Sheqel",
  },
  {
    symbol: "IMP",
    name: "Manx pound",
  },
  {
    symbol: "INR",
    name: "Indian Rupee",
  },
  {
    symbol: "IQD",
    name: "Iraqi Dinar",
  },
  {
    symbol: "IRR",
    name: "Iranian Rial",
  },
  {
    symbol: "ISK",
    name: "Icelandic Króna",
  },
  {
    symbol: "JEP",
    name: "Jersey Pound",
  },
  {
    symbol: "JMD",
    name: "Jamaican Dollar",
  },
  {
    symbol: "JOD",
    name: "Jordanian Dinar",
  },
  {
    symbol: "JPY",
    name: "Japanese Yen",
  },
  {
    symbol: "KES",
    name: "Kenyan Shilling",
  },
  {
    symbol: "KGS",
    name: "Kyrgystani Som",
  },
  {
    symbol: "KHR",
    name: "Cambodian Riel",
  },
  {
    symbol: "KMF",
    name: "Comorian Franc",
  },
  {
    symbol: "KPW",
    name: "North Korean Won",
  },
  {
    symbol: "KRW",
    name: "South Korean Won",
  },
  {
    symbol: "KWD",
    name: "Kuwaiti Dinar",
  },
  {
    symbol: "KYD",
    name: "Cayman Islands Dollar",
  },
  {
    symbol: "KZT",
    name: "Kazakhstani Tenge",
  },
  {
    symbol: "LAK",
    name: "Laotian Kip",
  },
  {
    symbol: "LBP",
    name: "Lebanese Pound",
  },
  {
    symbol: "LKR",
    name: "Sri Lankan Rupee",
  },
  {
    symbol: "LRD",
    name: "Liberian Dollar",
  },
  {
    symbol: "LSL",
    name: "Lesotho Loti",
  },
  {
    symbol: "LTL",
    name: "Lithuanian Litas",
  },
  {
    symbol: "LVL",
    name: "Latvian Lats",
  },
  {
    symbol: "LYD",
    name: "Libyan Dinar",
  },
  {
    symbol: "MAD",
    name: "Moroccan Dirham",
  },
  {
    symbol: "MDL",
    name: "Moldovan Leu",
  },
  {
    symbol: "MGA",
    name: "Malagasy Ariary",
  },
  {
    symbol: "MKD",
    name: "Macedonian Denar",
  },
  {
    symbol: "MMK",
    name: "Myanma Kyat",
  },
  {
    symbol: "MNT",
    name: "Mongolian Tugrik",
  },
  {
    symbol: "MOP",
    name: "Macanese Pataca",
  },
  {
    symbol: "MRO",
    name: "Mauritanian Ouguiya",
  },
  {
    symbol: "MUR",
    name: "Mauritian Rupee",
  },
  {
    symbol: "MVR",
    name: "Maldivian Rufiyaa",
  },
  {
    symbol: "MWK",
    name: "Malawian Kwacha",
  },
  {
    symbol: "MXN",
    name: "Mexican Peso",
  },
  {
    symbol: "MYR",
    name: "Malaysian Ringgit",
  },
  {
    symbol: "MZN",
    name: "Mozambican Metical",
  },
  {
    symbol: "NAD",
    name: "Namibian Dollar",
  },
  {
    symbol: "NGN",
    name: "Nigerian Naira",
  },
  {
    symbol: "NIO",
    name: "Nicaraguan Córdoba",
  },
  {
    symbol: "NOK",
    name: "Norwegian Krone",
  },
  {
    symbol: "NPR",
    name: "Nepalese Rupee",
  },
  {
    symbol: "NZD",
    name: "New Zealand Dollar",
  },
  {
    symbol: "OMR",
    name: "Omani Rial",
  },
  {
    symbol: "PAB",
    name: "Panamanian Balboa",
  },
  {
    symbol: "PEN",
    name: "Peruvian Nuevo Sol",
  },
  {
    symbol: "PGK",
    name: "Papua New Guinean Kina",
  },
  {
    symbol: "PHP",
    name: "Philippine Peso",
  },
  {
    symbol: "PKR",
    name: "Pakistani Rupee",
  },
  {
    symbol: "PLN",
    name: "Polish Zloty",
  },
  {
    symbol: "PYG",
    name: "Paraguayan Guarani",
  },
  {
    symbol: "QAR",
    name: "Qatari Rial",
  },
  {
    symbol: "RON",
    name: "Romanian Leu",
  },
  {
    symbol: "RSD",
    name: "Serbian Dinar",
  },
  {
    symbol: "RUB",
    name: "Russian Ruble",
  },
  {
    symbol: "RWF",
    name: "Rwandan Franc",
  },
  {
    symbol: "SAR",
    name: "Saudi Riyal",
  },
  {
    symbol: "SBD",
    name: "Solomon Islands Dollar",
  },
  {
    symbol: "SCR",
    name: "Seychellois Rupee",
  },
  {
    symbol: "SDG",
    name: "South Sudanese Pound",
  },
  {
    symbol: "SEK",
    name: "Swedish Krona",
  },
  {
    symbol: "SGD",
    name: "Singapore Dollar",
  },
  {
    symbol: "SHP",
    name: "Saint Helena Pound",
  },
  {
    symbol: "SLE",
    name: "Sierra Leonean Leone",
  },
  {
    symbol: "SLL",
    name: "Sierra Leonean Leone",
  },
  {
    symbol: "SOS",
    name: "Somali Shilling",
  },
  {
    symbol: "SRD",
    name: "Surinamese Dollar",
  },
  {
    symbol: "STD",
    name: "São Tomé and Príncipe Dobra",
  },
  {
    symbol: "SVC",
    name: "Salvadoran Colón",
  },
  {
    symbol: "SYP",
    name: "Syrian Pound",
  },
  {
    symbol: "SZL",
    name: "Swazi Lilangeni",
  },
  {
    symbol: "THB",
    name: "Thai Baht",
  },
  {
    symbol: "TJS",
    name: "Tajikistani Somoni",
  },
  {
    symbol: "TMT",
    name: "Turkmenistani Manat",
  },
  {
    symbol: "TND",
    name: "Tunisian Dinar",
  },
  {
    symbol: "TOP",
    name: "Tongan Paʻanga",
  },
  {
    symbol: "TRY",
    name: "Turkish Lira",
  },
  {
    symbol: "TTD",
    name: "Trinidad and Tobago Dollar",
  },
  {
    symbol: "TWD",
    name: "New Taiwan Dollar",
  },
  {
    symbol: "TZS",
    name: "Tanzanian Shilling",
  },
  {
    symbol: "UAH",
    name: "Ukrainian Hryvnia",
  },
  {
    symbol: "UGX",
    name: "Ugandan Shilling",
  },
  {
    symbol: "USD",
    name: "United States Dollar",
  },
  {
    symbol: "UYU",
    name: "Uruguayan Peso",
  },
  {
    symbol: "UZS",
    name: "Uzbekistan Som",
  },
  {
    symbol: "VEF",
    name: "Venezuelan Bolívar Fuerte",
  },
  {
    symbol: "VES",
    name: "Sovereign Bolivar",
  },
  {
    symbol: "VND",
    name: "Vietnamese Dong",
  },
  {
    symbol: "VUV",
    name: "Vanuatu Vatu",
  },
  {
    symbol: "WST",
    name: "Samoan Tala",
  },
  {
    symbol: "XAF",
    name: "CFA Franc BEAC",
  },
  {
    symbol: "XAG",
    name: "Silver (troy ounce)",
  },
  {
    symbol: "XAU",
    name: "Gold (troy ounce)",
  },
  {
    symbol: "XCD",
    name: "East Caribbean Dollar",
  },
  {
    symbol: "XDR",
    name: "Special Drawing Rights",
  },
  {
    symbol: "XOF",
    name: "CFA Franc BCEAO",
  },
  {
    symbol: "XPF",
    name: "CFP Franc",
  },
  {
    symbol: "YER",
    name: "Yemeni Rial",
  },
  {
    symbol: "ZAR",
    name: "South African Rand",
  },
  {
    symbol: "ZMK",
    name: "Zambian Kwacha (pre-2013)",
  },
  {
    symbol: "ZMW",
    name: "Zambian Kwacha",
  },
  {
    symbol: "ZWL",
    name: "Zimbabwean Dollar",
  },
];

const ConverterWidget = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  const {
    data: symbols = [],
    isFetching: symbolsFetching,
    refetch: symbolsRefetch,
    error: symbolsError,
    isError: sybomlsIsError,
  } = useGetSymbolsQuery();

  const { from, to } = useAppSelector(selectAppState);

  const convertCurrency = (value: number, from: string, to: string) => {
    return 0;
  };

  const handleChangeValue = (type: "from" | "to") => (value: number) => {
    if (type === "from") {
      dispatch(setFromVal(value));
      dispatch(setToVal(convertCurrency(value, from.symbol, to.symbol)));
    } else {
      dispatch(setToVal(value));
      dispatch(setToVal(convertCurrency(value, to.symbol, from.symbol)));
    }
  };

  const handleChangeCurr = (type: "from" | "to", sym: string) => {
    if (type === "from") {
      dispatch(setFromSym(sym));
    } else {
      dispatch(setToSym(sym));
    }
  };

  const value = "CAD";

  const filteredItems = useMemo(() => {
    if (query?.trim()) {
      return filter(frameworks, query);
    }
    return frameworks;
  }, [query]);

  return (
    <div className="font-mono relative">
      <Combobox.Layout>
        {({ isOpen, setIsOpen }) => (
          <>
            <Combobox.Trigger>
              {value
                ? frameworks.find(
                    (framework) =>
                      framework.symbol.toLowerCase() === value.toLowerCase()
                  )?.name
                : "Select curr..."}
            </Combobox.Trigger>
            <Combobox.Content>
              <Combobox.Command shouldFilter={false}>
                <Combobox.Input
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search curr..."
                />
                <Combobox.Empty>No currencies found</Combobox.Empty>
                <Combobox.Group>
                  {filteredItems.map((framework, i) => (
                    <Combobox.Item
                      key={i}
                      onSelect={(currentValue) => {
                        console.log(currentValue);
                        setIsOpen(false);
                      }}
                    >
                      <span>{value === framework.symbol ? ">>>  " : ""}</span>

                      {framework.name}
                    </Combobox.Item>
                  ))}
                </Combobox.Group>
              </Combobox.Command>
            </Combobox.Content>
          </>
        )}
      </Combobox.Layout>
    </div>
  );
};

export default ConverterWidget;
