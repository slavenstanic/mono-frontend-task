import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteVehicle } from "@/api/hooks/deleteVehicle.ts";
import { type AdProps, fetchVehicles } from "@/api/hooks/fetchVehicles.ts";
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
	const navigate = useNavigate();
	const pageSize = 5;
	const [ads, setAds] = useState<AdProps[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const from = (currentPage - 1) * pageSize;
	const to = from + pageSize - 1;
	const totalPages = Math.ceil(count / pageSize);

	const [filters, setFilters] = useState<{ engineTypes: string[] }>({
		engineTypes: [],
	});

	useEffect(() => {
		const getAds = async () => {
			try {
				const { ads, count } = await fetchVehicles(from, to, filters);
				setAds(ads);
				setCount(count);
			} catch (error) {
				console.log(error);
			}
		};
		void getAds();
	}, [from, to, filters]);

	const handleDelete = async (
		adId: string,
		modelId: string,
		brandId: string,
	): Promise<void> => {
		try {
			await deleteVehicle({ adId, modelId, brandId });
			setAds((prevAds) => prevAds.filter((ad) => ad.id !== adId));
		} catch (error) {
			console.error(error);
		}
	};

	const handleEdit = (adId: string) => {
		navigate(`/edit/${adId}`);
	};

	return (
		<Root>
			<Navbar />
			<HeroSection
				onApplyFilters={setFilters}
				ads={ads}
				onDelete={handleDelete}
				onEdit={handleEdit}
			/>
			<AdPagination
				disabled={!count}
				count={count ? totalPages : 0}
				setCurrentPage={(page) => setCurrentPage(page)}
			/>
		</Root>
	);
};
