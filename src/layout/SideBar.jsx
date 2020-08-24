import React from "react";
import { withRouter } from "react-router-dom";
import { Avatar, Tooltip } from "antd";
import { FileSearchOutlined, BookOutlined, HddOutlined, CommentOutlined, TeamOutlined } from "@ant-design/icons";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";
class SideBar extends React.Component {
	//  状态的初始化一般放在构造器中
	constructor(props) {
		super(props);
		const appName = "ame";
		this.state = {
			menus: [
				{ id: "files", name: "文件", icon: <FileSearchOutlined />, path: `/${appName}/files` },
				{ id: "memo", name: "备忘录", icon: <BookOutlined />, path: `/${appName}/memo` },
				{ id: "project", name: "项目", icon: <HddOutlined />, path: `/${appName}/project` },
				{ id: "chat", name: "聊天", icon: <CommentOutlined />, path: `/${appName}/chat` },
				{ id: "users", name: "用户", icon: <TeamOutlined />, path: `/${appName}/users` },
			],
			activeMenu: "file",
		};
	}
	componentDidMount() {
		console.log(this.props.location.pathname);
		const currentPath = this.props.location.pathname;
		this.setState({
			activeMenu: currentPath.split("/")[2],
		});
	}
	handleMenuClick = (active) => {
		const { id, path } = active;
		const pathname = path;
		this.props.history.push({
			pathname,
		});
		this.setState({
			activeMenu: id,
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
					<Avatar size={48} style={{ color: "#5764ff", backgroundColor: "#fff" }}>
						Ame
					</Avatar>
				</div>
				<AmeScrollbars
					className="ame-scrollbar" // This will activate auto hide
				>
					<div className="ame-menu">
						{this.state.menus.map((data, index) => (
							<div
								key={index}
								className={
									this.state.activeMenu === data.id ? "ame-menu-item menu-actived" : "ame-menu-item"
								}
								onClick={(e) => this.handleMenuClick(data, e)}
							>
								<Tooltip placement="left" title={data.name}>
									<span className="menu-item">{data.icon}</span>
								</Tooltip>
							</div>
						))}
					</div>
				</AmeScrollbars>
				<div className="ame-flex ame-person">
					<Avatar size={40} src={require("@/assets/logo.png")} />
				</div>
			</div>
		);
	}
}

export default withRouter(SideBar);
