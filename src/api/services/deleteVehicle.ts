import { supabase } from "@/api/supabase.ts";

interface deleteVehicleProps {
	adId: string;
	modelId: string;
	brandId: string;
}

export const deleteVehicle = async ({
	adId,
	modelId,
	brandId,
}: deleteVehicleProps): Promise<void> => {
	const { error } = await supabase.from("VehicleAd").delete().eq("id", adId);

	if (error) throw error;

	const { error: modelError } = await supabase
		.from("VehicleModel")
		.delete()
		.eq("id", modelId);

	if (modelError) throw modelError;

	const { error: brandError } = await supabase
		.from("VehicleMake")
		.delete()
		.eq("id", brandId);

	if (brandError) throw brandError;
};
