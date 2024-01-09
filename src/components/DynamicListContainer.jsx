import React from "react";

const DynamicListContainer = ({ data, type, orientation = "vertical" }) => {
	return (
		<div className={orientation === "vertical" ? "boxVertical" : "boxHorizontal"}>
			{type === "ul" ? (
				<ul>
					<MakeItems list={data} />
				</ul>
			) : (
				<ol>
					<ul>
						<MakeItems list={data} />
					</ul>
				</ol>
			)}
		</div>
	);
};

const MakeItems = ({ list }) => {
	return (
		<>
			{list.map((entry, index) => (
				<li key={index}>{entry}</li>
			))}
		</>
	);
};

export default DynamicListContainer;
