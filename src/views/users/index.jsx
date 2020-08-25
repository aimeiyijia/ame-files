import React from "react";
import { Row, Col, Input, Table, Button } from "antd";
import {
	SearchOutlined,
	UserOutlined,
	AntDesignOutlined,
	TwitterOutlined,
	YoutubeOutlined,
	MoreOutlined,
} from "@ant-design/icons";
import "./index.scss";
const columns = [
	{
		title: "Name",
		dataIndex: "name",
	},
	{
		title: "Age",
		dataIndex: "age",
	},
	{
		title: "Address",
		dataIndex: "address",
	},
	{
		title: "Action",
		key: "action",
		render: (text, record) => (
			<span>
				<a href="#">删除</a>
			</span>
		),
	},
];

const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`,
	});
}
export default class Users extends React.Component {
	state = {
		selectedRowKeys: [], // Check here to configure the default column
	};
	onSelectChange = (selectedRowKeys) => {
		console.log("selectedRowKeys changed: ", selectedRowKeys);
		this.setState({ selectedRowKeys });
	};
	render() {
		const { selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
			hideDefaultSelections: true,
			selections: [
				{
					key: "all-data",
					text: "Select All Data",
					onSelect: () => {
						this.setState({
							selectedRowKeys: [...Array(46).keys()], // 0...45
						});
					},
				},
				{
					key: "odd",
					text: "Select Odd Row",
					onSelect: (changableRowKeys) => {
						let newSelectedRowKeys = [];
						newSelectedRowKeys = changableRowKeys.filter((key, index) => {
							if (index % 2 !== 0) {
								return false;
							}
							return true;
						});
						this.setState({ selectedRowKeys: newSelectedRowKeys });
					},
				},
				{
					key: "even",
					text: "Select Even Row",
					onSelect: (changableRowKeys) => {
						let newSelectedRowKeys = [];
						newSelectedRowKeys = changableRowKeys.filter((key, index) => {
							if (index % 2 !== 0) {
								return true;
							}
							return false;
						});
						this.setState({ selectedRowKeys: newSelectedRowKeys });
					},
				},
			],
			onSelection: this.onSelection,
		};
		return (
			<div className="ame-project">
				<div className="search">
					<Input size="large" placeholder="搜索关键字" prefix={<SearchOutlined />} />
				</div>
				<div className="userTable">
					<Button type="primary" style={{ marginBottom: "6px" }}>
						<SearchOutlined type="right" />
						新增
					</Button>
					<Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: 'calc(100vh - 240px)' }} />
				</div>
			</div>
		);
	}
}
