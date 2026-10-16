import { useState,useEffect } from "react";
import {Sun, Moon} from "lucide-react";

function ThemeToggle() {
    const [theme, setTheme] = useState(
        () => document.documentElement.dataset.theme || 'dark'
    )


useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
        localStorage.setItem('theme', theme)
    } catch {}
}, [theme])

const next = theme === 'dark' ? 'light' : 'dark'

return (
    <button
    className="theme-toggle"
    onClick={() => setTheme(next)}
    aria-label={`Switch to ${next} mode`}
    title={theme === 'dark' ? 'let there be light' : 'back to the void'}
    >
        {theme === 'dark' ? <Sun size={20}/> : <Moon size={20}/>}
    </button>
)
}
 export default ThemeToggle
