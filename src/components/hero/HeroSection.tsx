import { styled } from "@mui/material";
import type { AdProps } from "@/api/hooks/fetchVehicles.ts";
import { Filters } from "@/components/filters/Filters.tsx";
import { AdGrid } from "@/components/grid/AdGrid.tsx";

type HeroSectionProps = {
	ads: AdProps[];
	onDelete: (adId: string, modelId: string, brandId: string) => void;
	onEdit: (adId: string) => void;
	onApplyFilters: (filters: {
		engineTypes: string[];
		priceMin?: number;
		priceMax?: number;
	}) => void;
	initialFilters: {
		engineTypes: string[];
		priceMin?: number;
		priceMax?: number;
	};
};

const Root = styled("div")(() => ({
	width: "100%",
	maxWidth: "73.9425rem",
	display: "flex",
	alignItems: "flex-start",
	gap: "2rem",
}));

export const HeroSection = ({
	ads,
	onDelete,
	onEdit,
	onApplyFilters,
	initialFilters,
}: HeroSectionProps) => {
	return (
		<Root>
			<Filters onApply={onApplyFilters} initialFilters={initialFilters} />
			<AdGrid ads={ads} onDelete={onDelete} onEdit={onEdit} />
		</Root>
	);
};
