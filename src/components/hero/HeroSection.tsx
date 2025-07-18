import { styled } from "@mui/material";
import { Filters } from "@/components/filters/Filters.tsx";
import { AdGrid } from "@/components/grid/AdGrid.tsx";

const Root = styled("div")(() => ({
	width: "100%",
	maxWidth: "73.9425rem",
	display: "flex",
	alignItems: "flex-start",
	gap: "2rem",
}));

export const HeroSection = () => {
	return (
		<Root>
			<Filters />
			<AdGrid />
		</Root>
	);
};
