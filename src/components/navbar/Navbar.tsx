import { styled, Typography } from "@mui/material";
import { SearchField } from "@/components/navbar/SearchField.tsx";
import { AdButton } from "@/components/shared/AdButton.tsx";

const Root = styled("div")(() => ({
	width: "100%",
	maxWidth: "73.9425rem",
	display: "flex",
	alignItems: "center",
	gap: "1rem",
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
			<AdButton customVariant={"primary"} content={"Add"} />
		</Root>
	);
};
