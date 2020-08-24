import React from "react";
import { Input, Row, Col, Avatar, Tooltip, Progress, Tag, Select, Statistic, Form, Button } from "antd";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";
import {
	SearchOutlined,
	UserOutlined,
	AntDesignOutlined,
	TwitterOutlined,
	YoutubeOutlined,
	MoreOutlined,
} from "@ant-design/icons";

const { Countdown } = Statistic;
const FormItem = Form.Item;
const Option = Select.Option;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const data = [
	{
		title: "删除",
	},
	{
		title: "新增",
	},
	{
		title: "增加",
	},
	{
		title: "更新",
	},
	{
		title: "增加",
	},
	{
		title: "增加",
	},
];
class Project extends React.Component {
	render() {
		return (
			<div className="ame-project">
				<div className="search">
					<Input size="large" placeholder="搜索关键字" prefix={<SearchOutlined />} />
				</div>
				<div className="project-view">
					<AmeScrollbars className="ame-scrollbar-view">
						<Row gutter={16}>
							<Col xs={12} sm={12} md={12} lg={8} xl={6}>
								<div className="single-project">
									<div className="desc">
										<div className="project-name">项目名称</div>
										<Avatar.Group
											maxCount={2}
											maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
										>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
											<Tooltip title="Ant User" placement="top">
												<Avatar
													style={{ backgroundColor: "#87d068" }}
													icon={<UserOutlined />}
												/>
											</Tooltip>
											<Avatar
												style={{ backgroundColor: "#1890ff" }}
												icon={<AntDesignOutlined />}
											/>
										</Avatar.Group>
									</div>
									<div className="project-tags">
										<Tag icon={<TwitterOutlined />} color="#55acee">
											负责人
										</Tag>
										<Tag icon={<YoutubeOutlined />} color="#cd201f">
											项目状态
										</Tag>
									</div>
									<Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />

									<div className="progress">
										<Progress
											strokeColor={{
												from: "#638ff6",
												to: "#87d068",
											}}
											percent={99.9}
											status="active"
										/>
									</div>
								</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={8} xl={6}>
								<div className="single-project">
									<div className="desc">
										<div>项目名称</div>
										<Avatar.Group
											maxCount={2}
											maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
										>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
											<Tooltip title="Ant User" placement="top">
												<Avatar
													style={{ backgroundColor: "#87d068" }}
													icon={<UserOutlined />}
												/>
											</Tooltip>
											<Avatar
												style={{ backgroundColor: "#1890ff" }}
												icon={<AntDesignOutlined />}
											/>
										</Avatar.Group>
									</div>
									<div className="project-tags">
										<Tag icon={<TwitterOutlined />} color="#55acee">
											Twitter
										</Tag>
										<Tag icon={<YoutubeOutlined />} color="#cd201f">
											Youtube
										</Tag>
									</div>
									<Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
									<div className="progress">
										<Progress
											strokeColor={{
												from: "#638ff6",
												to: "#87d068",
											}}
											percent={99.9}
											status="active"
										/>
									</div>
								</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={8} xl={6}>
								<div className="single-project">
									<div className="desc">
										<div>项目名称</div>
										<Avatar.Group
											maxCount={2}
											maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
										>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
											<Tooltip title="Ant User" placement="top">
												<Avatar
													style={{ backgroundColor: "#87d068" }}
													icon={<UserOutlined />}
												/>
											</Tooltip>
											<Avatar
												style={{ backgroundColor: "#1890ff" }}
												icon={<AntDesignOutlined />}
											/>
										</Avatar.Group>
									</div>
									<div className="project-tags">
										<Tag icon={<TwitterOutlined />} color="#55acee">
											Twitter
										</Tag>
										<Tag icon={<YoutubeOutlined />} color="#cd201f">
											Youtube
										</Tag>
									</div>
									<Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
									<div className="progress">
										<Progress
											strokeColor={{
												from: "#638ff6",
												to: "#87d068",
											}}
											percent={99.9}
											status="active"
										/>
									</div>
								</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={8} xl={6}>
								<div className="single-project">
									<div className="desc">
										<div>项目名称</div>
										<Avatar.Group
											maxCount={2}
											maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
										>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
											<Tooltip title="Ant User" placement="top">
												<Avatar
													style={{ backgroundColor: "#87d068" }}
													icon={<UserOutlined />}
												/>
											</Tooltip>
											<Avatar
												style={{ backgroundColor: "#1890ff" }}
												icon={<AntDesignOutlined />}
											/>
										</Avatar.Group>
									</div>
									<div className="project-tags">
										<Tag icon={<TwitterOutlined />} color="#55acee">
											Twitter
										</Tag>
										<Tag icon={<YoutubeOutlined />} color="#cd201f">
											Youtube
										</Tag>
									</div>
									<Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
									<div className="progress">
										<Progress
											strokeColor={{
												from: "#638ff6",
												to: "#87d068",
											}}
											percent={99.9}
											status="active"
										/>
									</div>
								</div>
							</Col>
						</Row>
					</AmeScrollbars>
				</div>
			</div>
		);
	}
}
export default Project;
