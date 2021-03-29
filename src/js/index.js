//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
var count = 0;
var newCounter;
function increaseCounter() {
	count++;
	newCounter = "000000" + count;
	newCounter = newCounter.slice(-6);
	console.log(newCounter);
	if (count == 10) {
		alert("You have reached your time limit!");
		clearInterval(interval);
	}
	ReactDOM.render(
		<Home
			digit1={newCounter.charAt(0)}
			digit2={newCounter.charAt(1)}
			digit3={newCounter.charAt(2)}
			digit4={newCounter.charAt(3)}
			digit5={newCounter.charAt(4)}
			digit6={newCounter.charAt(5)}
		/>,
		document.querySelector("#app")
	);
}
var interval = setInterval(increaseCounter, 1000);
