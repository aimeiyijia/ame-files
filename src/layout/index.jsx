import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PageView from "./PageView";
import SideBar from "./SideBar";
import "./layout.scss";

const Router = () => (
	<HashRouter>
		<Switch>
			<Route path="/">
				<SideBar></SideBar>
				<Route path="/ame">
					<PageView></PageView>
				</Route>
				<Redirect to="/dashboard"></Redirect>
			</Route>
		</Switch>
	</HashRouter>
);

export default Router;
