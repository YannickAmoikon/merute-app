import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut"
		}
	}
};

const videoVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut"
		}
	}
};

export default function Hero() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className="flex flex-col lg:flex-row items-center my-12 justify-between gap-12">
			<motion.div 
				className="lg:w-1/2 space-y-6"
				variants={heroVariants}
				initial="hidden"
				animate="visible"
			>
				<h1 className="text-4xl font-bold text-foreground">
					Bienvenue chez <br /> MERUTE DIGITAL ORBITAL
				</h1>
				<p className="text-lg text-muted-foreground">
					Nous sommes spécialisés dans la création de solutions digitales
					innovantes pour propulser votre entreprise vers de nouveaux horizons.
				</p>
				<div className="flex space-x-4">
					<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
						Nos services
					</Button>
					<Button variant="outline">Contactez-nous</Button>
				</div>
			</motion.div>

			<motion.div 
				className="lg:w-1/2 w-full relative group"
				variants={videoVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-muted relative">
					<iframe
						className="absolute inset-0 w-full h-full rounded-lg"
						src="https://www.youtube.com/embed/f02mOEt11OQ?autoplay=1&mute=1&controls=0&loop=1&playlist=f02mOEt11OQ&showinfo=0&rel=0&modestbranding=1"
						title="Technology Background Video"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
					<div className="absolute inset-0 bg-background/10 pointer-events-none" />
				</div>
			</motion.div>
		</div>
	);
}
