import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import INFO from "../../data/User";
import {
	faGithub,
	faInstagram,
	faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<a
						href={INFO.socials.twitter}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faXTwitter}
							className="homepage-social-icon"
						/>
					</a>
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faGithub}
							className="homepage-social-icon"
						/>
					</a>
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faInstagram}
							className="homepage-social-icon"
						/>
					</a>
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faMailBulk}
							className="homepage-social-icon"
						/>
					</a>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						Made with Love ❤️
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
