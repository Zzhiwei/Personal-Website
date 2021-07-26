import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const NAV_COLOR_NAME = "sticky"

export default function Navbar() {
    const [navColor, setNavColor] = useState('')
    const navColorRef = useRef(navColor)
    const [menuOpen, setMenuOpen] = useState(false)

    function _setNavColor(val) {
        navColorRef.current = val
        setNavColor(val)
    }

    function handleMenuClick(e) {
        setMenuOpen(val => !val)
    }

    useEffect(() => {
        const listener = window.addEventListener("scroll", e => {
        if (window.scrollY > 20) {
            if (!navColorRef.current) {
            _setNavColor(NAV_COLOR_NAME)
            }
        } else {
            if (navColorRef.current === NAV_COLOR_NAME) {
            _setNavColor('')
            }
        }
        })
        
        return () => {
        window.removeEventListener("scroll", listener)
        }
    }, [])


    return (
        <div className={`navbar ${navColor}`} >
            <div className="max-width">
                <div className="logo">
                    <a href="#home">MyPorfo<span>lio_</span></a>
                </div>
                <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                    <li><a onClick={handleMenuClick} href="#home">Home</a></li>
                    <li><a onClick={handleMenuClick} href="#about">About</a></li>
                    <li><a onClick={handleMenuClick} href="#skills">Skills</a></li>
                    <li><a onClick={handleMenuClick} href="#work">Work</a></li>
                    <li><a onClick={handleMenuClick} href="#contact">Contact</a></li>
                </ul>
                <div className={`menu-btn ${menuOpen ? 'active' : ''}`} onClick={handleMenuClick}>
                    <i className="fas fa-bars"></i>    
                </div>
            </div>
            
        </div>
    )
}
