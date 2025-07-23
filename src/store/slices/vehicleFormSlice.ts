import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialForm = {
	title: "",
	brand: "",
	model: "",
	engineType: "",
	productionYear: "",
	mileage: "",
	price: "",
	image: "",
};

const vehicleFormSlice = createSlice({
	name: "vehicleForm",
	initialState: initialForm,
	reducers: {
		updateField(state, action: PayloadAction<{ name: string; value: string }>) {
			state[action.payload.name as keyof typeof state] = action.payload.value;
		},
		resetForm: () => initialForm,
		setForm(state, action: PayloadAction<typeof initialForm>) {
			return { ...state, ...action.payload };
		},
	},
});

export const { updateField, resetForm, setForm } = vehicleFormSlice.actions;
export default vehicleFormSlice.reducer;
