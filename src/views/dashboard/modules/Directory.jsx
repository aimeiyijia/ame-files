import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Tree } from "antd";

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
					title: "parent 1",
					key: "0-0",
					children: [
						{
							title: "parent 1-0",
							key: "0-0-0",
							disabled: true,
							children: [
								{
									title: "leaf",
									key: "0-0-0-0",
									disableCheckbox: true,
								},
								{
									title: "leaf",
									key: "0-0-0-1",
								},
							],
						},
						{
							title: "parent 1-1",
							key: "0-0-1",
							children: [
								{
									title: (
										<span
											style={{
												color: "#1890ff",
											}}
										>
											sss
										</span>
									),
									key: "0-0-1-0",
								},
							],
						},
					],
				},
			],
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
					<Collapse
						className="site-collapse-custom-collapse"
						bordered={false}
						onChange={this.callback}
					>
						<Panel className="site-collapse-custom-panel" showArrow={false} header="我的文件" key="1">
							<Tree
								checkable
								defaultExpandedKeys={["0-0-0", "0-0-1"]}
								defaultSelectedKeys={["0-0-0", "0-0-1"]}
								defaultCheckedKeys={["0-0-0", "0-0-1"]}
								onSelect={this.onSelect}
								onCheck={this.onCheck}
								treeData={this.state.treeData}
							/>
						</Panel>
						<Panel showArrow={false} header="共享文件" key="2">
							<p>{this.state.text}</p>
						</Panel>
						<Panel showArrow={false} header="最近文件" key="3">
							<p>{this.state.text}</p>
						</Panel>
						<Panel showArrow={false} header="垃圾箱" key="4">
							<p>{this.state.text}</p>
						</Panel>
					</Collapse>
				</div>
				<div className="add-files">
					<div className="add-btn">
						<PlusOutlined />
					</div>
				</div>
			</div>
		);
	}
}
export default Directory;
