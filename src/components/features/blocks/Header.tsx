"use client"

import React, {useState} from "react";
import {usePathname} from "next/navigation"
import Image from "next/image"
import SwitchThemes from "@/components/themes/SwitchThemes";
import Link from "next/link";
import {MapPinCheck, BriefcaseBusiness, FolderOpenDot, Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export default function Header() {
	const pathname = usePathname();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const navItems = [
		{href: "/experience", icon: BriefcaseBusiness, label: "Expérience"},
		{href: "/achievements", icon: FolderOpenDot, label: "Réalisations"},
		{href: "/location", icon: MapPinCheck, label: "Localisation"},
	];

	const closeDrawer = () => setIsDrawerOpen(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black shadow-sm">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex-shrink-0">
						<Link href="/">
							<Image
								className="h-20 w-auto dark:invert sm:h-20"
								src="/images/logo/logo.png"
								alt="MERUTE DIGITAL ORBITAL"
								width={250}
								height={60}
								priority
							/>
						</Link>
					</div>
					<nav className="hidden md:flex items-center space-x-4">
						{navItems.map((item) => (
							<Button
								key={item.href}
								variant="ghost"
								asChild
								className={cn(
									pathname === item.href && "bg-accent text-accent-foreground"
								)}
							>
								<Link href={item.href} className="flex font-semibold items-center">
									<item.icon size={20} className="mr-2"/>
									<span>{item.label}</span>
								</Link>
							</Button>
						))}
						<SwitchThemes/>
					</nav>
					<Button
						variant="ghost"
						className="md:hidden"
						onClick={() => setIsDrawerOpen(true)}
					>
						<Menu size={24}/>
					</Button>
				</div>
			</div>

			{/* Drawer pour la navigation mobile */}
			<div className={cn(
				"fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out",
				isDrawerOpen ? "translate-x-0" : "translate-x-full"
			)}>
				<div className="flex justify-end p-4">
					<Button variant="ghost" onClick={closeDrawer}>
						<X size={24}/>
					</Button>
				</div>
				<nav className="flex flex-col space-y-4 p-4">
					{navItems.map((item) => (
						<Button
							key={item.href}
							variant="ghost"
							asChild
							className="justify-start"
							onClick={closeDrawer}
						>
							<Link href={item.href} className="flex items-center">
								<item.icon size={20} className="mr-2"/>
								<span>{item.label}</span>
							</Link>
						</Button>
					))}
				</nav>
			</div>

			{/* Overlay pour fermer le drawer en cliquant à l'extérieur */}
			{isDrawerOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
					onClick={closeDrawer}
				/>
			)}
		</header>
	)
}