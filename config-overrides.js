const path = require("path");
const {
	override,
	addWebpackAlias,
	addLessLoader,
} = require("customize-cra");

function resolve(dir) {
	return path.join(__dirname, ".", dir);
}

module.exports = override(
	addWebpackAlias({
		["@"]: resolve("src"),
	}),
	addLessLoader({
		lessOptions: {
			modifyVars: {
				"@primary-color": "#5764ff",
			},
			javascriptEnabled: true,
		},
	})
);
