import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

const images = [
	"/images/home/slide1.jpg",
	"/images/home/slide2.jpg",
	"/images/home/slide3.jpg",
];

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

const imageVariants = {
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
	const [imageLoaded, setImageLoaded] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dotsClass: "slick-dots !bottom-4",
		customPaging: () => (
			<div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-200" />
		),
	};

	if (!isMounted) {
		return null;
	}
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
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
				variants={imageVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="aspect-[3/2] w-full bg-gray-200 rounded-lg overflow-hidden">
					<Slider {...settings}>
						{images.map((src, index) => (
							<div key={index} className="outline-none">
								<div className="relative aspect-[3/2] w-full">
									<Image
										src={src}
										alt={`Slide ${index + 1}`}
										fill
										priority={index === 0}
										className={`rounded-lg object-cover transition-opacity duration-300 ${
											imageLoaded ? "opacity-100" : "opacity-0"
										}`}
										onLoad={() => setImageLoaded(true)}
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</motion.div>
		</div>
	);
}
