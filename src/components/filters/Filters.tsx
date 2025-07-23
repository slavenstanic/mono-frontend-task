import { styled } from "@mui/material";
import { useState } from "react";
import { CheckboxFilter } from "@/components/filters/CheckboxFilter.tsx";
import { AdButton } from "@/components/shared/AdButton.tsx";

interface FiltersProps {
	onApply: (filters: { engineTypes: string[] }) => void;
}

const Root = styled("div")(() => ({
	color: "#fff",

	display: "flex",
	flexDirection: "column",
	gap: "2rem",
}));

export const Filters = ({ onApply }: FiltersProps) => {
	const [engineTypes, setEngineTypes] = useState<string[]>([]);

	const handleEngineChange = (value: string, checked: boolean) => {
		setEngineTypes((prev) =>
			checked ? [...prev, value] : prev.filter((v) => v !== value),
		);
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
			<AdButton
				onClick={() => onApply({ engineTypes })}
				customVariant={"primary"}
				content={"Search"}
			/>
		</Root>
	);
};
