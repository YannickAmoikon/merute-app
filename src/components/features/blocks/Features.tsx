import { motion } from "framer-motion";

const cardVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5
		}
	},
	hover: {
		scale: 1.02,
		transition: {
			duration: 0.2
		}
	}
};

const features = [
	{
		title: "Innovation",
		description:
			"Des solutions créatives à la pointe de la technologie pour répondre aux défis numériques actuels et futurs.",
	},
	{
		title: "Expertise",
		description:
			"Une équipe expérimentée en développement mobile, web, marketing digital, etc... pour concrétiser vos projets.",
	},
	{
		title: "Résultats",
		description:
			"Des objectifs mesurables et un accompagnement personnalisé pour maximiser votre succès digital.",
	},
];

export default function Features() {
	return (
		<div className="mt-16 grid bg-secondary dark:bg-black grid-cols-1 md:grid-cols-3 gap-8 my-12">
			{features.map((feature, index) => (
				<motion.div
					key={index}
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
					viewport={{ once: true }}
					className="group relative p-6 bg-secondary dark:bg-black cursor-pointer shadow-sm border-2 border-border/50 rounded-md transition-all duration-300 hover:border-primary/50"
				>
					<h3 className="text-xl font-semibold mb-2 text-foreground">
						{feature.title}
					</h3>
					<p className="text-muted-foreground leading-relaxed">
						{feature.description}
					</p>
				</motion.div>
			))}
		</div>
	);
}