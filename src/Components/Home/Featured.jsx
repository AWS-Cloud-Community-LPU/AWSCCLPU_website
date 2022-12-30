import { Container, Box, Text, Center } from "@chakra-ui/react";

const Featured = () => {
	return (
		<Container mt="15rem" maxW="container.lg">
			<Box mt={["3", "10", "20"]} w="100%" display="flex" flexWrap="wrap">
				<Box w={["100%", "100%", "50%"]}>
					<Text fontSize="3xl" color="orange.500" fontWeight="500">
                        What is cloud computing ?
					</Text>
					<Text maxW="md" mt="10" mb="10">
                    Cloud computing is the delivery of online services 
                    (such as servers, databases, software) to users. 
                    With the help of cloud computing, storing data on 
                    local machines is not required. It helps you access 
                    data from a remote server. Moreover, it is also 
                    used to store and access data from anywhere across 
                    the world.
					</Text>
                    
				</Box>
				<Box w={["100%", "100%", "50%"]}>
					<Center>
						<iframe width="560" height="300" src="https://www.youtube.com/embed/mxT233EdY5c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</Center>
				</Box>
			</Box>

			<Box mt={["14", "10", "24"]} w="100%" display="flex" flexWrap="wrap-reverse">
				<Box w={["100%", "100%", "50%"]}>
					<Center>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/a9__D53WsUs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</Center>
				</Box>
				<Box w={["100%", "100%", "50%"]}>
					<Text fontSize="3xl" ml={["auto", "auto", "20"]} color="orange.500" fontWeight="500">
                        What is AWS ?
					</Text>
					<Text maxW="lg" mt="10" ml={["auto", "auto", "20"]} mb="10">
                    Amazon web service is an online platform that provides scalable 
                    and cost-effective cloud computing solutions. AWS is a broadly 
                    adopted cloud platform that offers several on-demand operations 
                    like compute power, database storage, content delivery, etc., 
                    to help corporates scale and grow.
					</Text>
				</Box>
			</Box>

			<Box mt={["14", "18", "24"]}>
				<Text fontSize="3xl" color="orange.500" fontWeight="500">
                    AWS re:Invent 2022 | Amazon Web Services
				</Text>
				<Text mt="8">
                For 10 years, the global cloud community has come together at 
                re:Invent to meet, get inspired, and rethink what is possible
				</Text>
				<Box my="10">
					<iframe width="100%" height="315" src="https://www.youtube.com/embed/Xus8C2s5K9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</Box>
				<Box>
					<Text>
                    Chief Executive Officer of Amazon Web Services, delivers his AWS re:Invent 2022 keynote, featuring forward-thinking builders who are transforming industries and even our future, powered by AWS. 
                    He highlights innovations in data, security, infrastructure, and specialized solutions that are helping customers achieve their goals faster, take advantage of untapped potential, and create a 
                    better future with AWS. 
					</Text>
				</Box>
			</Box>
		</Container>
	);
};
 
export default Featured;