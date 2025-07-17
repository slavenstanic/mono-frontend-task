import { styled } from "@mui/material";
import { AdCard } from "@/components/AdCard.tsx";

const Root = styled("div")(() => ({
	display: "flex",
	maxWidth: "60.25rem",
	flexWrap: "wrap",
	flex: "1 0 0",
	gap: "1rem",
}));

export const AdGrid = () => {
	return (
		<Root>
			<AdCard />
			<AdCard />
			<AdCard />
			<AdCard />
			<AdCard />
			<AdCard />
		</Root>
	);
};
