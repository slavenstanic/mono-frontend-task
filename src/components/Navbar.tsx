import { styled, Typography } from "@mui/material";
import { AdButton } from "@/components/AdButton.tsx";
import { SearchField } from "@/components/SearchField.tsx";

const Root = styled("div")(() => ({
	display: "flex",
	backgroundColor: "#000",
	gap: "3rem",
	alignItems: "center",
}));

export const Navbar = () => {
	return (
		<Root>
			<Typography
				sx={{
					color: "#F7C01D",
					fontSize: "1.25rem",
					fontWeight: "900",
					letterSpacing: "0.0625rem",
					lineHeight: "2rem",
				}}
			>
				Mono
			</Typography>
			<SearchField />
			<AdButton content={"Add"} />
		</Root>
	);
};
