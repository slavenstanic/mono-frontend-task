import { styled } from "@mui/material";
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
	return (
		<Root>
			<Navbar />
			<HeroSection />
			<AdPagination />
		</Root>
	);
};
