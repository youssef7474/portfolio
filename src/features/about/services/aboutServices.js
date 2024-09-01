import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHomeData = createAsyncThunk(
  "about/getHomeData",
  async (userId, thunkAPI) => {
    return [1, 2, 3];
  }
);
