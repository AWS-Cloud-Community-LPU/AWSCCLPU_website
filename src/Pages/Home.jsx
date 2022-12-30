import { Box } from "@chakra-ui/react";
import Appbar from "../Components/Appbar";
import Footer from "../Components/Footer";
import Featured from "../Components/Home/Featured";
import Hero from "../Components/Home/Hero";
import Resources from "../Components/Home/Resources";

const Home = () => {
	return (
		<Box>
			<Appbar/>
			<Box mx={["2", "auto"]}>
				<Hero/>
				<Featured/>
				<Resources/>
			</Box>
			<Footer/>
		</Box>
	);
};
 
export default Home;