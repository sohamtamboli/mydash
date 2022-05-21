import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES from "../constants";
import Home from "../pages";
import Chart from "../pages/chart";

const WebRoutes = () => {
	const { HOME, CHARTDATA } = ROUTES;
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Home />}></Route>
				<Route path={CHARTDATA} element={<Chart />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default WebRoutes;
