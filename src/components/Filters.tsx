import { styled } from "@mui/material";
import { AdButton } from "@/components/AdButton.tsx";
import { CheckboxFilter } from "@/components/CheckboxFilter.tsx";
import { FromToFilter } from "@/components/FromToFilter.tsx";
import { InputFieldFilter } from "@/components/InputFieldFilter.tsx";
import { SelectFilter } from "@/components/SelectFilter.tsx";

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
