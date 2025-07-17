import { styled, TextField } from "@mui/material";

const Root = styled("div")(() => ({
	width: "100%",
}));

export const SearchField = () => {
	return (
		<Root>
			<TextField
				id="outlined-basic"
				label="Search:"
				variant="outlined"
				type="text"
				fullWidth
				sx={{
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
