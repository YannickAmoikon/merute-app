"use client";
import React, { useState } from "react";
import Image from "next/image";


//
// // Pour les applications mobiles
// image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
//
// // Pour les sites web
// image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop"
//
// // Pour les applications web
// image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
//
// // Pour les dashboards
// image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
//
// // Pour les innovations
// image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
//
// // Image par défaut
// const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"

const categories = [
	{ id: 'all', label: 'Tous les Projets' },
	{ id: 'mobile', label: 'Applications Mobiles' },
	{ id: 'web', label: 'Applications Web' },
	{ id: 'site', label: 'Sites Web' },
	{ id: 'innovation', label: 'Innovations' },
	{ id: 'dashboard', label: 'Dashboards' }
];

const projects = [
	{
		title: "Application Mobile Orange Money",
		subtitle: "Application Mobile",
		description: "Développement d'une application mobile de transfert d'argent et de paiement.",
		icon: "mobile",
		category: "mobile",
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
	},
	{
		title: "Plateforme E-commerce MTN",
		subtitle: "Site Web",
		description: "Création d'une plateforme e-commerce complète pour la vente de produits.",
		icon: "web",
		category: "site",
		image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop"	},
	{
		title: "Système de Gestion MOOV",
		subtitle: "Application Web",
		description: "Développement d'un système de gestion interne pour MOOV Africa.",
		icon: "app",
		category: "web",
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"	},
	{
		title: "Application Wave",
		subtitle: "Application Mobile",
		description: "Contribution au développement de fonctionnalités pour Wave Money.",
		icon: "mobile",
		category: "mobile",
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
	},
	{
		title: "Plateforme de Formation",
		subtitle: "Application Web",
		description: "Création d'une plateforme de formation en ligne interactive.",
		icon: "app",
		category: "web",
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"	},
	{
		title: "Solution IoT",
		subtitle: "Innovation",
		description: "Développement d'une solution IoT pour la gestion intelligente.",
		icon: "innovation",
		category: "innovation",
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
	},
	{
		title: "CRM Entreprise",
		subtitle: "Application Web",
		description: "Système de gestion de la relation client personnalisé.",
		icon: "app",
		category: "web",
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
	},
	{
		title: "Application Bancaire",
		subtitle: "Application Mobile",
		description: "Application mobile sécurisée pour les services bancaires.",
		icon: "mobile",
		category: "mobile",
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
	},
	{
		title: "Plateforme Analytics",
		subtitle: "Dashboard",
		description: "Dashboard analytique pour la visualisation des données.",
		icon: "dashboard",
		category: "dashboard",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
	},
	{
		title: "Système de Facturation",
		subtitle: "Application Web",
		description: "Solution complète de facturation et gestion financière.",
		icon: "app",
		category: "web",
		image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
	}
];

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"

const ProjectIcon = ({ type }: { type: string }) => {
	switch (type) {
		case 'mobile':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
				</svg>
			);
		case 'web':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
				</svg>
			);
		case 'innovation':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			);
		case 'dashboard':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
				</svg>
			);
		default:
			return (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			);
	}
};

export default function Achievements() {
	const [activeCategory, setActiveCategory] = useState('all');

	const filteredProjects = projects.filter(project =>
		activeCategory === 'all' || project.category === activeCategory
	);

	return (
		<section className="bg-secondary dark:bg-black py-8">
			<div className="container mx-auto px-4">
				<div className="mb-8 animate-fade-in">
					<h2 className="text-3xl font-bold text-foreground mb-2">
						Nos Réalisations
					</h2>
					<div className="w-60 h-1 bg-primary mb-4 rounded-full"></div>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Découvrez nos projets réalisés et l'impact que nous avons eu sur la transformation digitale de nos clients.
					</p>
				</div>

				{/* Tabs de filtrage */}
				<div className="flex flex-wrap gap-2 mb-8">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200
                                ${activeCategory === category.id
								? 'bg-primary text-white dark:text-black/90'
								: 'bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground'}`}
						>
							{category.label}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project, index) => (
						<div
							key={index}
							className="group relative bg-white/5 cursor-pointer overflow-hidden
                                     dark:bg-white/[0.02] border-2 border-border/90 rounded-md
                                     hover:border-primary/30 transition-all duration-300
                                     hover:shadow-lg hover:shadow-primary/5
                                     hover:-translate-y-1 animate-fade-in"
							style={{
								animationDelay: `${index * 100}ms`
							}}
						>
							<div className="absolute inset-0 z-0">
								<Image
									src={project.image || DEFAULT_IMAGE}
									alt={project.title}
									fill
									className="object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-300"
								/>
							</div>

							<div className="relative z-10 p-6">
								<div className="flex flex-col items-center text-center">
									<div className="text-primary/70 group-hover:text-primary transition-colors duration-300">
										<ProjectIcon type={project.icon} />
									</div>
									<h3 className="mt-4 text-base font-semibold text-foreground">
										{project.title}
									</h3>
									<p className="mt-2 text-xs font-medium text-primary/80">
										{project.subtitle}
									</p>
									<p className="mt-3 text-sm text-muted-foreground line-clamp-2">
										{project.description}
									</p>
									<button className="mt-4 rounded-sm px-4 py-1.5 text-xs font-medium text-white
                                                     bg-primary/80 hover:bg-primary dark:hover:bg-white
                                                     dark:text-black/90 transition-colors duration-200">
										Voir le projet
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}