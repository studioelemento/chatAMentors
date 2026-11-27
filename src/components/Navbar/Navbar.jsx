import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/img-Home/Chatmentorz.png'

const links = [['/', 'Home'], ['/products', 'Products'], ['/about', 'About'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        event.currentTarget.querySelector('.menu-toggle').focus()
      }
    }}>
      <div className="wrap header-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="ChatMentorz home" />
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className="header-links" id="site-navigation" data-open={open}>
          <nav aria-label="Main navigation">
            {links.map(([url, label]) => <NavLink key={url} end={url === '/'} to={url} onClick={() => setOpen(false)}>{label}</NavLink>)}
          </nav>
          <div className="header-actions">
            <a className="button button-plain" href="https://app.chatmentorz.com/en/login">Log in</a>
            <a className="button" href="https://app.chatmentorz.com/en/new-bot">Get started</a>
          </div>
        </div>
      </div>
    </header>
  )
}
