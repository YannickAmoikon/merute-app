import React from 'react';
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Check} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-secondary dark:bg-black text-foreground relative">
			<div className="container mx-auto px-5 py-12">
				<div className="flex flex-wrap md:text-left text-center order-first">
					<div className="lg:w-1/2 md:w-1/2 w-full px-4">
						<h2 className="title-font font-semibold text-primary tracking-widest text-sm mb-6">NOS SERVICES</h2>
						<div className="grid grid-cols-2 gap-x-8">
							<nav className="list-none mb-10">
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/web" className="text-muted-foreground hover:text-primary">Solutions Web</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/conseil" className="text-muted-foreground hover:text-primary">Conseil Digital</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/marketing" className="text-muted-foreground hover:text-primary">Marketing Digital</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/support" className="text-muted-foreground hover:text-primary">Support 24/7</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/formation" className="text-muted-foreground hover:text-primary">Formation</Link>
								</li>
							</nav>
							<nav className="list-none mb-10">
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/mobile" className="text-muted-foreground hover:text-primary">Apps Mobiles</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/cloud" className="text-muted-foreground hover:text-primary">Cloud & DevOps</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/securite" className="text-muted-foreground hover:text-primary">Cybersécurité</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/data" className="text-muted-foreground hover:text-primary">Data Analysis</Link>
								</li>
								<li className="flex items-center space-x-2 mb-4">
									<Check size={16} className="text-primary" />
									<Link href="/services/ia" className="text-muted-foreground hover:text-primary">IA & Automatisation</Link>
								</li>
							</nav>
						</div>
					</div>

					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-semibold text-primary tracking-widest text-sm mb-6">CONTACT</h2>
						<nav className="list-none mb-10 space-y-4">
							<li>
								<a className="text-muted-foreground hover:text-primary flex items-center space-x-3">
									<MapPin size={16} className="flex-shrink-0"/>
									<span>Abidjan, Côte d'Ivoire</span>
								</a>
							</li>
							<li>
								<a className="text-muted-foreground hover:text-primary flex items-center space-x-3">
									<Phone size={16} className="flex-shrink-0"/>
									<span>+225 07 0707 0707</span>
								</a>
							</li>
							<li>
								<a className="text-muted-foreground hover:text-primary flex items-center space-x-3">
									<Mail size={16} className="flex-shrink-0"/>
									<span>contact@merute.digital</span>
								</a>
							</li>
						</nav>
					</div>

					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-semibold text-primary tracking-widest text-sm mb-6">NEWSLETTER</h2>
						<div className="space-y-4">
							<Input
								type="email"
								placeholder="Votre adresse email"
								className="w-full bg-opacity-50 rounded-sm border focus:bg-transparent shadow-sm
                                         focus:ring-2 focus:ring-primary focus:border-primary text-base outline-none
                                         py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
							<Button className="w-full rounded-sm">
								{"S'abonner"}
							</Button>
							<p className="text-muted-foreground text-sm">
								Restez informé de nos dernières actualités.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-border/10"></div>

			<div className="bg-secondary/50 dark:bg-black/50">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
					<p className="text-muted-foreground text-sm">
						© 2024 Merute Digital —
						<a
							href="https://merute.digital"
							rel="noopener noreferrer"
							className="text-primary ml-1 hover:text-primary/80"
							target="_blank"
						>
							merute.digital
						</a>
					</p>
					<div className="flex space-x-4 mt-4 sm:mt-0">
						<a href="https://facebook.com/merutedigital"
						   target="_blank"
						   rel="noopener noreferrer"
						   className="text-muted-foreground hover:text-primary transition-colors duration-200">
							<Facebook size={20}/>
						</a>
						<a href="https://instagram.com/merutedigital"
						   target="_blank"
						   rel="noopener noreferrer"
						   className="text-muted-foreground hover:text-primary transition-colors duration-200">
							<Instagram size={20}/>
						</a>
						<a href="https://linkedin.com/company/merutedigital"
						   target="_blank"
						   rel="noopener noreferrer"
						   className="text-muted-foreground hover:text-primary transition-colors duration-200">
							<Linkedin size={20}/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}