import React from 'react';
import {Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Footer() {
	return (
		<footer className="bg-secondary dark:bg-black text-foreground">
			<div className="container mx-auto px-5 py-12">
				<div className="flex flex-wrap md:text-left text-center order-first">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-semibold text-primary tracking-widest text-sm mb-3">SERVICES</h2>
						<nav className="list-none mb-10">
							<li><a className="text-muted-foreground hover:text-primary">Développement Web</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Consultation</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Marketing Digital</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Développement Mobile</a></li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-semibold text-primary tracking-widest text-sm mb-3">À PROPOS</h2>
						<nav className="list-none mb-10">
							<li><a className="text-muted-foreground hover:text-primary">Notre Équipe</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Nos Valeurs</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Carrières</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Contactez-nous</a></li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-semibold text-primary tracking-widest text-sm mb-3">RESSOURCES</h2>
						<nav className="list-none mb-10">
							<li><a className="text-muted-foreground hover:text-primary">Blog</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Études de Cas</a></li>
							<li><a className="text-muted-foreground hover:text-primary">FAQ</a></li>
							<li><a className="text-muted-foreground hover:text-primary">Support</a></li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-semibold text-primary tracking-widest text-sm mb-3">NEWSLETTER</h2>
						<div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
							<div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
								<Input
									type="email"
									id="footer-field"
									placeholder="Votre adresse email"
									className="w-full bg-opacity-50 rounded-sm border focus:bg-transparent shadow-sm focus:ring focus:ring-primary focus:border-primary text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<Button className="lg:mt-2 xl:mt-0 rounded-sm flex-shrink-0">{"S'abonner"}</Button>
						</div>
						<p className="text-muted-foreground text-sm mt-2 md:text-left text-center">
							Restez informé de nos dernières actualités et offres.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-secondary/50 dark:bg-black/50">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-muted-foreground text-sm text-center sm:text-left">
						© 2024 Merute Digital Orbital —
						<a
							href="https://twitter.com/merutedigital"
							rel="noopener noreferrer"
							className="text-primary ml-1"
							target="_blank"
						>
							@merutedigital
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-muted-foreground hover:text-primary">
              <Facebook size={20}/>
            </a>
            <a className="ml-3 text-muted-foreground hover:text-primary">
              <Twitter size={20}/>
            </a>
            <a className="ml-3 text-muted-foreground hover:text-primary">
              <Instagram size={20}/>
            </a>
            <a className="ml-3 text-muted-foreground hover:text-primary">
              <Linkedin size={20}/>
            </a>
          </span>
				</div>
			</div>
		</footer>
	);
}