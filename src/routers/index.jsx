import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PageView from "@/layout/PageView";
import SideBar from "@/layout/SideBar";

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
