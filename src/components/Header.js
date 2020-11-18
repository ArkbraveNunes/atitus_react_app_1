import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return(
        <header id='header'>
            <div className='inner'>
                <Link to='/' className='logo'>
                    <p className='navbar-brand logo_h'>
                    </p>
                </Link>
                <nav id='nav'>
                    <Link to='/'>Home</Link>
                    <Link to='/tutorial'>Monte Seu Cluster</Link>
                    <Link to='/future/cloud'>Futuro de Cloud Computing</Link>
                </nav>
                <a href='#navPanel' className='navPanelToggle'><span className='fa fa-bars'></span></a>
            </div>
        </header>
    )
}