import type { AdProps } from "@/api/services/fetchVehicles.ts";
import { supabase } from "@/api/supabase.ts";

interface BackendVehicleMakeProps {
	id: string;
	name: string;
	abrv: string;
}

interface BackendVehicleModelProps {
	id: string;
	vehicle_make_id: string;
	name: string;
	abrv: string;
	brand: BackendVehicleMakeProps;
}

interface BackendAdProps {
	id: string;
	title: string;
	engine_type: string;
	production_year: string;
	mileage: number;
	price: number;
	image: string;
	model: BackendVehicleModelProps;
}

export const fetchVehicleById = async (id: string): Promise<AdProps> => {
	const { data, error } = await supabase
		.from("VehicleAd")
		.select(
			`
      id,
      title,
      engine_type,
      production_year,
      mileage,
      price,
      vehicle_model_id,
      image,
      model: VehicleModel (
        id,
        vehicle_make_id,
        name,
        abrv,
        brand: VehicleMake (
          id,
          name,
          abrv
        )
      )
    `,
		)
		.eq("id", id)
		.single();

	if (error || !data) {
		throw new Error(error?.message);
	}

	// @ts-ignore --> supabase gives false array type!
	const vehicle: BackendAdProps = data;

	return {
		id: vehicle.id,
		title: vehicle.title,
		engineType: vehicle.engine_type,
		productionYear: vehicle.production_year,
		mileage: vehicle.mileage,
		price: vehicle.price,
		image: vehicle.image,
		model: {
			id: vehicle.model.id,
			vehicleMakeId: vehicle.model.vehicle_make_id,
			name: vehicle.model.name,
			abrv: vehicle.model.abrv,
			brand: {
				id: vehicle.model.brand.id,
				name: vehicle.model.brand.name,
				abrv: vehicle.model.brand.abrv,
			},
		},
	};
};
