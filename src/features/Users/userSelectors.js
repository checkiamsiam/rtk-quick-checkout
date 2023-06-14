import { createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.user.users;

// only last parameter will be output selector others will be input selector. and they will word like middleware
// createSelector is use for memoization

export const getUserSelector = createSelector(getUser, (users) => users);

// best cases for memoization

// export const getUserSelector = createSelector(
//   (state) => state.user.token,
//   (users) => users,
// );
// or
//  export const selectHomeCategories = createSelector(
//   (state) => state.user,
//   (user) => {
//     const admin = user.filter((item) => item.name === "Admin");
//     return homeCategories;
//   }
// );
