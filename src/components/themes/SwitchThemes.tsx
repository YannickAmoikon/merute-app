"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function SwitchThemes() {
	const { theme, setTheme } = useTheme()

	return (
		<div className="relative group px-3 py-2">
			<button
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				className="flex items-center font-semibold text-foreground/60 hover:text-foreground/80 transition-colors"
			>
				<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</button>
			<span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
		</div>
	)
}