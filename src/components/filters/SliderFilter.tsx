import { Box, Slider, styled, Typography } from "@mui/material";

interface SliderFilterProps {
	value: [number, number];
	onChange: (value: [number, number]) => void;
}

const Root = styled("div")(() => ({}));

export const SliderFilter = ({ value, onChange }: SliderFilterProps) => {
	const handleChange = (_: Event, newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			onChange([newValue[0], newValue[1]]);
		}
	};

	return (
		<Root>
			<Box>
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
			</Box>
		</Root>
	);
};
