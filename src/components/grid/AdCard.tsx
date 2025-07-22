import { styled, Typography } from "@mui/material";
import type { AdProps } from "@/api/hooks/fetchVehicles.ts";
import { AdButton } from "@/components/shared/AdButton.tsx";

interface AdCardProps {
	ad: AdProps;
	onDelete: (adId: string, modelId: string, brandId: string) => void;
	onEdit: (adId: string) => void;
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

const ButtonContainer = styled("div")(() => ({
	display: "flex",
	gap: "0.5rem",
}));

export const AdCard = ({ ad, onDelete, onEdit }: AdCardProps) => {
	const handleDelete = () => {
		onDelete(ad.id, ad.model.id, ad.model.brand.id);
	};
	const handleEdit = () => {
		onEdit(ad.id);
	};

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
				<ButtonContainer>
					<AdButton
						onClick={handleEdit}
						customVariant={"secondary"}
						content={"Edit"}
						fullWidth={true}
					/>
					<AdButton
						customVariant={"delete"}
						content={"Delete"}
						fullWidth={true}
						onClick={handleDelete}
					/>
				</ButtonContainer>
			</CardBody>
		</Root>
	);
};
