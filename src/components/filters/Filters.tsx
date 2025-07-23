import { styled } from "@mui/material";
import { useState } from "react";
import { CheckboxFilter } from "@/components/filters/CheckboxFilter.tsx";
import { SliderFilter } from "@/components/filters/SliderFilter.tsx";
import { AdButton } from "@/components/shared/AdButton.tsx";

interface FiltersProps {
	onApply: (filters: {
		engineTypes: string[];
		priceMin?: number;
		priceMax?: number;
	}) => void;
	initialFilters: {
		engineTypes: string[];
		priceMin?: number;
		priceMax?: number;
	};
}

const Root = styled("div")(() => ({
	color: "#fff",
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
}));

export const Filters = ({ onApply, initialFilters }: FiltersProps) => {
	const [engineTypes, setEngineTypes] = useState<string[]>(
		initialFilters.engineTypes || [],
	);

	const [priceRange, setPriceRange] = useState<[number, number]>([
		initialFilters.priceMin ?? 0,
		initialFilters.priceMax ?? 100000,
	]);

	const handleEngineChange = (value: string, checked: boolean) => {
		setEngineTypes((prev) =>
			checked ? [...prev, value] : prev.filter((v) => v !== value),
		);
	};

	const handleApply = () => {
		const currentFilters = {
			engineTypes,
			priceMin: priceRange[0],
			priceMax: priceRange[1],
		};
		localStorage.setItem("filters", JSON.stringify(currentFilters));
		onApply(currentFilters);
	};

	return (
		<Root>
			<CheckboxFilter
				title="Engine"
				label1="Gasoline"
				label2="Diesel"
				values={engineTypes}
				onChange={handleEngineChange}
			/>
			<SliderFilter value={priceRange} onChange={setPriceRange} />
			<AdButton
				onClick={handleApply}
				customVariant="primary"
				content="Search"
			/>
		</Root>
	);
};
