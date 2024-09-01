import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "../features/about/slice/aboutSlice";

const store = configureStore({
  reducer: {
    aboutSlice: aboutSlice,
  },
});

export default store;
