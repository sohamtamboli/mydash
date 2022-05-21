import React from "react";
import styles from "../styles/component-styles/image-component.module.scss";

const ImageComponent = () => {
	return (
		<div className={styles.imageContainer}>
			<div className={styles.contentWrapper}>
				<h3 className={styles.contentWrapper__heading}>Choose a data range</h3>
				<p className={styles.contentWrapper__subheading}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					perferendis libero optio doloremque.
				</p>
			</div>
		</div>
	);
};

export default ImageComponent;
