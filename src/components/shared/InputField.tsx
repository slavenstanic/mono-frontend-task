import { TextField } from "@mui/material";

interface InputFieldProps {
	name: string;
	label: string;
	value: string;
	handleChange: (event: any) => void;
}

export const InputField = ({
	label,
	handleChange,
	name,
	value,
}: InputFieldProps) => {
	return (
		<TextField
			label={label}
			variant="outlined"
			type="text"
			fullWidth
			name={name}
			onChange={handleChange}
			value={value}
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
	);
};
