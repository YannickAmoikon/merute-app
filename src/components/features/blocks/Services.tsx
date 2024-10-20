import React from 'react';
import {Button} from "@/components/ui/button";

const ServiceCard = ({icon, title, description}) => (
	<div className="p-6 bg-card rounded-lg shadow">
		<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
			{icon}
		</div>
		<h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
		<p className="text-muted-foreground">{description}</p>
	</div>
);

export default function ServicesSection() {
	const services = [
		{
			icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								 className="w-6 h-6" viewBox="0 0 24 24">
				<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
			</svg>,
			title: "Développement Web",
			description: "Création d'applications et de sites  web modernes et réactifs adaptés à vos besoins."
		},
		{
			icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								 className="w-6 h-6" viewBox="0 0 24 24">
				<circle cx="6" cy="6" r="3"></circle>
				<circle cx="6" cy="18" r="3"></circle>
				<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
			</svg>,
			title: "Consultation",
			description: "Analyse de vos besoins et conseils stratégiques pour votre entreprise."
		},
		{
			icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								 className="w-6 h-6" viewBox="0 0 24 24">
				<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
				<circle cx="12" cy="7" r="4"></circle>
			</svg>,
			title: "Marketing Digital",
			description: "Stratégies de marketing pour augmenter votre visibilité en ligne."
		},
		{
			icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								 className="w-6 h-6" viewBox="0 0 24 24">
				<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
			</svg>,
			title: "Support Technique",
			description: "Assistance technique pour garantir le bon fonctionnement de vos systèmes."
		},
		{
			icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								 className="w-6 h-6" viewBox="0 0 24 24">
				<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
			</svg>,
			title: "Formation",
			description: "Formations personnalisées pour améliorer les compétences de votre équipe."
		},
		{
			icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								 className="w-6 h-6" viewBox="0 0 24 24">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
			</svg>,
			title: "Développement Mobile",
			description: "Applications mobiles sur mesure pour iOS et Android."
		}
	];

	return (
		<section className="bg-background py-24">
			<div className="container mx-auto">
				<div className="mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">Nos Services</h2>
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