import { createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.user.users;

// only last parameter will be output selector others will be input selector. and they will word like middleware
// createSelector is use for memoization

export const getUserSelector = createSelector(getUser, (users) => users);
