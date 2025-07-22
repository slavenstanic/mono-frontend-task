import { styled, Typography } from "@mui/material";
import type React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchVehicleById } from "@/api/hooks/fetchVehicleById.ts";
import type { AdProps } from "@/api/hooks/fetchVehicles.ts";
import { updateVehicle } from "@/api/hooks/updateVehicle.ts";
import { AdButton } from "@/components/shared/AdButton.tsx";
import { InputField } from "@/components/shared/InputField.tsx";

const Root = styled("div")(() => ({}));
const ButtonContainer = styled("div")(() => ({
	display: "flex",
	gap: "1rem",
}));

export const EditVehiclePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [vehicle, setVehicle] = useState<AdProps | null>(null);
	const [form, setForm] = useState({
		title: "",
		brand: "",
		model: "",
		engineType: "",
		productionYear: "",
		mileage: "",
		price: "",
		image: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return;
			try {
				const data = await fetchVehicleById(id);
				setVehicle(data);
				setForm({
					title: data.title,
					brand: data.model.brand.name,
					model: data.model.name,
					engineType: data.engineType,
					productionYear: data.productionYear,
					mileage: data.mileage.toString(),
					price: data.price.toString(),
					image: data.image,
				});
			} catch (error) {
				console.error(error);
			}
		};
		void fetchData();
	}, [id]);

	if (!vehicle) return <Typography>Loading...</Typography>;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await updateVehicle({
				adId: vehicle.id,
				modelId: vehicle.model.id,
				brandId: vehicle.model.brand.id,
				vehicle: form,
			});
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Root>
			<form
				style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
				onSubmit={handleSubmit}
			>
				<InputField
					name="title"
					label="Title"
					value={form.title}
					handleChange={handleChange}
				/>
				<InputField
					name="brand"
					label="Brand"
					value={form.brand}
					handleChange={handleChange}
				/>
				<InputField
					name="model"
					label="Model"
					value={form.model}
					handleChange={handleChange}
				/>
				<InputField
					name="engineType"
					label="Engine Type"
					value={form.engineType}
					handleChange={handleChange}
				/>
				<InputField
					name="productionYear"
					label="Production Year"
					value={form.productionYear}
					handleChange={handleChange}
				/>
				<InputField
					name="mileage"
					label="Mileage"
					value={form.mileage}
					handleChange={handleChange}
				/>
				<InputField
					name="price"
					label="Price"
					value={form.price}
					handleChange={handleChange}
				/>
				<InputField
					name="image"
					label="Image URL"
					value={form.image}
					handleChange={handleChange}
				/>
				<ButtonContainer>
					<AdButton
						customVariant="primary"
						type="submit"
						fullWidth
						content="Save"
					/>
					<AdButton
						customVariant="primary"
						fullWidth
						content="Cancel"
						onClick={() => navigate("/")}
					/>
				</ButtonContainer>
			</form>
		</Root>
	);
};
