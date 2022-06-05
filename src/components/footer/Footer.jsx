import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyle";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Internships</FooterLink>
						<FooterLink href="#">Coding</FooterLink>
						<FooterLink href="#">Teaching</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Uttar Pradesh</FooterLink>
						<FooterLink href="#">Ahemdabad</FooterLink>
						<FooterLink href="#">Indore</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<InstagramIcon /> Instagram
						</FooterLink>
						<FooterLink href="#">
							<TwitterIcon /> Twitter
						</FooterLink>
						<FooterLink href="#">
							<YouTubeIcon /> Youtube
						</FooterLink>
					</Column>
				</Row>
			</Container>
			<h2 style={{ color: '#fff', textAlign: "center" }}>
				Login-System: &copy; Propeller, Created by Login-System {new Date().getFullYear()}
			</h2>
		</Box>
	);
};
export default Footer;