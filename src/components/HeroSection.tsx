import { styled } from "@mui/material";
import { AdGrid } from "@/components/AdGrid.tsx";
import { Filters } from "@/components/Filters.tsx";

const Root = styled("div")(() => ({
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
