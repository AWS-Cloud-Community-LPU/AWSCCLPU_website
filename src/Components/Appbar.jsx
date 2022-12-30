import { Box, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Appbar = () => {
	return (
		<Box boxShadow="sm" py="4">
			<Container maxW="container.xl" display="flex">
				<Text>AWSCCLPU</Text>
				<Box display={["none", "none", "block"]} ml="auto">
					<Box display="flex">
						<Link to="/">
							<Text ml="4">Home</Text>
						</Link>

						<Link to="/blogs">
							<Text ml="4">Blogs</Text>
						</Link>

						<Link to="/events">
							<Text ml="4">Events</Text>
						</Link>

						<Link to="/about">
							<Text ml="4">About Us</Text>
						</Link>

						<Link to="/contact">
							<Text ml="4">Contact Us</Text>
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
 
export default Appbar;