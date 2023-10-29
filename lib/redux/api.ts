import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
});

export const baseApi = createApi({
  baseQuery,
  keepUnusedDataFor: 24 * 60 * 60 * 1000, //ONE_DAY,
  endpoints: (build) => ({
    getNews: build.query<any, any>({
      query: ({ restaurantId, dateFrom, dateTo }) => ({
        url: `/news`,
        params: { restaurantId, dateFrom, dateTo },
      }),
      // transformResponse: (response: { data: SessionsInfo[] }) =>
      //   response.data,
    }),
  }),
});
