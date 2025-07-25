import { supabase } from "@/api/supabase.ts";

interface VehicleMakeProps {
	id: string;
	name: string;
	abrv: string;
}

interface VehicleModelProps {
	id: string;
	vehicleMakeId: string;
	name: string;
	abrv: string;
	brand: VehicleMakeProps;
}

export interface AdProps {
	id: string;
	title: string;
	engineType: string;
	productionYear: string;
	mileage: number;
	price: number;
	image: string;
	model: VehicleModelProps;
}

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

export const fetchVehicles = async (
	from: number,
	to: number,
	filters?: {
		withImage?: boolean;
		engineTypes?: string[];
		priceMin?: number;
		priceMax?: number;
		sortBy?: string;
	},
): Promise<{ ads: AdProps[]; count: number }> => {
	let query = supabase
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
			{ count: "exact" },
		)
		.range(from, to);

	if (filters?.engineTypes?.length) {
		query = query.in("engine_type", filters.engineTypes);
	}

	if (filters?.priceMin !== undefined) {
		query = query.gte("price", filters.priceMin);
	}

	if (filters?.priceMax !== undefined) {
		query = query.lte("price", filters.priceMax);
	}

	if (filters?.sortBy) {
		const [column, direction] = filters.sortBy.split("_");
		if (column === "price") {
			query = query.order("price", { ascending: direction === "asc" });
		}
	}

	const { data, error, count } = await query;

	if (!data) throw new Error(error?.message);

	return {
		// @ts-ignore --> supabase gives false array type!
		ads: data.map((vehicle: BackendAdProps) => {
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
		}),
		count: count || 0,
	};
};
