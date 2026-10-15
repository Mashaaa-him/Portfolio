import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, X } from 'lucide-react'

function Navbar() {
    const [open, setOpen] =useState(false)
    const close = () => setOpen(false)
    
    return (
        <nav className="navbar">
            <button
             className="nav-toggle"
             onClick={() => setOpen(!open)}
             aria-label={open ? 'Close menu' : 'Open menu'}
             aria-expanded={open}
             aria-controls="nav-links"
             >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
                <NavLink to='/' end onClick={close}>Home</NavLink>
                <NavLink to='/about' onClick={close}>About</NavLink>
                <NavLink to='/skills' onClick={close}>Skills</NavLink>
                <NavLink to='/persona' onClick={close}>Persona</NavLink>
                <NavLink to="/projects" onClick={close}>Projects</NavLink>
            </div>
        </nav>
    )
}

export default Navbar