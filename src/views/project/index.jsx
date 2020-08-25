import React from "react";
import { Row, Col } from "antd";
import Project from "./modules/Project";
import "./index.scss";

export default class Projects extends React.Component {
	render() {
		return (
			<div className="ame-dashboard">
				<Project />
			</div>
		);
	}
}
