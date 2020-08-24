import React from "react";
import { Row, Col } from "antd";
import Directory from "./modules/Directory";
import Project from "./modules/Project";
import "./project.scss";

// 右侧-统计区
function Statistics() {
	return <div className="ame-statistics">统计区</div>;
}

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="ame-dashboard">
				<Row gutter={16} className="dashboard-row">
					<Col span={6}>
						<Directory />
					</Col>
					<Col span={12}>
						<Project />
					</Col>
					<Col span={6}>
						<Statistics />
					</Col>
				</Row>
			</div>
		);
	}
}
