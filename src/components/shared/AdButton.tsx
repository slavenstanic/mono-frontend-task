import { Button } from "@mui/material";

interface AdButtonProps {
	content: string;
	fullWidth?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
}

export const AdButton = ({ content, fullWidth, type }: AdButtonProps) => {
	return (
		<Button
			type={type}
			fullWidth={fullWidth}
			variant="outlined"
			sx={{
				color: "#fff",
				borderColor: "#F7C01D",
				transition: "all 0.3s ease",
				"&:hover": {
					backgroundColor: "#F7C01D",
					color: "#000",
				},
			}}
		>
			{content}
		</Button>
	);
};
