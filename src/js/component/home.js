import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropType from "prop-types";
//create your first component
export function Home(props) {
	const styleCard = {
		color: "white",
		backgroundColor: "rgb(22,22,22)",
		fontSize: "250px",
		borderRadius: "20px",
		textAlign: "center"
	};
	const styleBackgroud = {
		backgroundColor: "rgb(7,7,7)"
	};
	return (
		<div style={styleBackgroud}>
			<div className="d-flex justify-content-center">
				<div className="row">
					<div className="col" style={styleCard}>
						<i className="far fa-clock" />
					</div>

					<div className="col" style={styleCard}>
						{props.digit1}
					</div>

					<div className="col" style={styleCard}>
						{props.digit2}
					</div>

					<div className="col" style={styleCard}>
						{props.digit3}
					</div>

					<div className="col" style={styleCard}>
						{props.digit4}
					</div>

					<div className="col" style={styleCard}>
						{props.digit5}
					</div>

					<div className="col" style={styleCard}>
						{props.digit6}
					</div>
				</div>
			</div>
		</div>
	);
}
Home.propTypes = {
	digit1: PropType.string,
	digit2: PropType.string,
	digit3: PropType.string,
	digit4: PropType.string,
	digit5: PropType.string,
	digit6: PropType.string
};
