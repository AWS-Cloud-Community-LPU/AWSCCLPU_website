import { Center, Container, Box, Text, Button, Image } from "@chakra-ui/react";
import Steve from "../../Assets/3D/steve.png";

const Resources = () => {
	return (
		<Container mt="10rem" maxW="container.lg">
			<Center>
				<Text fontSize="4xl" fontWeight="600" color="orange.500">
                Eager to learn about AWS but dont know where to start?
				</Text>
			</Center>

			<Box display="flex" flexWrap="wrap-reverse" w="100%">
				<Box w={["100%", "100%", "50%"]}>
					<Image
						boxSize='100%'
						objectFit='cover'
						src={Steve}
					/>
				</Box>
                
				<Box w={["100%", "100%", "50%"]}>
					<Text fontSize="xl" textAlign="center" mt={["16", "20", "10rem"]}>
                    Dont worry AWS has provided documentation of each of its service.You can find it by
					</Text>
					<Center>
						<Button mt="10" w="10rem" colorScheme='orange' size='lg' variant='outline'>
                        Clicking here
						</Button>
					</Center>
				</Box>
			</Box>
		</Container>
	);
};
 
export default Resources;