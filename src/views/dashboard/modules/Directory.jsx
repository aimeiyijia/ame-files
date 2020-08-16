import React from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";
import { Tree, Button } from "antd";

import { Collapse } from "antd";

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
							children: [
								{
									title: "音频一",
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

	onCheck = (checkedKeys, info) => {
		console.log("onCheck", checkedKeys, info);
	};

	callback = (key) => {
		console.log(key);
		this.setState({
			activePanel: key,
		});
	};
	render() {
		return (
			<div className="ame-directory">
				<div className="navigation">
					<div className="title">Dashboard 工作台</div>
					<div>120个任务</div>
				</div>
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
								<Tree
									checkable
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									onCheck={this.onCheck}
									treeData={this.state.treeData}
								/>
							</Panel>
							<Panel
								showArrow={false}
								header="共享文件"
								key="2"
								className={this.state.activePanel.includes("2") ? "panel-active" : ""}
							>
								<Tree
									checkable
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									onCheck={this.onCheck}
									treeData={this.state.treeData}
								/>
							</Panel>
							<Panel
								showArrow={false}
								header="最近文件"
								key="3"
								className={this.state.activePanel.includes("3") ? "panel-active" : ""}
							>
								<Tree
									checkable
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									onCheck={this.onCheck}
									treeData={this.state.treeData}
								/>
							</Panel>
							<Panel
								showArrow={false}
								header="垃圾箱"
								key="4"
								className={this.state.activePanel.includes("4") ? "panel-active" : ""}
							>
								<Tree
									checkable
									defaultExpandedKeys={["0-0-0", "0-0-1", "0-0-2"]}
									onSelect={this.onSelect}
									onCheck={this.onCheck}
									treeData={this.state.treeData}
								/>
							</Panel>
						</Collapse>
					</AmeScrollbars>
				</div>
				<div className="add-files">
					<div className="add-btn">
						<Button block type="primary" size="large" icon={<SearchOutlined />}>
							Search
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
export default Directory;
