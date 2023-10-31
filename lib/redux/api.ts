import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RateRes, CurrencyItem } from "@/types/responses.types";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
});

export const baseApi = createApi({
  baseQuery,
  keepUnusedDataFor: 24 * 60 * 60 * 1000, //ONE_DAY,
  endpoints: (build) => ({
    getArticles: build.query<any, any>({
      query: () => ({
        url: `/articles`,
        params: {},
      }),
      // transformResponse: (response: { data: SessionsInfo[] }) =>
      //   response.data,
    }),

    getSymbols: build.query<CurrencyItem[], void>({
      query: () => ({
        url: `/symbols`,
      }),
    }),

    getRates: build.query<RateRes, void>({
      query: () => ({
        url: `/rates`,
      }),
      // transformResponse: (response: { data: SessionsInfo[] }) =>
      //   response.data,
    }),
  }),
});

export const { useGetArticlesQuery, useGetSymbolsQuery, useGetRatesQuery } =
  baseApi;
