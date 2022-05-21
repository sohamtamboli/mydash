import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import WebRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<WebRoutes />
	</React.StrictMode>
);
