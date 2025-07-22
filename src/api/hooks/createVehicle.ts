// @/api/hooks/createVehicle.ts
import { supabase } from "@/api/supabase.ts";

interface CreateVehicleProps {
	title: string;
	brand: string;
	model: string;
	engineType: string;
	productionYear: string;
	mileage: string;
	price: string;
	image: string;
}

export const createVehicle = async (
	vehicle: CreateVehicleProps,
): Promise<void> => {
	const { data: brandData, error: brandError } = await supabase
		.from("VehicleMake")
		.insert([{ name: vehicle.brand, abrv: vehicle.brand }])
		.select()
		.single();

	if (brandError) throw brandError;

	const { data: modelData, error: modelError } = await supabase
		.from("VehicleModel")
		.insert([
			{
				name: vehicle.model,
				abrv: vehicle.model,
				vehicle_make_id: brandData.id,
			},
		])
		.select()
		.single();

	if (modelError) throw modelError;

	const { error: adError } = await supabase.from("VehicleAd").insert([
		{
			title: vehicle.title,
			engine_type: vehicle.engineType,
			production_year: vehicle.productionYear,
			mileage: vehicle.mileage,
			price: vehicle.price,
			image: vehicle.image,
			vehicle_model_id: modelData.id,
		},
	]);

	if (adError) throw adError;
};
