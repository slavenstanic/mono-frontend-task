import { Slider, styled, Typography } from "@mui/material";

interface SliderFilterProps {
	value: [number, number];
	onChange: (value: [number, number]) => void;
}

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
}));

export const SliderFilter = ({ value, onChange }: SliderFilterProps) => {
	const handleChange = (_: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			onChange([newValue[0], newValue[1]]);
		}
	};

	return (
		<Root>
			<Typography>Price Range</Typography>
			<Slider
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				min={0}
				max={100000}
				step={1000}
				sx={{ color: "#F7C01D" }}
			/>
		</Root>
	);
};
