import React from "react";
import { Breadcrumb } from "antd";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";

// 左侧-目录区
class Path extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="ame-file-view_path">
				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href="">Application Center</a>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						<a href="">Application List</a>
					</Breadcrumb.Item>
					<Breadcrumb.Item>An Application</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		);
	}
}
export default Path;
