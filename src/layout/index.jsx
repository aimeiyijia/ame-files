import PageView from "@/layout/PageView";
import SideBar from "@/layout/SideBar";

import React, { Component, Fragment } from "react";
import { renderRoutes } from "react-router-config";

import "./layout.scss";

export default class Layout extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		const { routes } = this.props.route;
		return (
			<Fragment>
				<SideBar></SideBar>
				<PageView>{renderRoutes(routes)}</PageView>
			</Fragment>
		);
	}
}
