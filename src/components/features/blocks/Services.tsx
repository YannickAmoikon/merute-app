import React from 'react';
import {Laptop, Network, Users, BarChart2, Lightbulb, Smartphone} from 'lucide-react';

const ServiceCard = ({Icon, title, description}) => (
	<div className="p-6 bg-card border rounded-lg shadow">
		<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
			<Icon size={24}/>
		</div>
		<h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
		<p className="text-muted-foreground">{description}</p>
	</div>
);

export default function ServicesSection() {
	const services = [
		{
			Icon: Laptop,
			title: "Développement Web",
			description: "Création d'applications et de sites web modernes et réactifs adaptés à vos besoins."
		},
		{
			Icon: Network,
			title: "Consultation",
			description: "Analyse de vos besoins et conseils stratégiques pour votre entreprise."
		},
		{
			Icon: Users,
			title: "Marketing Digital",
			description: "Stratégies de marketing pour augmenter votre visibilité en ligne."
		},
		{
			Icon: BarChart2,
			title: "Support Technique",
			description: "Assistance technique pour garantir le bon fonctionnement de vos systèmes."
		},
		{
			Icon: Lightbulb,
			title: "Formation",
			description: "Formations personnalisées pour améliorer les compétences de votre équipe."
		},
		{
			Icon: Smartphone,
			title: "Développement Mobile",
			description: "Applications mobiles sur mesure pour iOS et Android."
		}
	];

	return (
		<section className="bg-background py-24">
			<div className="container mx-auto">
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-foreground mb-4">Nos Services</h2>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Découvrez comment nous pouvons vous aider à atteindre vos objectifs avec nos services personnalisés.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>
			</div>
		</section>
	);
}