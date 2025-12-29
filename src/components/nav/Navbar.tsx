
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-dark.svg';
import { useTranslation } from '../../context/LanguajeContext';

const Navbar = () => {
	const { language, setLanguage } = useTranslation();
	const isEnglish = language === 'en';

	const toggleLanguage = () => {
		if (language === 'en') setLanguage('es');
		else if (language === 'es') setLanguage('pt');
		else setLanguage('en');
	};

	const getLanguageLabel = () => {
		if (language === 'en') return 'EN';
		if (language === 'es') return 'ES';
		return 'PT';
	};

	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex items-center flex-shrink-0">
				<img src={logo} alt="logo" className="mx-2 w-12 h-12" />
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a
					className="transition-colors duration-200 hover:text-slate-900 text-slate-500"
					href="https://github.com/vickie333/"
					target="_blank"
					rel="noopener noreferrer"
					title="Github"
				>
					<FaGithub />
				</a>
				<motion.button
					onClick={toggleLanguage}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="flex items-center justify-center w-10 h-10 rounded-full  hover:text-white-600 transition-colors duration-200"
				>
					<AnimatePresence mode="wait">
						<motion.span
							key={language}
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="text-base font-medium hover:text-slate-900 text-slate-500"
						>
							{getLanguageLabel()}
						</motion.span>
					</AnimatePresence>
				</motion.button>
			</div>
		</nav>
	);
};

export default Navbar;