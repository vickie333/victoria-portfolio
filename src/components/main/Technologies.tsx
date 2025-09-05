import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiOdoo } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import {motion} from "framer-motion"
import { useTranslation } from "../../context/LanguajeContext"	

const iconVariants = (duration: number) => ({
  initial: {y: -10 },
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

  const {t} = useTranslation();

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
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiPython className="text-7xl hover:text-gray-100 text-yellow-200" />
				</motion.div>
				<motion.div
					variants={iconVariants(7.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiOdoo className="text-7xl text-cyan-700 hover:text-cyan-600" />
				</motion.div>

				<motion.div
					variants={iconVariants(6)}
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
					variants={iconVariants(6.75)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<DiRedis className="text-7xl text-red-600 hover:text-red-500" />
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
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-900 p-4"
				>
					<SiMongodb className="text-7xl text-green-500 hover:text-green-400" />
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Technologies