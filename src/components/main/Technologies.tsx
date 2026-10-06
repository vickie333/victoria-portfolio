import { BiLogoPostgresql } from "react-icons/bi";
import {
	SiAmazonwebservices,
	SiDjango,
	SiDocker,
	SiExpo,
	SiFlask,
	SiGithubactions,
	SiGooglecloud,
	SiKotlin,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiRedux,
	SiTypescript,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion"
import { useTranslation } from "../../context/LanguajeContext"

import { Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
	initial: { y: -10 },
	animate: {
		y: [10, - 10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse" as "reverse",
		}
	},
})
const Technologies = () => {

	const { t } = useTranslation();

	return (
		<div className="border-b border-neutral-900 pb-24 lg:mb-35">
			<motion.h2
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 100 }}
				transition={{ duration: 1.5 }}
				className="my-20 text-center text-4xl text-slate-950"
			>
				{t("technologies.title")}
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className="flex flex-wrap items-center justify-center gap-4"
			>
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<RiReactjsLine className="text-7xl text-cyan-400 hover:text-cyan-300" />
				</motion.div>
				<motion.div
					variants={iconVariants(7)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiExpo className="text-7xl text-black hover:text-slate-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiTypescript className="text-7xl text-[#3178C6] hover:text-[#4B91E2]" />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiRedux className="text-7xl text-[#764ABC] hover:text-[#9066D6]" />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiKotlin className="text-7xl text-[#7F52FF] hover:text-[#9D7BFF]" />
				</motion.div>
				<motion.div
					variants={iconVariants(8)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiNextdotjs className="text-7xl text-black hover:text-slate-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(6.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiNodedotjs className="text-7xl text-green-600 hover:text-green-500" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiPython className="text-7xl text-yellow-200 hover:text-gray-100" />
				</motion.div>
				<motion.div
					variants={iconVariants(6.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiDjango className="text-7xl text-green-950 hover:text-green-700" />
				</motion.div>
				<motion.div
					variants={iconVariants(8)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiFlask className="text-7xl text-black hover:text-slate-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(7.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<BiLogoPostgresql className="text-7xl text-cyan-700 hover:text-cyan-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(5.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiDocker className="text-7xl text-blue-400 hover:text-blue-300" />
				</motion.div>
				<motion.div
					variants={iconVariants(6.75)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiGooglecloud className="text-7xl text-[#4285F4] hover:text-[#669DF6]" />
				</motion.div>
				<motion.div
					variants={iconVariants(4.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiAmazonwebservices className="text-7xl text-[#FF9900] hover:text-[#FFB84D]" />
				</motion.div>
				<motion.div
					variants={iconVariants(7.25)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiGithubactions className="text-7xl text-[#2088FF] hover:text-[#5BA8FF]" />
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Technologies