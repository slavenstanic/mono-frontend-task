import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
	engineTypes: string[];
	priceMin?: number;
	priceMax?: number;
	applied: {
		engineTypes: string[];
		priceMin?: number;
		priceMax?: number;
	};
}

const storedFilters = localStorage.getItem("filters");
const parsed = storedFilters
	? JSON.parse(storedFilters)
	: { engineTypes: [], priceMin: 0, priceMax: 100000 };

const initialState: FiltersState = {
	...parsed,
	applied: parsed,
};

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setEngineType(
			state,
			action: PayloadAction<{ type: string; checked: boolean }>,
		) {
			const { type, checked } = action.payload;
			if (checked) {
				state.engineTypes.push(type);
			} else {
				state.engineTypes = state.engineTypes.filter((t) => t !== type);
			}
		},
		setPriceRange(state, action: PayloadAction<[number, number]>) {
			[state.priceMin, state.priceMax] = action.payload;
		},
		applyFilters(state) {
			state.applied = {
				engineTypes: [...state.engineTypes],
				priceMin: state.priceMin,
				priceMax: state.priceMax,
			};
		},
	},
});

export const { setEngineType, setPriceRange, applyFilters } =
	filtersSlice.actions;
export default filtersSlice.reducer;
