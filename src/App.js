import "./App.css";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
// import Contact from "./Components/Contact/ContactForm";

function App() {
	return (
		<Box>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/blogs" element={<Blogs />} />
				</Routes>
			</Router>
		</Box>
	);
}

export default App;
