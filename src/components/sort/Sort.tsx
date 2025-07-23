import { MenuItem, Select, styled, Typography } from "@mui/material";

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
}));

interface SortProps {
	value: string;
	onChange: (value: string) => void;
}

export const Sort = ({ value, onChange }: SortProps) => {
	return (
		<Root>
			<Typography>Sort by Price</Typography>
			<Select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				sx={{
					color: "#fff",
					border: "1px solid #F7C01D",
				}}
			>
				<MenuItem value="price_asc">Lowest to Highest</MenuItem>
				<MenuItem value="price_desc">Highest to Lowest</MenuItem>
			</Select>
		</Root>
	);
};
