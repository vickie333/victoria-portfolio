
import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Experiences from "./components/main/Experiencies";
import Projects from "./components/main/Projects";
import Contact from "./components/footer/Contact";
import { LanguageProvider } from "./context/LanguajeContext";
import "@fontsource/open-sans";
import Navbar from "./components/nav/Navbar";
import Technologies from "./components/main/Technologies";
import YoutubeVideos from "./components/main/YoutubeVideos";


const App = () => {
	return (
		<LanguageProvider>
			<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-violet-100 selection:text-slate-400 ">
				<div className="fixed top-0 -z-10 h-full w-full">
						<div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
				</div>
				<div className="container mx-auto px-8">
					<Navbar />
					<Hero />
					<About />
					<Technologies />
					<Experiences />
					<Projects />
					<Contact />
				</div>
			</div>
		</LanguageProvider>
	);
};

export default App;
