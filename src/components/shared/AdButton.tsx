import { Button } from "@mui/material";

interface AdButtonProps {
	content: string;
	fullWidth?: boolean;
}

export const AdButton = ({ content, fullWidth }: AdButtonProps) => {
	return (
		<Button
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
