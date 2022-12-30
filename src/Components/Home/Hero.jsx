import { Box, Container, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeroImg from "../../Assets/Home/hug.jpg";

const Hero = () => {
	return (
		<Container maxW="container.xl">
			<Box mt={["3", "10", "20"]} w="100%" display="flex" flexWrap="wrap">
				<Box w={["100%", "100%", "60%"]}>
					<Box mt="6">
						<Text color="#000000" fontSize={["lg", "3xl", "2xl"]} fontWeight="500">
                            Hi, we are 👋
						</Text>

						<Text my="3" color="#ffffff" fontSize={["55px", "5xl", "5xl"]} fontWeight="900"
							bgGradient="linear(to-l, #FC575E, #F7B42C)" bgClip="text" lineHeight={["60px"]}>
                            AWS Cloud Community LPU.
						</Text>

						<Text color="#000000" fontSize={["lg", "3xl", "3xl"]} maxW={["100%", "100%", "80%"]} fontWeight="600" mt={["3", "auto"]}>
                            A community of esthusiatic students with keen interest in cloud and devops.
						</Text>

						<Text color="#A1A1AA" maxW="lg" mt="5" fontSize={["md", "lg", "lg"]}>
                            We conducts events, community classes to 
                            promote tech and amazon aws technologies. 
                            We love to learn share and implement.
						</Text>

					</Box>

					<Box mt="10">
						<Link to="/members">
							<Button w="9rem" mr="5" colorScheme='orange' variant='solid' size='lg'>
                                Read more
							</Button>
						</Link>
						<Link to="/contact">
							<Button w="9rem" colorScheme='orange' variant='outline' size='lg'>
                                Get in touch
							</Button>
						</Link>
					</Box>
				</Box>

				<Box w={["100%", "100%", "40%"]}>
					<Image ml="auto" mt={["12", "12", "0"]} boxSize='110%'
						objectFit="cover" src={HeroImg} />
				</Box>
			</Box>
		</Container>
	);
};
 
export default Hero;