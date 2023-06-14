import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
  prepareHeaders: (headers, { getState }) => {
    /**
     *
     * if you want to use token based authentication
     * pass nessesarry headers here
     * headers.set("authorization", `Bearer ${token}`);
     *
     *
     */

    return headers;
  },
});

const ApiBase = createApi({
  reducerPath: "API",
  tagTypes: ["user"], // use tags to cache management by conditionally
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default ApiBase;
