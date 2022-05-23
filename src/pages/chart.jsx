import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import styles from "../styles/page-styles/chart.module.scss";

const dataset = [
	[10, 30, 40, 20],
	[10, 40, 30, 20, 50, 10],
	[60, 30, 40, 20, 30],
];
let i = 0;

function Chart() {
	const [data, setData] = useState([]);

	useEffect(() => {
		changeData();
	}, []);

	const changeData = () => {
		setData(dataset[i++]);
		if (i === dataset.length) i = 0;
	};

	return (
		<div className={styles.chartContainer}>
			<h2 className={styles.chartContainer__heading}>
				Barchart using React and D3
			</h2>
			<button className={styles.chartContainer__ctaBtn} onClick={changeData}>
				Change Data
			</button>
			<BarChart
				className={styles.chartContainer__barchart}
				width={600}
				height={400}
				data={data}
			/>
		</div>
	);
}

export default Chart;
