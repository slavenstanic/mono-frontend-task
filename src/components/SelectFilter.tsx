import { styled, TextField } from "@mui/material";

const Root = styled("div")(() => ({}));

const models = [
	{
		value: "1",
		label: "e92",
	},
	{
		value: "2",
		label: "e90",
	},
	{
		value: "3",
		label: "e60",
	},
];

export const SelectFilter = () => {
	return (
		<Root>
			<TextField
				fullWidth
				id="outlined-select-currency-native"
				select
				label="Model"
				slotProps={{
					select: {
						native: true,
					},
				}}
				sx={{
					"& .MuiOutlinedInput-root": {
						color: "#fff",
						"& fieldset": {
							borderColor: "#F7C01D",
						},
						"&:hover fieldset": {
							borderColor: "#F7C01D",
						},
						"&.Mui-focused fieldset": {
							borderColor: "#F7C01D",
						},
					},
					"& .MuiInputLabel-root": {
						color: "#fff",
						opacity: "0.6",
					},
					"& label.Mui-focused": {
						color: "#F7C01D",
					},
				}}
			>
				{models.map((model) => (
					<option key={model.value} value={model.value}>
						{model.label}
					</option>
				))}
			</TextField>
		</Root>
	);
};
