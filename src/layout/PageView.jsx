import React, { Component } from "react";

class PageView extends Component {
	render() {
		return <div className="ame-layout layout-pageview">{this.props.children}</div>;
	}
}
export default PageView;
