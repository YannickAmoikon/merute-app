"use client"
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Button} from "@/components/ui/button";
import Services from '@/components/features/blocks/Services';
import {ChevronLeft, ChevronRight} from 'lucide-react';

const CustomArrow = ({className, style, onClick, children}) => (
	<div
		className={`${className} !w-5 !h-5 !bg-white/20 hover:!bg-white/40 !rounded-full !flex !items-center !justify-center !z-10 before:content-none transition-all duration-200 backdrop-blur-[2px]`}
		style={{...style, display: 'flex'}}
		onClick={onClick}
	>
		{children}
	</div>
);

const images = [
	"/images/home/slide1.jpg",
	"/images/home/slide2.jpg",
	"/images/home/slide3.jpg",
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
		nextArrow: (
			<CustomArrow>
				<ChevronRight className="w-3 h-3 text-gray-800"/>
			</CustomArrow>
		),
		prevArrow: (
			<CustomArrow>
				<ChevronLeft className="w-3 h-3 text-gray-800"/>
			</CustomArrow>
		),
		dotsClass: "slick-dots !bottom-2",
		customPaging: () => (
			<div className="w-1 h-1 rounded-full bg-white/30 hover:bg-white/50 transition-colors duration-200"/>
		),
	};

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					<div className="lg:w-1/2 space-y-6">
						<h1 className="text-4xl font-bold text-foreground">
							Bienvenue chez <br/> MERUTE DIGITAL ORBITAL
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
					<div className="lg:w-1/2 w-full relative group">
						<Slider {...settings}>
							{images.map((src, index) => (
								<div key={index} className="outline-none">
									<div className="relative aspect-[3/2] w-full">
										<Image
											src={src}
											alt={`Slide ${index + 1}`}
											fill
											priority={index === 0}
											className="rounded-lg object-cover"
										/>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>

				<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
					{['Innovation', 'Expertise', 'Résultats'].map((item, index) => (
						<div key={index} className="p-6 bg-card border rounded-lg shadow hover:shadow-lg transition-shadow">
							<h3 className="text-xl font-semibold mb-2 text-card-foreground">{item}</h3>
							<p className="text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>
						</div>
					))}
				</div>
				<Services/>
			</div>
		</div>
	);
}