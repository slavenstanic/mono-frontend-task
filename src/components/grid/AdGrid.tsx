import { styled } from "@mui/material";
import type { AdProps } from "@/api/hooks/fetchAds.ts";
import { AdCard } from "@/components/grid/AdCard.tsx";

interface AdGridProps {
	ads: AdProps[];
}

const Root = styled("div")(() => ({
	display: "flex",
	maxWidth: "60.25rem",
	flexWrap: "wrap",
	flex: "1 0 0",
	gap: "1rem",
}));

export const AdGrid = ({ ads }: AdGridProps) => {
	return (
		<Root>
			{ads.map((ad) => (
				<AdCard ad={ad} key={ad.id} />
			))}
		</Root>
	);
};
