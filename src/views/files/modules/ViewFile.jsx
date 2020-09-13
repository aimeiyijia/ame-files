import React from "react";
import AmeScrollbars from "@/compontents/AmeScrollbars.jsx";
import video from "@/assets/testFiles/video.mp4";

// 左侧-目录区
class ViewFile extends React.Component {
	constructor(props) {
		super(props);
		console.log(video);
	}
	render() {
		return (
			<div className="ame-file-view">
				<video src={video}></video>
			</div>
		);
	}
}
export default ViewFile;
