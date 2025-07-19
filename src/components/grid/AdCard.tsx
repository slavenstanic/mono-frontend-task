import { styled, Typography } from "@mui/material";
import type { AdProps } from "@/api/hooks/fetchAds.ts";
import { AdButton } from "@/components/shared/AdButton.tsx";

interface AdCardProps {
	ad: AdProps;
}

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

export const AdCard = ({ ad }: AdCardProps) => {
	return (
		<Root>
			<img
				style={{
					width: "100%",
					height: "120px",
					objectFit: "cover",
					borderRadius: "0.5rem 0.5rem 0 0",
				}}
				src={ad.image}
				onError={(e) => {
					e.currentTarget.src = "jpg/Blank.jpg";
				}}
				alt={"car"}
			/>
			<CardBody>
				<Typography
					sx={{
						fontSize: "1.25rem",
						fontWeight: 700,
					}}
				>
					{ad.title}
				</Typography>
				<CardDescription>
					<Typography>{ad.model.brand.name}</Typography>
					<Typography>{ad.model.name}</Typography>
					<Typography>{ad.engineType}</Typography>
					<Typography>{ad.productionYear}.</Typography>
					<Typography>{ad.mileage}km</Typography>
					<Typography
						sx={{
							fontWeight: 700,
						}}
					>
						{ad.price}€
					</Typography>
				</CardDescription>
				<AdButton content={"Edit"} fullWidth={true} />
			</CardBody>
		</Root>
	);
};
