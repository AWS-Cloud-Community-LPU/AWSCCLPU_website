import { useRef, useState } from "react";
import { Box, Button, Container, Heading, Input, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const ContactForm = () => {
	const toast = useToast();
    
	const [btnText, setBtnText] = useState("Submit");
    
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setBtnText("Sending...");
		const myHeaders = new Headers();
		myHeaders.append("", "");
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			"name": nameRef.current.value,
			"email": emailRef.current.value,
			"message": messageRef.current.value
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("http://localhost:5000/api/v1/messages/save", requestOptions)
			.then(response => response.json())
			.then((result) => {
				console.log(result);
				setBtnText("Sent");
				toast({
					title: "Success.",
					description: "You message was sent successfully.",
					status: "success",
					position: "top",
					duration: 9000,
					isClosable: true,
				});
			})
			.catch((error) => {
				console.log("error", error);
				setBtnText("Submit");
				toast({
					title: "Failure.",
					description: "Failed to send. Please try again.",
					status: "error",
					position: "top",
					duration: 9000,
					isClosable: true,
				});
			});
	};

	return (
		<Box>
			<Container>
				<Heading pt="2" pl="3" mb="5" color="orange.500" fontSize="2xl">
                        Send a message
				</Heading>
				<Box mx="3">
					<form onSubmit={handleSubmit}>
						<Input ref={nameRef} w="100%" type="text" placeholder="Full name" required/>
						<Input ref={emailRef} mt="5" type="email" placeholder="Email" required/>
						<Textarea ref={messageRef} mt="5" placeholder="Your text here" required/>
						<Button type="submit" mb="10" mt="5" w="100%" colorScheme="orange">
							{btnText}
						</Button>
					</form>
				</Box>
			</Container>
		</Box>
	);
};
 
export default ContactForm;