// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

// src/index.js
