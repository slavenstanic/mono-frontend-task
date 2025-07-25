import { styled } from "@mui/material";
import type { AdProps } from "@/api/services/fetchVehicles.ts";
import { AdCard } from "@/components/grid/AdCard.tsx";

interface AdGridProps {
	ads: AdProps[];
	onDelete: (adId: string, modelId: string, brandId: string) => void;
	onEdit: (adId: string) => void;
}

const Root = styled("div")(() => ({
	display: "flex",
	maxWidth: "60.25rem",
	flexWrap: "wrap",
	flex: "1 0 0",
	gap: "1rem",
}));

export const AdGrid = ({ ads, onDelete, onEdit }: AdGridProps) => {
	return (
		<Root>
			{ads.map((ad) => (
				<AdCard ad={ad} key={ad.id} onDelete={onDelete} onEdit={onEdit} />
			))}
		</Root>
	);
};
