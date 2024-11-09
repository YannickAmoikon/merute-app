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
		scale: 1.03,
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
			"Une équipe expérimentée en développement web, marketing digital, etc... pour concrétiser vos projets.",
	},
	{
		title: "Résultats",
		description:
			"Des objectifs mesurables et un accompagnement personnalisé pour maximiser votre succès digital.",
	},
];

export default function Features() {
	return (
		<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
			{features.map((feature, index) => (
				<motion.div
					key={index}
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
					viewport={{ once: true }}
					className="p-6 bg-card border rounded-lg shadow"
				>
					<h3 className="text-xl font-semibold mb-2 text-card-foreground">
						{feature.title}
					</h3>
					<p className="text-muted-foreground">
						{feature.description}
					</p>
				</motion.div>
			))}
		</div>
	);
}
