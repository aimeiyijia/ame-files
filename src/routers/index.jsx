import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PageView from "@/layout/PageView";
import SideBar from "@/layout/SideBar";
import Dashboard from "@/views/dashboard/Dashboard";

const Router = () => (
	<HashRouter>
		<Switch>
			<Route path="/">
				<SideBar></SideBar>
				<Route path="/ame" component={PageView}>
					<Dashboard path="/dashboard"></Dashboard>
				</Route>
				<Redirect to="/ame/dashboard"></Redirect>
			</Route>
		</Switch>
	</HashRouter>
);

export default Router;
