import type { ReactElement } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddVehiclePage } from "@/pages/AddVehiclePage.tsx";
import { EditVehiclePage } from "@/pages/EditVehiclePage.tsx";
import { MainPage } from "@/pages/MainPage.tsx";

export const App = (): ReactElement => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/add" element={<AddVehiclePage />} />
				<Route path="/edit/:id" element={<EditVehiclePage />} />
			</Routes>
		</Router>
	);
};
