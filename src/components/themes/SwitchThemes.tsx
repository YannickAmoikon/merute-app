"use client"

import * as React from "react"
import {SunIcon, SunMoon} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"

export default function ModeToggle() {
	const {setTheme, theme} = useTheme()
	const [isMounted, setIsMounted] = React.useState(false)

	React.useEffect(() => {
		setIsMounted(true)
	}, [])

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	if (!isMounted) {
		return null // ou un indicateur de chargement
	}

	return (
		<Button
			onClick={toggleTheme}
			variant="ghost"
			className="flex items-center"
		>
			{theme === "dark" ? (
				<SunIcon size={20} className="mr-2"/>
			) : (
				<SunMoon size={20} className="mr-2"/>
			)}
			<span className="font-semibold">Thème</span>
		</Button>
	)
}
