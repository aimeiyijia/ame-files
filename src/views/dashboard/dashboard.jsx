import React from "react";
import { Row, Col } from "antd";

// 左侧-目录区
function Directory() {
	return <div className="ame-directory">目录区</div>;
}
// 中间-项目区
function Project() {
	return <div className="ame-project">工程区</div>;
}
// 右侧-统计区
function Statistics() {
	return <div className="ame-statistics">统计区</div>;
}

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="ame-dashboard">
				<Row>
					<Col span={8}>
						<Directory />
					</Col>
					<Col span={8}>
						<Project />
					</Col>
					<Col span={8}>
						<Statistics />
					</Col>
				</Row>
			</div>
		);
	}
}
