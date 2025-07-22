import { Button } from "@mui/material";

interface AdButtonProps {
	content: string;
	customVariant: "primary" | "secondary" | "delete";
	fullWidth?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
}

export const AdButton = ({
	content,
	fullWidth,
	type,
	customVariant = "primary",
	onClick,
}: AdButtonProps) => {
	const isPrimary = customVariant === "primary";
	const isDelete = customVariant === "delete";
	return (
		<Button
			type={type}
			fullWidth={fullWidth}
			variant="outlined"
			onClick={onClick}
			sx={{
				color: isPrimary ? "#fff" : "#000",
				borderColor: isDelete ? "#8D1A1A" : "#F7C01D",
				transition: "all 0.3s ease",
				"&:hover": {
					backgroundColor: isDelete ? "#8D1A1A" : "#F7C01D",
					color: isPrimary ? "#000" : "#fff",
				},
			}}
		>
			{content}
		</Button>
	);
};
