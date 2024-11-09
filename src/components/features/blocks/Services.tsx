import React from 'react';
import {Laptop, Network, Users, BarChart2, Lightbulb, Smartphone, Cloud, Shield} from 'lucide-react';
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15
		}
	}
};

const serviceVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
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

const ServiceCard = ({Icon, title, description}: {
	Icon: React.ComponentType<any>,
	title: string,
	description: string
}) => (
	<div
		className="p-6 bg-card border rounded-lg cursor-pointer shadow-sm transition-shadow duration-700 transform hover:shadow-xl">
		<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
			<Icon size={32}/>
		</div>
		<h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
		<p className="text-muted-foreground">{description}</p>
	</div>
);

export default function ServicesSection() {
	const services = [
		{
			Icon: Laptop,
			title: "Solutions Web Innovantes",
			description: "Développement d'applications web haute performance avec les dernières technologies (React, Node.js, Next.js). Architecture évolutive et expérience utilisateur optimale."
		},
		{
			Icon: Network,
			title: "Conseil Stratégique Digital",
			description: "Accompagnement personnalisé dans votre transformation numérique. Audit, planification et mise en œuvre de solutions adaptées à vos enjeux business."
		},
		{
			Icon: Users,
			title: "Marketing & Growth Hacking",
			description: "Stratégies d'acquisition client innovantes, optimisation SEO/SEA, et marketing automation pour maximiser votre ROI et accélérer votre croissance."
		},
		{
			Icon: BarChart2,
			title: "Support & Maintenance Proactive",
			description: "Monitoring 24/7, maintenance préventive et support réactif pour garantir la disponibilité et les performances de vos systèmes."
		},
		{
			Icon: Lightbulb,
			title: "Formation & Innovation",
			description: "Programmes de formation sur mesure en développement, DevOps et méthodologies agiles. Workshops d'innovation et accompagnement au changement."
		},
		{
			Icon: Smartphone,
			title: "Apps Mobile Native & Cross-Platform",
			description: "Création d'applications mobiles performantes avec React Native ou Flutter. De la conception UX à la publication sur les stores."
		},
		{
			Icon: Cloud,
			title: "Architecture Cloud Native",
			description: "Déploiement et optimisation sur AWS/Azure/GCP. Solutions containerisées, micro-services et infrastructures auto-scalables avec monitoring avancé."
		},
		{
			Icon: Shield,
			title: "Cybersécurité & Conformité",
			description: "Protection de vos actifs numériques: audit de sécurité, tests d'intrusion, mise en conformité RGPD et formations à la cybersécurité."
		}
	]

	return (
		<section className="bg-background py-24">
			<div className="container mx-auto">
				<motion.div 
					className="mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold text-foreground mb-2">Nos Services</h2>
					<div className="w-48 h-1 bg-primary mb-4 rounded-full"></div>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Explorez notre gamme complète de services numériques conçus pour propulser votre entreprise.
					</p>
				</motion.div>

				<motion.div 
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={serviceVariants}
							whileHover="hover"
							className="p-6 bg-card border rounded-lg"
						>
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
								<service.Icon size={32}/>
							</div>
							<h3 className="text-xl font-semibold mb-2 text-card-foreground">
								{service.title}
							</h3>
							<p className="text-muted-foreground">
								{service.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}