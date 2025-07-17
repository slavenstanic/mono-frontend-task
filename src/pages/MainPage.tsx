import { styled } from "@mui/material";
import { AdPagination } from "@/components/AdPagination.tsx";
import { HeroSection } from "@/components/HeroSection.tsx";
import { Navbar } from "@/components/Navbar.tsx";

const Root = styled("div")(() => ({}));

export const MainPage = () => {
	return (
		<Root>
			<Navbar />
			<HeroSection />
			<AdPagination />
		</Root>
	);
};
