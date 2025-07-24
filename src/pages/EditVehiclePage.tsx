import { styled } from "@mui/material";
import type React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchVehicleById } from "@/api/services/fetchVehicleById.ts";
import { updateVehicle } from "@/api/services/updateVehicle.ts";
import { AdButton } from "@/components/shared/AdButton.tsx";
import { InputField } from "@/components/shared/InputField.tsx";
import {
	resetForm,
	setForm,
	updateField,
} from "@/store/slices/vehicleFormSlice.ts";
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

export const EditVehiclePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const form = useSelector((state: RootState) => state.vehicleForm);

	useEffect(() => {
		const fetch = async () => {
			if (!id) return;
			const data = await fetchVehicleById(id);
			dispatch(
				setForm({
					title: data.title,
					brand: data.model.brand.name,
					model: data.model.name,
					engineType: data.engineType,
					productionYear: data.productionYear,
					mileage: data.mileage.toString(),
					price: data.price.toString(),
					image: data.image,
				}),
			);
		};
		void fetch();
	}, [dispatch, id]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateField({ name: e.target.name, value: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!id) return;
		const data = await fetchVehicleById(id);
		await updateVehicle({
			adId: data.id,
			modelId: data.model.id,
			brandId: data.model.brand.id,
			vehicle: form,
		});
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
				{Object.entries(form).map(([key, value]) => (
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
						type="submit"
						content="Save"
						customVariant="primary"
						fullWidth
					/>
					<AdButton
						content="Cancel"
						customVariant="primary"
						fullWidth
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
