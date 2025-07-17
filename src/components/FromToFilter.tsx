import { styled, TextField, Typography } from "@mui/material";

interface FromToFilterProps {
	label1: string;
	label2: string;
}

const Root = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
}));

const years = [
	{
		value: "1",
		label: "2000",
	},
	{
		value: "2",
		label: "2005",
	},
	{
		value: "3",
		label: "2010",
	},
];

export const FromToFilter = ({ label1, label2 }: FromToFilterProps) => {
	return (
		<Root>
			<TextField
				id="outlined-select-currency-native"
				select
				label={label1}
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
				{years.map((year) => (
					<option key={year.value} value={year.value}>
						{year.label}
					</option>
				))}
			</TextField>
			<Typography>-</Typography>
			<TextField
				id="outlined-select-currency-native"
				select
				label={label2}
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
				{years.map((year) => (
					<option key={year.value} value={year.value}>
						{year.label}
					</option>
				))}
			</TextField>
		</Root>
	);
};
