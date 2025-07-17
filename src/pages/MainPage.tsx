import { styled } from "@mui/material";
import { Navbar } from "@/components/Navbar.tsx";
import { HeroSection } from "@/components/HeroSection.tsx";

const Root = styled("div")(() => ({}));

export const MainPage = () => {
	return (
		<Root>
			<Navbar />
			<HeroSection />
		</Root>
	);
};
