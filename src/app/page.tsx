"use client"

import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button} from "@/components/ui/button";

const images = [
	"/images/logo/logo.png",
	"/images/logo/logo.png",
	"/images/logo/logo.png",
];

export default function HomeContent() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					<div className="lg:w-1/2 space-y-6">
						<h1 className="text-4xl font-bold text-foreground">
							Bienvenue chez MERUTE DIGITAL ORBITAL
						</h1>
						<p className="text-lg text-muted-foreground">
							Nous sommes spécialisés dans la création de solutions digitales innovantes pour propulser votre entreprise
							vers de nouveaux horizons.
						</p>
						<div className="flex space-x-4">
							<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
								Nos services
							</Button>
							<Button variant="outline">
								Contactez-nous
							</Button>
						</div>
					</div>
					<div className="lg:w-1/2 w-full">
						<Slider {...settings}>
							{images.map((src, index) => (
								<div key={index} className="outline-none">
									<Image
										src={src}
										alt={`Slide ${index + 1}`}
										width={600}
										height={400}
										objectFit="cover"
										className="rounded-lg"
									/>
								</div>
							))}
						</Slider>
					</div>
				</div>

				<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
					{['Innovation', 'Expertise', 'Résultats'].map((item, index) => (
						<div key={index} className="p-6 bg-card rounded-lg shadow">
							<h3 className="text-xl font-semibold mb-2 text-card-foreground">{item}</h3>
							<p className="text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}