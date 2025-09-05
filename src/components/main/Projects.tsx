import getColor from "../../utils/getColor";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "../../context/LanguajeContext";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../types/projects";

import cosineImg from "../../assets/projects/cosine-similarity.jpg";
import criptoImg from "../../assets/projects/cripto.jpg";
import odooImg from "../../assets/projects/odoo.png";
import analizeImg from "../../assets/projects/analizing-selling.png";
import degreesImg from "../../assets/projects/six-degrees.jpg";
import lemonImg from "../../assets/projects/littlelemon.jpg";

interface ImageMap {
	[key: string]: string;
}

const imageMap: ImageMap = {
	"Text Similarity Finder": cosineImg,
	"Crypto-Backtesting": criptoImg,
	"London-Project": odooImg,
	"Analyzing Selling Price of Used Cars": analizeImg,
	"Six Degrees of Separation": degreesImg,
	"Little-Lemon-Restaurant": lemonImg,
};

// Normaliza quitando caracteres no alfanuméricos y pasando a minúsculas
const normalize = (s: string | undefined) =>
	s ? s.replace(/[^a-z0-9]/gi, "").toLowerCase() : "";

const normalizedImageMap: ImageMap = Object.fromEntries(
	Object.entries(imageMap).map(([k, v]) => [normalize(k), v])
);

const getImageForTitle = (title?: string) => {
	const nTitle = normalize(title);

	// 1) coincidencia exacta
	if (normalizedImageMap[nTitle]) return normalizedImageMap[nTitle];

	// 2) si alguna clave normalizada es substring del título normalizado (maneja títulos largos / descriptores)
	for (const [normKey, img] of Object.entries(normalizedImageMap)) {
		if (nTitle.includes(normKey)) return img;
	}

	// 3) fallback
	return "/placeholder.svg";
};

const Projects: React.FC = () => {
	const { t } = useTranslation();

	const projects = t("projects");

	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl text-slate-900"
			>
				{t("project_name")}
			</motion.h2>
			<div>
				{Array.isArray(projects) &&
					projects.map((project: projects, index) => (
						<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5 }}
								className="w-full lg:w-1/4 sm:w-1/2"
							>
								<img
									src={getImageForTitle(project.title)}
									alt={project.title}
									className="mb-6 rounded pr-16 w-full h-full lg:h-auto sm:mb-8"
								/>
							</motion.div>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
								className="w-full max-w-xl lg:w-3/4 mt-6 md:mt-0 sm:mb-8"
							>
								<div className="flex items-center mb-2 sm:mt-4">
									<span className="font-semibold hover:text-gray-500 text-slate-900">
										{project.title}
									</span>
									{project.url && (
										<a
											href={project.url}
											className="ml-2 hover:text-gray-500"
											target="_blank"
											rel="noopener noreferrer"
											title="Open in new tab"
										>
											<FaExternalLinkAlt
												className="text-blue-500 hover:text-blue-700"
												style={{ fontSize: 15 }}
											/>
										</a>
									)}
									{project.code && (
										<a
											href={project.code}
											className="ml-2 hover:text-gray-500"
											target="_blank"
											rel="noopener noreferrer"
											title="Open in new tab"
										>
											<FaGithub
												className="text-blue-500 hover:text-blue-700"
												style={{ fontSize: 15 }}
											/>
										</a>
									)}
								</div>
								<p className="mb-4 text-slate-900">{project.description}</p>

								{project.technologies?.map((tech: string, index: number) => (
									<span
										key={index}
										className={`mr-2 rounded px-2 py-1 text-sm font-medium ${getColor(
											tech
										)}`}
									>
										{tech}
									</span>
								))}
							</motion.div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Projects;
