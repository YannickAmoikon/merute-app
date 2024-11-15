"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useThemeSync() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [setTheme]);

    useEffect(() => {
        if (theme) {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return theme;
}