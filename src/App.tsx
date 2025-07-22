import type { ReactElement } from "react";
import { useState } from "react";
import type { AdProps } from "@/api/hooks/fetchVehicles.ts";
import { AddVehiclePage } from "@/pages/AddVehiclePage.tsx";
import { EditVehiclePage } from "@/pages/EditVehiclePage.tsx";
import { MainPage } from "@/pages/MainPage.tsx";

export const App = (): ReactElement => {
	const [selectedVehicle, setSelectedVehicle] = useState<AdProps | null>(null);
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div>
			{isEditing && selectedVehicle ? (
				<EditVehiclePage
					vehicle={selectedVehicle}
					onClose={() => setIsEditing(false)}
				/>
			) : (
				<>
					<MainPage
						onEdit={(vehicle) => {
							setSelectedVehicle(vehicle);
							setIsEditing(true);
						}}
					/>
					<AddVehiclePage />
				</>
			)}
		</div>
	);
};
