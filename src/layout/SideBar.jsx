import React from "react";
import { Avatar, Tooltip } from "antd";
import { DesktopOutlined, AliyunOutlined, ZhihuOutlined, SketchOutlined, ApartmentOutlined } from "@ant-design/icons";

// import { Link } from "react-router-dom";

export default class SideBar extends React.Component {
	//  状态的初始化一般放在构造器中
	constructor(props) {
		super(props);

		this.state = {
			menus: [
				{ name: "首页", icon: <DesktopOutlined /> },
				{ name: "菜单1", icon: <AliyunOutlined /> },
				{ name: "菜单2", icon: <ZhihuOutlined /> },
				{ name: "菜单3", icon: <SketchOutlined /> },
				{ name: "菜单4", icon: <ApartmentOutlined /> },
			],
			activeMenu: "首页",
			hoverMenu: "首页",
		};
	}
	handleMenuClick = (active) => {
		this.setState({
			activeMenu: active,
		});
	};
	render() {
		return (
			<div className="ame-layout layout-sidebar">
				<div className="ame-flex ame-logo">
					<Avatar size={60} style={{ color: "#5764ff", backgroundColor: "#fff" }}>
						Ame
					</Avatar>
				</div>
				<div className="ame-menu">
					{this.state.menus.map((data, index) => (
						<div
							key={index}
							className={
								this.state.activeMenu === data.name ? "ame-menu-item menu-actived" : "ame-menu-item"
							}
							onClick={(e) => this.handleMenuClick(data.name, e)}
						>
							<Tooltip placement="right" title={data.name}>
								<span className="menu-item">{data.icon}</span>
							</Tooltip>
						</div>
					))}
				</div>
			</div>
		);
	}
}
