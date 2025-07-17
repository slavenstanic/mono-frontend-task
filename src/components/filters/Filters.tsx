import { styled } from "@mui/material";
import { CheckboxFilter } from "@/components/filters/CheckboxFilter.tsx";
import { FromToFilter } from "@/components/filters/FromToFilter.tsx";
import { InputFieldFilter } from "@/components/filters/InputFieldFilter.tsx";
import { SelectFilter } from "@/components/filters/SelectFilter.tsx";
import { AdButton } from "@/components/shared/AdButton.tsx";

const Root = styled("div")(() => ({
	color: "#fff",

	display: "flex",
	flexDirection: "column",
	gap: "2rem",
}));

export const Filters = () => {
	return (
		<Root>
			<CheckboxFilter
				title="Ads with image only"
				label1={"Yes"}
				label2={"No"}
			/>
			<CheckboxFilter title="Engine" label1={"Gasoline"} label2={"Diesel"} />
			<SelectFilter />
			<FromToFilter label1={"year"} label2={"Year"} />
			<InputFieldFilter label1={"Mileage"} label2={"Mileage"} />
			<InputFieldFilter label1={"Price"} label2={"Price"} />
			<AdButton content={"Search"} />
		</Root>
	);
};
