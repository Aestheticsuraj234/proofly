"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
    const isDarkMode = theme === "dark"
  return (
    <div>
      <Button
        variant="brandSecondary"
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      >
        {isDarkMode ? <Sun /> : <Moon />}
      </Button>
    </div>
  )
}

export default ThemeToggle