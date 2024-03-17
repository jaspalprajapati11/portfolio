import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/Card";
import "./styles/work.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
								<img
									src="./scaleupally.png"
									alt="scaleupally"
									className="work-image"
								/>
							<div className="work-title">ScaleupAlly</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">March 2022 - Sept 2022</div>
						</div>

						<div className="work">
							<img
								src="./iiitb.png"
								alt="iiitb"
								className="work-image"
							/>
							<div className="work-title">IIIT-Bangalore</div>
							<div className="work-subtitle">
								Application Programmer
							</div>
							<div className="work-duration">September 2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
