import React from "react";
import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";
import { Tree, Button, Input, Collapse } from "antd";

const { Search } = Input;

const { Panel } = Collapse;

// 左侧-目录区
class Directory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: `aaaa`,
			treeData: [
				{
					title: "项目名",
					key: "0-0",
					children: [
						{
							title: "音视频文件",
							key: "0-0-0",
							icon: <SmileOutlined />,
							children: [
								{
									title: "超长超长超长超长超长字符串测试",
									key: "0-0-0-0",
								},
								{
									title: "视频一",
									key: "0-0-0-1",
								},
							],
						},
						{
							title: "文档",
							key: "0-0-1",
							children: [
								{
									title: "word",
									key: "0-0-1-0",
								},
							],
						},
						{
							title: "图片",
							key: "0-0-2",
							children: [
								{
									title: "图片一",
									key: "0-0-2-0",
								},
							],
						},
						{
							title: "其它",
							key: "0-0-3",
							children: [
								{
									title: "bmnp",
									key: "0-0-3-0",
								},
							],
						},
					],
				},
			],
			activePanel: ["1"],
		};
	}

	onSelect = (selectedKeys, info) => {
		console.log("selected", selectedKeys, info);
	};

	treeRightClick = (checkedKeys) => {
		console.log("右键", checkedKeys);
	};

	callback = (key) => {
		this.setState({
			activePanel: key,
		});
	};
	render() {
		return (
			<div className="ame-directory">
				<div className="files">
					<div className="title">Storage 文件库</div>
					<AmeScrollbars className="ame-scrollbar-files">
						<Collapse
							className="site-collapse-custom-collapse"
							bordered={false}
							defaultActiveKey={this.state.activePanel}
							onChange={this.callback}
							ghost
						>
							<Panel
								showArrow={false}
								header="我的文件"
								key="1"
								className={this.state.activePanel.includes("1") ? "panel-active" : ""}
							>
								<Search style={{ marginBottom: 8 }} placeholder="输入关键字搜索" />
								<Tree
									showIcon
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									treeData={this.state.treeData}
									onRightClick={this.treeRightClick}
								/>
							</Panel>
							<Panel
								showArrow={false}
								header="共享文件"
								key="2"
								className={this.state.activePanel.includes("2") ? "panel-active" : ""}
							>
								<Search style={{ marginBottom: 8 }} placeholder="输入关键字搜索" />
								<Tree
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									treeData={this.state.treeData}
								/>
							</Panel>
							<Panel
								showArrow={false}
								header="最近文件"
								key="3"
								className={this.state.activePanel.includes("3") ? "panel-active" : ""}
							>
								<Search style={{ marginBottom: 8 }} placeholder="输入关键字搜索" />
								<Tree
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									treeData={this.state.treeData}
								/>
							</Panel>
							<Panel
								showArrow={false}
								header="垃圾箱"
								key="4"
								className={this.state.activePanel.includes("4") ? "panel-active" : ""}
							>
								<Search style={{ marginBottom: 8 }} placeholder="输入关键字搜索" />
								<Tree
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									treeData={this.state.treeData}
								/>
							</Panel>
						</Collapse>
					</AmeScrollbars>
				</div>
				<div className="add-files">
					<div className="add-btn">
						<Button block type="primary" size="large" icon={<PlusOutlined />}>
							新增
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
export default Directory;
