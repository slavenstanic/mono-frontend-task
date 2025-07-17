import { styled } from "@mui/material";
import { AdPagination } from "@/components/AdPagination.tsx";
import { HeroSection } from "@/components/HeroSection.tsx";
import { Navbar } from "@/components/Navbar.tsx";

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "2rem",
	padding: "1rem",
}));

export const MainPage = () => {
	return (
		<Root>
			<Navbar />
			<HeroSection />
			<AdPagination />
		</Root>
	);
};
