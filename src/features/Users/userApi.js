import ApiBase from "../../app/apiBase";
import { createUser } from "./userSlice";

export const userApi = ApiBase.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: `/create-user`,
        method: "POST",
        body,
      }),
      onQueryStarted(query, { dispatch, getState, queryFulfilled }) {
        // for optamastic update
        dispatch(createUser(query));
      },
      // it will invalidate user cache
      invalidatesTags: ["user"],
    }),
    getUsers: builder.query({
      query: () => ({
        url: `/get-users`,
        method: "GET",
      }),
      // optimastic works
      async onQueryStarted(query, { queryFulfilled, dispatch, getState }) {
        try {
          // actual promise here you can do anything before or after that
          await queryFulfilled;
        } catch (err) {
          // reject promise here
          console.log(err);
        }
      },
      // for cache management
      providesTags: ["cart"],
    }),
    getSingleUsers: builder.query({
      query: (id) => ({
        url: `/get-users/${id}`,
        method: "GET",
      }),
      // manual cache handle here
      onCacheEntryAdded: (arg, { updateCachedData }) => {
        // update cache here
        console.log(arg);
      },
      // for cache management
      providesTags: ["cart"],
    }),

    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch, getState }) {
        try {
          // for optamastic update
          // dispatch(from local state);
          await queryFulfilled;
        } catch (err) {
          console.log(err);
        }
      },
      // to get actual db state
      invalidatesTags: ["cart"],
    }),
    updateCartProduct: builder.mutation({
      query: (body) => ({
        url: `/api/ev1/shoppingCartQtyUpdate`,
        method: "PUT",
        body,
      }),
      async onQueryStarted(query, { queryFulfilled, dispatch, getState }) {
        try {
          // for optamastic update
          // dispatch(from local state);
        } catch (err) {
          console.log(err);
        }
      },
      // to get actual db state
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useCreateUserMutation, useGetUsersQuery, useGetSingleUsersQuery, useDeleteFromCartMutation, useUpdateCartProductMutation } = userApi;
