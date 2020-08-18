import React from "react";
import { Input, Row, Col, Avatar, Tooltip, Progress, Tag, List } from "antd";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";
import {
	SearchOutlined,
	UserOutlined,
	AntDesignOutlined,
	TwitterOutlined,
	YoutubeOutlined,
	FacebookOutlined,
	LinkedinOutlined,
} from "@ant-design/icons";

const data = [
	{
		title: "Ant Design Title 1",
	},
	{
		title: "Ant Design Title 2",
	},
	{
		title: "Ant Design Title 3",
	},
	{
		title: "Ant Design Title 4",
	},
	{
		title: "Ant Design Title 5",
	},
	{
		title: "Ant Design Title 6",
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
					<div className="title">项目预览</div>
					<AmeScrollbars className="ame-scrollbar-view">
						<Row gutter={16}>
							<Col xs={2} sm={4} md={6} lg={8} xl={12}>
								<div className="single-project">
									<div className="desc">
										<div>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<div>项目名称</div>
										</div>
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
										<Tag icon={<FacebookOutlined />} color="#3b5999">
											Facebook
										</Tag>
										<Tag icon={<LinkedinOutlined />} color="#55acee">
											LinkedIn
										</Tag>
									</div>
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
							<Col xs={2} sm={4} md={6} lg={8} xl={12}>
								<div className="single-project">
									<div className="desc">
										<div>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<div>项目名称</div>
										</div>
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
										<Tag icon={<FacebookOutlined />} color="#3b5999">
											Facebook
										</Tag>
										<Tag icon={<LinkedinOutlined />} color="#55acee">
											LinkedIn
										</Tag>
									</div>
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
						<Row gutter={16}>
							<Col xs={2} sm={4} md={6} lg={8} xl={12}>
								<div className="single-project">
									<div className="desc">
										<div>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<div>项目名称</div>
										</div>
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
										<Tag icon={<FacebookOutlined />} color="#3b5999">
											Facebook
										</Tag>
										<Tag icon={<LinkedinOutlined />} color="#55acee">
											LinkedIn
										</Tag>
									</div>
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
							<Col xs={2} sm={4} md={6} lg={8} xl={12}>
								<div className="single-project">
									<div className="desc">
										<div>
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
											<div>项目名称</div>
										</div>
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
										<Tag icon={<FacebookOutlined />} color="#3b5999">
											Facebook
										</Tag>
										<Tag icon={<LinkedinOutlined />} color="#55acee">
											LinkedIn
										</Tag>
									</div>
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
				<div className="recent">
					<div className="title">最近操作</div>
					<AmeScrollbars className="ame-scrollbar-lists">
						<List
							itemLayout="horizontal"
							dataSource={data}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										avatar={
											<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
										}
										title={<a href="https://ant.design">{item.title}</a>}
										description="Ant Design, a design language for background applications, is refined by Ant UED Team"
									/>
								</List.Item>
							)}
						/>
					</AmeScrollbars>
				</div>
			</div>
		);
	}
}
export default Project;
