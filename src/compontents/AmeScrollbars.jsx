import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export default class AmeScrollbars extends Component {
	constructor(props, ...rest) {
		super(props, ...rest);
		this.state = { top: 0 };
		this.handleUpdate = this.handleUpdate.bind(this);
		this.renderThumb = this.renderThumb.bind(this);
	}

	handleUpdate(values) {
		const { top } = values;
		this.setState({ top });
	}

	renderThumb({ style, ...props }) {
		const thumbStyle = {
			backgroundColor: `rgb(255,255,255,0.2)`,
			borderRadius: `4px`,
		};
		return <div style={{ ...style, ...thumbStyle }} {...props} />;
	}

	render() {
		return (
			<Scrollbars
				autoHide
				// Hide delay in ms
				autoHideTimeout={1000}
				// Duration for hide animation in ms.
				autoHideDuration={200}
				renderThumbHorizontal={this.renderThumb}
				renderThumbVertical={this.renderThumb}
				onUpdate={this.handleUpdate}
				{...this.props}
			/>
		);
	}
}
