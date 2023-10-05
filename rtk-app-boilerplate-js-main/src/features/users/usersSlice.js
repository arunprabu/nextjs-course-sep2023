/* 
  1. initial state of this feature which will find its place in store 
  2. reducer functions 
  3. actions associated with reducer fns 
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  usersList: [],
  status: 'idle'
}

// Let's connect to the rest api user fetchUsersAsync function 
export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers', // action type prefix,
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data);
    return response.data;
  }
)

export const addUserAsync = createAsyncThunk(
  'users/addUser', // action type prefix
  async(addUserFormData) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      addUserFormData
    );
    console.log(response.data);
    return response.data;
  }
)

// What's the slice?
/*
  A function that accepts an initial state,
  an object full of reducer functions, 
  and a "slice name", 
  and automatically generates action creators and 
  action types that correspond to the reducers and state.
*/

export const usersSlice = createSlice({
  name: "users",
  initialState,
  // Let's have the obj full of reducer functions
  reducers: {
    // if you want to update store locally without connecting to rest api
    // write the logic here - this is meant for sync calls
  },
  // extraReducers: A callback that receives a builder object to
  // define case reducers
  // via calls to builder.addCase(actionCreatorOrType, reducer).
  // The extrareducers field lets the slice handle actions defined elsewhere
  // including actions dispatched from other slices
  extraReducers: (builder) => {
    // if you want to update store by connecting to the rest api
    // write the logic here - this is meant for async calls
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        console.log(state);
        // updating the store directly
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        console.log(state);
        console.log(action);
        state.isLoading = false;
        state.usersList = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        console.log(state);
        console.log(action);
        state.isLoading = false;
        state.isError = true;
        state.status = "Unable to fetch users. Try again later!";
      })
      .addCase(addUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersList = [...state.usersList, action.payload];
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.status = 'Unable to Save the data. Try again later.'
      });
  }
});

export default usersSlice.reducer;