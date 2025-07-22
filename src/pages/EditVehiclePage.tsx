import { styled } from "@mui/material";
import type React from "react";
import { useEffect, useState } from "react";
import type { AdProps } from "@/api/hooks/fetchVehicles.ts";
import { updateVehicle } from "@/api/hooks/updateVehicle.ts";
import { AdButton } from "@/components/shared/AdButton.tsx";
import { InputField } from "@/components/shared/InputField.tsx";

const Root = styled("div")(() => ({}));
const ButtonContainer = styled("div")(() => ({
	display: "flex",
	gap: "1rem",
}));

interface EditProps {
	vehicle: AdProps;
	onClose: () => void;
}

export const EditVehiclePage = ({ vehicle, onClose }: EditProps) => {
	const [form, setForm] = useState({ ...vehicle });

	useEffect(() => {
		setForm({ ...vehicle });
	}, [vehicle]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await updateVehicle({
			adId: vehicle.id,
			modelId: vehicle.model.id,
			brandId: vehicle.model.brand.id,
			vehicle: {
				title: form.title,
				brand: form.model.brand.name,
				model: form.model.name,
				engineType: form.engineType,
				productionYear: form.productionYear,
				mileage: form.mileage.toString(),
				price: form.price.toString(),
				image: form.image,
			},
		});
		onClose();
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
					value={form.model.brand.name}
					handleChange={handleChange}
				/>
				<InputField
					name="model"
					label="Model"
					value={form.model.name}
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
					value={form.mileage.toString()}
					handleChange={handleChange}
				/>
				<InputField
					name="price"
					label="Price"
					value={form.price.toString()}
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
						onClick={onClose}
					/>
				</ButtonContainer>
			</form>
		</Root>
	);
};
