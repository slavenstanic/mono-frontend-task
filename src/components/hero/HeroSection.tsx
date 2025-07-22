import { styled } from "@mui/material";
import type { AdProps } from "@/api/hooks/fetchVehicles.ts";
import { Filters } from "@/components/filters/Filters.tsx";
import { AdGrid } from "@/components/grid/AdGrid.tsx";

type HeroSectionProps = {
	ads: AdProps[];
};

const Root = styled("div")(() => ({
	width: "100%",
	maxWidth: "73.9425rem",
	display: "flex",
	alignItems: "flex-start",
	gap: "2rem",
}));

export const HeroSection = ({ ads }: HeroSectionProps) => {
	return (
		<Root>
			<Filters />
			<AdGrid ads={ads} />
		</Root>
	);
};
