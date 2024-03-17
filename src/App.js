import { Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga4";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
// import About from "./pages/about";
// import Projects from "./pages/projects";
// import Articles from "./pages/articles";
// import ReadArticle from "./pages/readArticle";
// import Contact from "./pages/contact";
// import Notfound from "./pages/404";

// import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import ReadArticle from "./pages/ReadArticle";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/projects" element={<Projects/>} />
				<Route path="/articles" element={<Articles/>} />
				<Route path="/article/:slug" element={<ReadArticle/>} />
				<Route path="/contact" element={<Contact/>} />
				{/* <Route path="*" element={<Notfound />} /> */}
			</Routes>
		</div>
	);
}

export default App;
