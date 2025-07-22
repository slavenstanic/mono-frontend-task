import { supabase } from "@/api/supabase.ts";

interface UpdateVehicleProps {
	adId: string;
	modelId: string;
	brandId: string;
	vehicle: {
		title: string;
		brand: string;
		model: string;
		engineType: string;
		productionYear: string;
		mileage: string;
		price: string;
		image: string;
	};
}

export const updateVehicle = async ({
	adId,
	modelId,
	brandId,
	vehicle,
}: UpdateVehicleProps): Promise<void> => {
	const { error: brandError } = await supabase
		.from("VehicleMake")
		.update({ name: vehicle.brand, abrv: vehicle.brand })
		.eq("id", brandId);

	if (brandError) throw brandError;

	const { error: modelError } = await supabase
		.from("VehicleModel")
		.update({
			name: vehicle.model,
			abrv: vehicle.model,
		})
		.eq("id", modelId);

	if (modelError) throw modelError;

	const { error: adError } = await supabase
		.from("VehicleAd")
		.update({
			title: vehicle.title,
			engine_type: vehicle.engineType,
			production_year: vehicle.productionYear,
			mileage: vehicle.mileage,
			price: vehicle.price,
			image: vehicle.image,
		})
		.eq("id", adId);

	if (adError) throw adError;
};
