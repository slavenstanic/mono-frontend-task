import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>,
);
