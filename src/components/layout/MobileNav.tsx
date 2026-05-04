'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const links = [
  { href: '#work', label: 'Work', num: '01', section: 'work' },
  { href: '#about', label: 'About', num: '02', section: 'about' },
  { href: '/contact', label: 'Contact', num: '03', section: 'contact' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sync = () => setActiveSection(location.hash.replace('#', ''))
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 900px)')
    const onResize = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false) }
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    document.body.classList.add('overflow-hidden')
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <>
      {/* Mobile bar */}
      <div
        className="flex min-[900px]:hidden items-center justify-between px-5 h-16"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[11px] tracking-[0.16em] uppercase text-ink no-underline font-mono"
        >
          <span className="w-[7px] h-[7px] bg-accent rounded-full shadow-[0_0_10px_rgba(0,229,255,0.55)]" />
          <span>AB</span>
          <span className="text-ink-dim tracking-[0.12em]">/ &#39;26</span>
        </Link>

        <button
          className={`flex flex-col justify-center items-end gap-1.5 w-11 h-11 bg-transparent border-0 cursor-pointer p-0 relative z-[220] ${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-drawer"
          aria-expanded={open}
        >
          <span style={{ width: 22 }} />
          <span style={{ width: 14 }} />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[rgba(5,7,12,0.6)] backdrop-blur-[4px] z-[200] ${styles.backdrop} ${open ? styles.open : ''}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-screen w-[min(86vw,380px)] bg-bg-2 border-l border-rule z-[210] flex flex-col pt-20 px-7 pb-7 ${styles.drawer} ${open ? styles.open : ''}`}
        aria-hidden={!open}
        aria-label="Mobile menu"
      >
        <div className="flex justify-between items-center pb-5 border-b border-rule text-[10px] tracking-[0.2em] uppercase text-ink-dim font-mono">
          <span>Menu</span>
          <span className="flex items-center gap-1.5 text-ink">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Available · &#39;26
          </span>
        </div>

        <ul className="list-none mt-9 flex flex-col gap-1">
          {links.map(({ href, label, num, section }) => (
            <li key={section} className="border-b border-rule">
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-baseline justify-between py-5 no-underline text-ink font-display font-medium text-[32px] tracking-[-0.02em] leading-none ${styles.drawerLink} ${activeSection === section ? styles.active : ''}`}
              >
                <span>{label}</span>
                <span className={`font-mono font-normal text-[11px] tracking-[0.2em] text-ink-faint ${styles.num}`}>{num}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-rule flex flex-col gap-3.5">
          <a
            href="mailto:axelbjornfot@gmail.com"
            className="font-mono text-xs text-ink border-b border-dashed border-ink-faint pb-1 self-start no-underline transition-colors hover:text-accent hover:border-accent"
          >
            axelbjornfot@gmail.com
          </a>
          <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
            <span>Based</span>
            <span className="text-ink">Malmö, SE</span>
          </div>
          <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
            <span>Version</span>
            <span className="text-ink">v.04 · 2026</span>
          </div>
        </div>
      </aside>
    </>
  )
}
