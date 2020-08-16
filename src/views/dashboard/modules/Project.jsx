import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class Project extends React.Component {
	render() {
		return (
			<div className="ame-project">
				<div className="search">
					<Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
				</div>
				<div className="statistics"></div>
				<div className="folders"></div>
				<div className="recent"></div>
			</div>
		);
	}
}
export default Project;
