import React from "react";
import styles from "../styles/layout-styles/defaultlayout.module.scss";

const DefaultLayout = ({ leftSection, rightSection }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.layout__left}>
				{/* Left Image Component */}
				{/* <img src="" alt="" />
            <div>
                <h3></h3>
                <p></p>
            </div> */}
				{leftSection}
			</div>
			<div className={styles.layout__right}>
				{/* Form */}
				{rightSection}
			</div>
		</div>
	);
};

export default DefaultLayout;
