import { styled, TextField, Typography } from "@mui/material";

interface InputFieldFilterProps {
	label1: string;
	label2: string;
}

const Root = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
}));

export const InputFieldFilter = ({ label1, label2 }: InputFieldFilterProps) => {
	return (
		<Root>
			<TextField
				id="outlined-basic"
				label={label1}
				variant="outlined"
				type="text"
				sx={{
					width: "5.175rem",
					"& .MuiInputBase-input": {
						color: "#fff",
					},
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "#F7C01D",
						},
						"&:hover fieldset": {
							borderColor: "#F7C01D",
						},
						"&.Mui-focused fieldset": {
							borderColor: "#F7C01D",
						},
					},
					"& .MuiInputLabel-root": {
						color: "#fff",
						opacity: "0.6",
					},
					"& label.Mui-focused": {
						color: "#F7C01D",
					},
				}}
			/>
			<Typography>-</Typography>
			<TextField
				id="outlined-basic"
				label={label2}
				variant="outlined"
				type="text"
				sx={{
					width: "5.175rem",
					"& .MuiInputBase-input": {
						color: "#fff",
					},
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "#F7C01D",
						},
						"&:hover fieldset": {
							borderColor: "#F7C01D",
						},
						"&.Mui-focused fieldset": {
							borderColor: "#F7C01D",
						},
					},
					"& .MuiInputLabel-root": {
						color: "#fff",
						opacity: "0.6",
					},
					"& label.Mui-focused": {
						color: "#F7C01D",
					},
				}}
			/>
		</Root>
	);
};
