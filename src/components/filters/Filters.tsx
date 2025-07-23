import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CheckboxFilter } from "@/components/filters/CheckboxFilter.tsx";
import { SliderFilter } from "@/components/filters/SliderFilter.tsx";
import { AdButton } from "@/components/shared/AdButton.tsx";
import { Sort } from "@/components/sort/Sort.tsx";
import {
	applyFilters,
	setEngineType,
	setPriceRange,
	setSortBy,
} from "@/store/slices/filtersSlice.ts";
import type { RootState } from "@/store/store.ts";

const Root = styled("div")(() => ({
	color: "#fff",
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
}));

export const Filters = ({
	onApply,
}: {
	onApply: (filters: {
		engineTypes: string[];
		priceMin?: number;
		priceMax?: number;
		sortBy: string;
	}) => void;
}) => {
	const dispatch = useDispatch();
	const filters = useSelector((state: RootState) => state.filters);

	const handleEngineChange = (value: string, checked: boolean) => {
		dispatch(setEngineType({ type: value, checked }));
	};

	const handleApply = () => {
		dispatch(applyFilters());
		localStorage.setItem("filters", JSON.stringify(filters));
		onApply({
			engineTypes: filters.engineTypes,
			priceMin: filters.priceMin,
			priceMax: filters.priceMax,
			sortBy: filters.sortBy,
		});
	};

	return (
		<Root>
			<CheckboxFilter
				title="Engine"
				label1="Gasoline"
				label2="Diesel"
				values={filters.engineTypes}
				onChange={handleEngineChange}
			/>
			<SliderFilter
				value={[filters.priceMin ?? 0, filters.priceMax ?? 100000]}
				onChange={(v) => dispatch(setPriceRange(v))}
			/>
			<Sort value={filters.sortBy} onChange={(v) => dispatch(setSortBy(v))} />
			<AdButton
				onClick={handleApply}
				customVariant="primary"
				content="Search"
			/>
		</Root>
	);
};
