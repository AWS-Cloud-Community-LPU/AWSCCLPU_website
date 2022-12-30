import { useEffect, useState } from "react";
import { Box, Center, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Appbar from "../Components/Appbar";
import Footer from "../Components/Footer";

const Blogs = () => {

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [link, setLink] = useState("");
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};
          
		fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@awscloudcommunity-lpu", requestOptions)
			.then(response => response.json())
			.then((result) => {
				console.log(result);
				setTitle(result.feed.title);
				setImage(result.feed.image);
				setLink(result.feed.link);
				setBlogs(result.items);
			})
			.catch((error) => {
				console.log("error", error);
			});
	},[]);
    
	return (
		<Box>
			<Appbar/>
			<Container maxW="container.xl" pb="20">
				<Box mt="10" display="flex">
					<Image
						borderRadius="50%"
						boxSize={["50px", "70px", "80px"]}
						objectFit='cover'
						src={image}
						alt='Dan Abramov'
					/>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<Text ml="3" fontSize={["lg", "xl", "3xl"]} color="orange.500" fontWeight="600"
							mt={["auto", "2", "3"]}>
							{title}
						</Text>
					</a>
				</Box>
				
				<Text mt="10" fontSize={["md","lg"]}>Here are the list of all the well curated blog posts written by our community members.</Text>

				{blogs &&
				<Center mt="5">
					{blogs.length === 0 ? 
						<Text fontSize="md" color="red" fontWeight="500">Nothing to show here.</Text>
						: null}
				</Center>}

				<SimpleGrid mt="8" columns={[2, 3, 4]} spacing={["15px", "20px", "24px"]}>
					{blogs &&
					<>
						{blogs.map((data, idx) => (
							<Box p="1" key={idx} boxShadow="base" borderRadius="8px" height={["200px", "190px", "270px"]} _hover={{boxShadow: "md"}}>
								<a href={data.link} target="_blank" rel="noopener noreferrer">
									<Box bg="#EDF2F7" borderTopLeftRadius="8px" borderTopRightRadius="8px" height={["130px", "150px", "200px"]}>
										<Image
											w="100%"
											height={["130px", "150px", "200px"]}
											objectFit='cover'
											src={data.thumbnail}
											borderTopLeftRadius="8px" borderTopRightRadius="8px"
										/>
									</Box>
								</a>
								<Box borderBottomLeftRadius="8px" borderBottomRightRadius="8px" height="10">
									<Text fontSize="xs" pt="2" mx="2">{data.title}</Text>
								</Box>
							</Box>
						))}
					</>}
				</SimpleGrid>
			</Container>
			<Footer/>
		</Box>
	);
};
 
export default Blogs;