import React from "react";
import { Redirect } from "react-router";
import Layout from "@/layout/index.jsx";
import Dashboard from "@/views/dashboard/dashboard";
import Project from "@/views/project/project";

const routes = [
	{
		path: "/ame",
		component: Layout,
		routes: [
			{ path: "/ame/dashboard", component: Dashboard },
			{ path: "/ame/project", component: Project },
		],
	},
];

export default routes;
