import React from 'react';

export let logo = (size, circleColor, shadowColor, mColor) => {
	let styleO = circleColor ? circleColor : '#3eb4f7';
	let styleShadow = shadowColor ? shadowColor : '#17597f';
	let styleM = mColor ? mColor : '#000000';
	size = size ? size : 100;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 557.94 632.656">
			<path id="O_copy_2" data-name="O copy 2" fill={styleO} d="M1465.99,577.989c-123.95,91.617-298.68,65.434-390.27-58.48-90-121.763-66.22-292.58,52.25-385.4l-0.09-.121L1268.87,24.8,1250.45-.113,1439.2,1.532l-28.5,95.822c0.88,0.378,1.75.79,2.62,1.177-1.24-.549-2.48-1.117-3.73-1.649l-25.81,86.761-18.41-24.915-143,100.722,144.38-98.538,19.65,28.939,30.61-89.664a277.521,277.521,0,0,1,107.58,87.55C1616.18,311.651,1589.94,486.373,1465.99,577.989Zm-245.65-318.9,0.81,1.187,0.05-.032Zm177.15,22.59a121.037,121.037,0,1,0-25.41,169.249A121.012,121.012,0,0,0,1397.49,281.68Z" transform="translate(-1021.06)" />
			<path id="Shadow_copy" data-name="Shadow copy" fill={styleShadow} d="M1221.15,260.277l-0.81-1.187,0.86,1.155ZM1387,192l-21-30-144,98,143-103,18,24,25.88-84.415q4.38,1.846,8.71,3.835Z" transform="translate(-1021.06)" />
			<path id="M_copy" data-name="M copy" fill={styleM} d="M1260,448.85a102.355,102.355,0,0,1-46-39.036V300.186q1.29-2.023,2.68-3.981L1300,396l83.32-99.8q1.4,1.958,2.68,3.981V409.814a102.427,102.427,0,0,1-42,37.228V416l-43,38-41-36v30.85Z" transform="translate(-1021.06)" />
		</svg>
	);
}