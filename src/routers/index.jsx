import React from "react";
import { Redirect } from "react-router";
import Layout from "@/layout/index.jsx";
import Dashboard from "@/views/dashboard/dashboard";

const routes = [
	{
		path: "/ame",
		component: Layout,
		routes: [{ path: "/ame/dashboard", component: Dashboard }],
	},
];

export default routes;
