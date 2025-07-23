import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	styled,
	Typography,
} from "@mui/material";

interface CheckboxFilterProps {
	title: string;
	label1: string;
	label2: string;
	values: string[];
	onChange: (value: string, checked: boolean) => void;
}

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
}));

export const CheckboxFilter = ({
	title,
	label1,
	label2,
	values,
	onChange,
}: CheckboxFilterProps) => {
	return (
		<Root>
			<Typography>{title}</Typography>
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							checked={values.includes(label1)}
							onChange={(e) => onChange(label1, e.target.checked)}
							sx={{
								color: "#fff",
								"&.Mui-checked": { color: "#F7C01D" },
							}}
						/>
					}
					label={label1}
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={values.includes(label2)}
							onChange={(e) => onChange(label2, e.target.checked)}
							sx={{
								color: "#fff",
								"&.Mui-checked": { color: "#F7C01D" },
							}}
						/>
					}
					label={label2}
				/>
			</FormGroup>
		</Root>
	);
};
