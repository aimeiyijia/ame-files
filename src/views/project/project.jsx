import React from "react";
import { Row, Col } from "antd";
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
					<Col xs={12} sm={12} md={10} lg={8} xl={6}>
						<Statistics />
					</Col>
					<Col xs={12} sm={12} md={14} lg={16} xl={18}>
						<Project />
					</Col>
				</Row>
			</div>
		);
	}
}
