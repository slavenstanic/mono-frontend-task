import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { type AdProps, fetchAds } from "@/api/hooks/fetchAds.ts";
import { AdCard } from "@/components/grid/AdCard.tsx";

const Root = styled("div")(() => ({
	display: "flex",
	maxWidth: "60.25rem",
	flexWrap: "wrap",
	flex: "1 0 0",
	gap: "1rem",
}));

export const AdGrid = () => {
	const [ads, setAds] = useState<AdProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { ads } = await fetchAds();
				setAds(ads);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<Root>
			{ads.map((ad) => (
				<AdCard ad={ad} key={ad.id} />
			))}
		</Root>
	);
};
