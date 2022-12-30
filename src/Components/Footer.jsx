import { Box, Container, SimpleGrid, Heading, Text, Image, Center, Link } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import UnderImg from "../Assets/Footer/under.png";
import Man from "../Assets/3D/man.png";
import ContactForm from "./ContactForm";

const Footer = () => {
	return (
		<Box> 
			<Container maxW="container.xl">
            
				<Center>
					<Image
						boxSize="100%"
						objectFit="cover"
						src={ UnderImg }
						alt="Segun Adebayo"
					/>
				</Center>  

				<SimpleGrid minChildWidth="300px" spacing="40px" mt="14">

					<Box height="320px">
						<VStack
							spacing={4}
							align="stretch"
						>
							<Box pt="3" pl="3" h="160px">
								<Heading mb="5" color="orange.500" fontSize="2xl">
                                Contact
								</Heading>
								<Text>
                                    E-mail:
									<br /> 
									<Link href="mailto:awscloudcommunity@email.com">
                                    awscloudcommunity.lpu@gmail.com
									</Link>
								</Text>
								<Text>
                                    Phone: 
									<Link ml="3" href="tel:8017874250">
                                    8017874250
									</Link>
								</Text>
							</Box>
							<Box pt="4" pl="3" h="160px">
								<Heading mb="5" color="orange.500" fontSize="2xl">
                                Address
								</Heading>
								<Text>
                                Jalandhar - Delhi, Grand Trunk Rd,
								</Text>
								<Text>
                                Phagwara, Punjab 144001
								</Text>
							</Box>
						</VStack>
					</Box>

					<Box height="320px">
						<ContactForm/>
					</Box>

					<Box height="320px">
						<Image
							boxSize='100%'
							objectFit='cover'
							src={Man}
						/>
					</Box>
                    
				</SimpleGrid>

				<Center mt="24" fontSize="24px">
					<Link href="https://www.linkedin.com/company/aws-cloud-community-lpu/mycompany/" color="#0077b5" mx="3" bg="gray.100" px="3.5" py="1.5" borderRadius="50%">
						<i className="fab fa-linkedin-in"></i>
					</Link>

					<Link href="https://www.youtube.com/channel/UCmnQggVDZY8ht6UYekmzQlg/featured" color="#FF0000" mx="3" bg="gray.100" px="2.5" py="1.5" borderRadius="50%">
						<i className="fab fa-youtube"></i>
					</Link>

					<Link href="https://www.instagram.com/awscloudcommunity_lpu/" color="#E1306C;" mx="3" bg="gray.100" px="3.5" py="1.5" borderRadius="50%">
						<i className="fab fa-instagram"></i>
					</Link>

					<Link href="https://www.facebook.com/AWSCloudCommunityLPU" color="#4294ff" mx="3" bg="gray.100" px="4" py="1.5" borderRadius="50%">
						<i className="fab fa-facebook-f"></i>
					</Link>   
				</Center>

			</Container>


			<Text w="100%" textAlign="center" bg="#000000" mt="5" color="#ffffff" py="4">
                &copy; AWS Cloud Community LPU
			</Text>


		</Box>
	);
};
 
export default Footer;