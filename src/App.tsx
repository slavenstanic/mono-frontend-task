import type { ReactElement } from "react";
import { AddVehiclePage } from "@/pages/AddVehiclePage.tsx";
import { MainPage } from "@/pages/MainPage.tsx";

export const App = (): ReactElement => {
	return (
		<div>
			<MainPage />
			<AddVehiclePage />
		</div>
	);
};
