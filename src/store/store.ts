import { configureStore } from "@reduxjs/toolkit";
import adListReducer from "./slices/adListSlice";
import filtersReducer from "./slices/filtersSlice";
import vehicleFormReducer from "./slices/vehicleFormSlice";

export const store = configureStore({
	reducer: {
		filters: filtersReducer,
		vehicleForm: vehicleFormReducer,
		adList: adListReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
