import React from "react";
import FormComponent from "../components/FormComponent";
import ImageComponent from "../components/ImageComponent";
import DefaultLayout from "../layouts/DefaultLayout";

const Home = () => {
	return (
		<DefaultLayout
			leftSection={<ImageComponent />}
			rightSection={<FormComponent />}
		/>
	);
};

export default Home;
