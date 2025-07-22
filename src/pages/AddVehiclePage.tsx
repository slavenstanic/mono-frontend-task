import { styled } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { createVehicle } from "@/api/hooks/createVehicle.ts";
import { AdButton } from "@/components/shared/AdButton.tsx";
import { InputField } from "@/components/shared/InputField.tsx";

const Root = styled("div")(() => ({}));
const ButtonContainer = styled("div")(() => ({
	display: "flex",
	gap: "1rem",
}));

export const AddVehiclePage = () => {
	const [vehicle, setVehicle] = useState({
		title: "",
		brand: "",
		model: "",
		engineType: "",
		productionYear: "",
		mileage: "",
		price: "",
		image: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVehicle((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			await createVehicle(vehicle);
			setVehicle({
				title: "",
				brand: "",
				model: "",
				engineType: "",
				productionYear: "",
				mileage: "",
				price: "",
				image: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Root>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
				}}
				onSubmit={handleSubmit}
			>
				<InputField
					name="title"
					label="Title:"
					value={vehicle.title}
					handleChange={handleChange}
				/>
				<InputField
					name="brand"
					label="Brand:"
					value={vehicle.brand}
					handleChange={handleChange}
				/>
				<InputField
					name="model"
					label="Model:"
					value={vehicle.model}
					handleChange={handleChange}
				/>
				<InputField
					name="engineType"
					label="Engine Type:"
					value={vehicle.engineType}
					handleChange={handleChange}
				/>
				<InputField
					name="productionYear"
					label="Year of Production:"
					value={vehicle.productionYear}
					handleChange={handleChange}
				/>
				<InputField
					name="mileage"
					label="Mileage:"
					value={vehicle.mileage}
					handleChange={handleChange}
				/>
				<InputField
					name="price"
					label="Price:"
					value={vehicle.price}
					handleChange={handleChange}
				/>
				<InputField
					name="image"
					label="Image URL:"
					value={vehicle.image}
					handleChange={handleChange}
				/>
				<ButtonContainer>
					<AdButton type={"submit"} fullWidth={true} content={"Add"} />
					<AdButton fullWidth={true} content={"Cancel"} />
				</ButtonContainer>
			</form>
		</Root>
	);
};
