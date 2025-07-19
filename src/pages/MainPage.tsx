import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { type AdProps, fetchAds } from "@/api/hooks/fetchAds.ts";
import { HeroSection } from "@/components/hero/HeroSection.tsx";
import { Navbar } from "@/components/navbar/Navbar.tsx";
import { AdPagination } from "@/components/pagination/AdPagination.tsx";

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "2rem",
	padding: "1rem",
}));

export const MainPage = () => {
	const pageSize = 5;
	const [ads, setAds] = useState<AdProps[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const from = (currentPage - 1) * pageSize;
	const to = from + pageSize - 1;
	const totalPages = Math.ceil(count / pageSize);

	useEffect(() => {
		const getAds = async () => {
			try {
				const { ads, count } = await fetchAds(from, to);
				setAds(ads);
				setCount(count);
			} catch (error) {
				console.log(error);
			}
		};
		void getAds();
	}, [from, to]);

	return (
		<Root>
			<Navbar />
			<HeroSection ads={ads} />
			<AdPagination
				disabled={!count}
				count={count ? totalPages : 0}
				setCurrentPage={(page) => setCurrentPage(page)}
			/>
		</Root>
	);
};
