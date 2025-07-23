import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AdProps } from "@/api/hooks/fetchVehicles";

interface State {
	ads: AdProps[];
	count: number;
	currentPage: number;
}

const initialState: State = {
	ads: [],
	count: 0,
	currentPage: 1,
};

const adListSlice = createSlice({
	name: "adList",
	initialState,
	reducers: {
		setAds(state, action: PayloadAction<AdProps[]>) {
			state.ads = action.payload;
		},
		setCount(state, action: PayloadAction<number>) {
			state.count = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		deleteAd(state, action: PayloadAction<string>) {
			state.ads = state.ads.filter((ad) => ad.id !== action.payload);
		},
	},
});

export const { setAds, setCount, setCurrentPage, deleteAd } =
	adListSlice.actions;
export default adListSlice.reducer;
