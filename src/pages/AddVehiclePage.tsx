import { styled } from "@mui/material";
import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createVehicle } from "@/api/services/createVehicle.ts";
import { AdButton } from "@/components/shared/AdButton.tsx";
import { InputField } from "@/components/shared/InputField.tsx";
import { resetForm, updateField } from "@/store/slices/vehicleFormSlice.ts";
import type { RootState } from "@/store/store.ts";

const Root = styled("div")(() => ({
	display: "flex",
	justifyContent: "center",
	padding: "1rem",
}));
const ButtonContainer = styled("div")(() => ({
	display: "flex",
	gap: "1rem",
}));

export const AddVehiclePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const vehicle = useSelector((state: RootState) => state.vehicleForm);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			updateField({ name: event.target.name, value: event.target.value }),
		);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await createVehicle(vehicle);
		dispatch(resetForm());
		navigate("/");
	};

	const toLabel = (str: string) =>
		str.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());

	return (
		<Root>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					maxWidth: "73.9425rem",
					width: "100%",
				}}
				onSubmit={handleSubmit}
			>
				{Object.entries(vehicle).map(([key, value]) => (
					<InputField
						key={key}
						name={key}
						label={`${toLabel(key)}:`}
						value={value}
						handleChange={handleChange}
					/>
				))}
				<ButtonContainer>
					<AdButton
						customVariant="primary"
						type="submit"
						fullWidth
						content="Add"
					/>
					<AdButton
						customVariant="primary"
						fullWidth
						content="Cancel"
						onClick={() => {
							dispatch(resetForm());
							navigate("/");
						}}
					/>
				</ButtonContainer>
			</form>
		</Root>
	);
};
