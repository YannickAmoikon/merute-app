"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation"
import Image from "next/image"
import SwitchThemes from "@/components/themes/SwitchThemes";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Header() {
	const pathname = usePathname();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { theme } = useTheme();

	const navItems = [
		{ href: "/", label: "Accueil" },
		{ href: "/achievements", label: "Réalisations" },
		{ href: "/location", label: "Localisation" },
	];

	const closeDrawer = () => setIsDrawerOpen(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b shadow-sm bg-secondary dark:bg-black">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/">
							<Image
								className="h-24 w-auto dark:invert sm:h-24"
								src="/images/logo/logo.png"
								alt="MERUTE DIGITAL ORBITAL"
								width={250}
								height={60}
								priority
							/>
						</Link>
					</div>

					{/* Navigation Desktop */}
					<nav className="hidden md:flex items-center gap-1">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"relative px-3 py-2 upp rounded-none group",
									"hover:text-foreground/80 transition-colors",
									pathname === item.href ? "text-foreground" : "text-foreground/60"
								)}
							>
                <span className="flex items-center font-semibold">
                  {item.label}
                </span>
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
							</Link>
						))}
						<div className="h-6 w-px bg-border mx-2" />
						<SwitchThemes />
					</nav>

					{/* Bouton Menu Mobile */}
					<Button
						variant="ghost"
						className="md:hidden"
						onClick={() => setIsDrawerOpen(true)}
					>
						<Menu size={24} />
					</Button>
				</div>
			</div>

			{/* Drawer Navigation Mobile */}
			<div className={cn(
				"fixed inset-y-0 right-0 z-50 w-64 shadow-lg transform transition-transform duration-300 ease-in-out",
				theme === 'dark' ? 'dark bg-black' : 'bg-secondary',
				isDrawerOpen ? "translate-x-0" : "translate-x-full"
			)}>
				{/* Bouton Fermeture */}
				<div className="flex justify-end p-4">
					<Button variant="ghost" onClick={closeDrawer}>
						<X size={24} />
					</Button>
				</div>

				{/* Navigation Mobile */}
				<nav className="flex flex-col space-y-2 p-4">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"flex items-center px-4 py-2 rounded-md transition-colors",
								"hover:bg-accent hover:text-accent-foreground",
								pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground/60"
							)}
							onClick={closeDrawer}
						>
							<span className="font-semibold">{item.label}</span>
						</Link>
					))}
					<div className="h-px w-full bg-border my-2" />
					<div className="px-4">
						<SwitchThemes />
					</div>
				</nav>
			</div>

			{/* Overlay Mobile */}
			{isDrawerOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
					onClick={closeDrawer}
				/>
			)}
		</header>
	);
}