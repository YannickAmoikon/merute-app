"use client";

import React from 'react';
import {
	Laptop,
	Network,
	Users,
	BarChart2,
	Lightbulb,
	Smartphone,
	Cloud,
	Shield,
	LineChart,
	Bot
} from 'lucide-react';
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

interface Service {
	Icon: React.ComponentType<any>;
	title: string;
	description: string;
}

const services: Service[] = [
	{
		Icon: Laptop,
		title: "Solutions Web",
		description: "• Applications web\n• Développement full-stack\n• Architecture évolutive\n• Expérience utilisateur"
	},
	{
		Icon: Network,
		title: "Conseil Digital",
		description: "• Transformation\n• Audit & planification\n• Solutions sur mesure\n• Accompagnement"
	},
	{
		Icon: Users,
		title: "Marketing Digital",
		description: "• Acquisition client\n• Optimisation SEO/SEA\n• Marketing automation\n• Croissance accéléré"
	},
	{
		Icon: BarChart2,
		title: "Support 24/7",
		description: "• Monitoring continu\n• Maintenance préventive\n• Support réactif\n• Garantie de performance"
	},
	{
		Icon: Lightbulb,
		title: "Formation",
		description: "• Formation développement\n• DevOps & Agilité\n• Workshops d'innovation\n• Accompagnement"
	},
	{
		Icon: Smartphone,
		title: "Apps Mobiles",
		description: "• Applications natives\n• React Native & Flutter\n• Design UX mobile\n• Publication stores"
	},
	{
		Icon: Cloud,
		title: "Cloud & DevOps",
		description: "• AWS/Azure/GCP\n• Micro-services\n• Infrastructure scalable\n• Monitoring avancé"
	},
	{
		Icon: Shield,
		title: "Cybersécurité",
		description: "• Audit de sécurité\n• Tests d'intrusion\n• Conformité RGPD\n• Formation sécurité"
	},
	{
		Icon: LineChart,
		title: "Data Analysis",
		description: "• Analyse de données\n• Business Intelligence\n• Tableaux de bord\n• Insights stratégiques"
	},
	{
		Icon: Bot,
		title: "IA & Automatisation",
		description: "• Solutions IA sur mesure\n• Process automatisés\n• Chatbots intelligents\n• Machine Learning"
	}
];
const ServiceCard = ({ service }: { service: Service }) => (
	<motion.div
		variants={serviceVariants}
		whileHover="hover"
		className="group relative p-6 bg-secondary dark:bg-black cursor-pointer shadow-sm border-2 border-border/50 rounded-md transition-all duration-300 hover:border-primary/50"
	>
		<div className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-black/90 dark:bg-white text-white dark:text-black/90 mb-4 transition-colors group-hover:bg-primary">
			<service.Icon size={32} />
		</div>
		<h3 className="text-lg font-semibold mb-3 text-foreground">
			{service.title}
		</h3>
		<p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
			{service.description}
		</p>
	</motion.div>
);
export default function ServicesSection() {
	return (
		<section className="bg-secondary dark:bg-black py-24">
			<div className="container mx-auto px-4">
				<motion.div
					className="mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold text-foreground mb-2">
						Nos Services
					</h2>
					<div className="w-48 h-1 bg-primary mb-4 rounded-full" />
					<p className="text-lg text-muted-foreground max-w-2xl">
						Explorez notre gamme complète de services numériques conçus pour propulser votre entreprise.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</motion.div>
			</div>
		</section>
	);
}