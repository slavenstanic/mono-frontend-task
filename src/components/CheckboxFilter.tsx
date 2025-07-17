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
}

const Root = styled("div")(() => ({}));

export const CheckboxFilter = ({
	title,
	label1,
	label2,
}: CheckboxFilterProps) => {
	return (
		<Root>
			<Typography>{title}</Typography>
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							sx={{
								color: "#fff",
								"&.Mui-checked": {
									color: "#F7C01D",
								},
							}}
						/>
					}
					label={label1}
				/>
				<FormControlLabel
					control={
						<Checkbox
							sx={{
								color: "#fff",
								"&.Mui-checked": {
									color: "#F7C01D",
								},
							}}
						/>
					}
					label={label2}
				/>
			</FormGroup>
		</Root>
	);
};
