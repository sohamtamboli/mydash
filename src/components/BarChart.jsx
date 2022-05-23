import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import styles from "../styles/component-styles/barchart.module.scss";

function BarChart({ width, height, data }) {
	const ref = useRef();

	useEffect(() => {
		const svg = d3
			.select(ref.current)
			.attr("width", width)
			.attr("height", height);
		const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
		svg
			.append("g")
			.attr("transform", `translate(0, ${height})`)
			.call(d3.axisBottom(x));

		const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
		svg.append("g").call(d3.axisLeft(y));
	}, []);

	useEffect(() => {
		draw();
	}, [data]);

	const draw = () => {
		const svg = d3.select(ref.current);
		let selection = svg.selectAll("rect").data(data);
		let yScale = d3
			.scaleLinear()
			.domain([0, d3.max(data)])
			.range([0, height - 100]);

		selection
			.transition()
			.duration(300)
			.attr("height", (d) => yScale(d))
			.attr("y", (d) => height - yScale(d));

		selection
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * 45)
			.attr("y", (d) => height)
			.attr("width", 40)
			.attr("height", 0)
			.attr("fill", "orange")
			.transition()
			.duration(300)
			.attr("height", (d) => yScale(d))
			.attr("y", (d) => height - yScale(d));

		selection
			.enter()
			.append("text")
			.attr("x", (d, i) => i * 45 + 10)
			.attr("y", (d, i) => height - yScale(d) - 10)
			.text((d) => d)
			.transition()
			.duration(300);

		selection
			.exit()
			.transition()
			.duration(300)
			.attr("y", (d) => height)
			.attr("height", 0)
			.remove();
	};

	return (
		<div className={styles.barchart}>
			<svg ref={ref}></svg>
		</div>
	);
}

export default BarChart;
