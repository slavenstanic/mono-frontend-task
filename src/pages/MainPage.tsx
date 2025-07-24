import { styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteVehicle } from "@/api/hooks/deleteVehicle.ts";
import { fetchVehicles } from "@/api/hooks/fetchVehicles.ts";
import { HeroSection } from "@/components/hero/HeroSection.tsx";
import { Navbar } from "@/components/navbar/Navbar.tsx";
import { AdPagination } from "@/components/pagination/AdPagination.tsx";
import {
	deleteAd,
	setAds,
	setCount,
	setCurrentPage,
} from "@/store/slices/adListSlice.ts";
import { applyFilters } from "@/store/slices/filtersSlice.ts";
import type { RootState } from "@/store/store.ts";

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "2rem",
	padding: "1rem",
}));

export const MainPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { ads, count, currentPage } = useSelector(
		(state: RootState) => state.adList,
	);
	const filters = useSelector((state: RootState) => state.filters.applied);
	const pageSize = 8;
	const from = (currentPage - 1) * pageSize;
	const to = from + pageSize - 1;
	const totalPages = Math.ceil(count / pageSize);

	useEffect(() => {
		const fetch = async () => {
			const { ads, count } = await fetchVehicles(from, to, filters);
			dispatch(setAds(ads));
			dispatch(setCount(count));
		};
		void fetch();
	}, [dispatch, from, to, filters]);

	const handleDelete = async (
		adId: string,
		modelId: string,
		brandId: string,
	) => {
		await deleteVehicle({ adId, modelId, brandId });
		dispatch(deleteAd(adId));
	};

	const handleEdit = (adId: string) => {
		navigate(`/edit/${adId}`);
	};

	const handleApplyFilters = (newFilters: {
		engineTypes: string[];
		priceMin?: number;
		priceMax?: number;
		sortBy: string;
	}) => {
		dispatch(applyFilters());
		localStorage.setItem("filters", JSON.stringify(newFilters));
	};

	return (
		<Root>
			<Navbar />
			<HeroSection
				ads={ads}
				onDelete={handleDelete}
				onEdit={handleEdit}
				onApplyFilters={handleApplyFilters}
			/>
			<AdPagination
				disabled={!count}
				count={count ? totalPages : 0}
				setCurrentPage={(p) => dispatch(setCurrentPage(p))}
			/>
		</Root>
	);
};
