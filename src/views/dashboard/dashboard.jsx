import React from "react";
import { Row, Col } from "antd";
import Directory from "./modules/Directory";
import "./dashboard.scss";

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="ame-dashboard">
				<Row gutter={16} className="dashboard-row">
					<Col xs={12} sm={12} md={10} lg={8} xl={6}>
						<Directory />
					</Col>
					<Col xs={12} sm={12} md={14} lg={16} xl={18}>
						文件预览区
					</Col>
				</Row>
			</div>
		);
	}
}
