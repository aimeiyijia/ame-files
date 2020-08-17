import React from "react";
import { Input, Row, Col, Avatar, Tooltip } from "antd";
import { SearchOutlined, UserOutlined, AntDesignOutlined } from "@ant-design/icons";

class Project extends React.Component {
	render() {
		return (
			<div className="ame-project">
				<div className="search">
					<Input size="large" placeholder="搜索关键字" prefix={<SearchOutlined />} />
				</div>
				<div className="project-view">
					<div className="title">项目预览</div>
					<Row>
						<Col span={8}>
							<div className="single-project">
								<div>
									<div>
										<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
										<span>项目名称</span>
									</div>
									<Avatar.Group
										maxCount={2}
										maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
									>
										<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
										<Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
										<Tooltip title="Ant User" placement="top">
											<Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
										</Tooltip>
										<Avatar style={{ backgroundColor: "#1890ff" }} icon={<AntDesignOutlined />} />
									</Avatar.Group>
								</div>
							</div>
						</Col>
						<Col span={8}>col-8</Col>
						<Col span={8}>col-8</Col>
					</Row>
				</div>
				<div className="recent">
					<div className="title">最近操作</div>
				</div>
			</div>
		);
	}
}
export default Project;
