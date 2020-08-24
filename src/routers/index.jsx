import Layout from "@/layout/index.jsx";
import Files from "@/views/files/index";
import Project from "@/views/project/index";

const routes = [
	{
		path: "/ame",
		component: Layout,
		routes: [
			{ path: "/ame/files", component: Files },
			{ path: "/ame/project", component: Project },
		],
	},
];

export default routes;
