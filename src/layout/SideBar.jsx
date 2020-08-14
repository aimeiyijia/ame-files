import React from "react";
import { withRouter } from "react-router-dom";
import { Avatar, Tooltip } from "antd";
import { DesktopOutlined, BookOutlined, HddOutlined, CommentOutlined, TeamOutlined } from "@ant-design/icons";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";

class SideBar extends React.Component {
	//  状态的初始化一般放在构造器中
	constructor(props) {
		super(props);

		this.state = {
			menus: [
				{ name: "首页", icon: <DesktopOutlined />, path: "/dashboard" },
				{ name: "备忘录", icon: <BookOutlined />, path: "/memo" },
				{ name: "项目", icon: <HddOutlined />, path: "/project" },
				{ name: "聊天", icon: <CommentOutlined />, path: "/chat" },
				{ name: "用户", icon: <TeamOutlined />, path: "/users" },
			],
			activeMenu: "首页",
		};
	}
	handleMenuClick = (active) => {
		const { name, path } = active;
		this.props.history.push({
			pathname: path,
		});
		this.setState({
			activeMenu: name,
		});
	};

	renderThumb({ style, ...props }) {
		const thumbStyle = {
			backgroundColor: `rgb(255,255,255,0.2)`,
			borderRadius: `4px`,
		};
		return <div style={{ ...style, ...thumbStyle }} {...props} />;
	}
	render() {
		return (
			<div className="ame-layout layout-sidebar">
				<div className="ame-flex ame-logo">
					<Avatar size={60} style={{ color: "#5764ff", backgroundColor: "#fff" }}>
						Ame
					</Avatar>
				</div>
				<AmeScrollbars
					className="scroll-bar" // This will activate auto hide
				>
					<div className="ame-menu">
						{this.state.menus.map((data, index) => (
							<div
								key={index}
								className={
									this.state.activeMenu === data.name ? "ame-menu-item menu-actived" : "ame-menu-item"
								}
								onClick={(e) => this.handleMenuClick(data, e)}
							>
								<Tooltip placement="right" title={data.name}>
									<span className="menu-item">{data.icon}</span>
								</Tooltip>
							</div>
						))}
					</div>
				</AmeScrollbars>
			</div>
		);
	}
}

export default withRouter(SideBar);
