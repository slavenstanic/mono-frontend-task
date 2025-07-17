import { styled, Typography } from "@mui/material";
import { AdButton } from "@/components/AdButton.tsx";

const Root = styled("div")(() => ({
	backgroundColor: "#fff",
	width: "11.25rem",
	borderRadius: "0.5rem",
}));
const CardBody = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
	padding: "0.5rem",
}));
const CardDescription = styled("div")(() => ({}));

export const AdCard = () => {
	return (
		<Root>
			<img
				style={{
					width: "100%",
					borderRadius: "0.5rem 0.5rem 0 0",
				}}
				src={"jpg/car.jpg"}
				alt="car"
			/>
			<CardBody>
				<Typography
					sx={{
						fontSize: "1.25rem",
						fontWeight: 700,
					}}
				>
					Bmw m3 e92 3.0i
				</Typography>
				<CardDescription>
					<Typography>Gasoline</Typography>
					<Typography>2009.</Typography>
					<Typography>219.000km</Typography>
					<Typography
						sx={{
							fontWeight: 700,
						}}
					>
						18.999€
					</Typography>
				</CardDescription>
				<AdButton content={"Edit"} fullWidth={true} />
			</CardBody>
		</Root>
	);
};
