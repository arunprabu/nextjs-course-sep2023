// store == single source of truth for the whole app

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer
  },
});

// store = {
//   counter: {
//     value: 0,
//     status: "idle",
//   },
//   users: {
//     isLoading: false,
//     isError: false,
//     userList: [],
//     status: "idle",
//   },
// };

