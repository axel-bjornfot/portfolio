import Link from 'next/link'
import MobileNav from './MobileNav'
import styles from './Header.module.css'

const navLinks = [
  { href: '#work', label: 'Work', num: '01', section: 'work' },
  { href: '/about', label: 'About', num: '02', section: 'about' },
  { href: '/contact', label: 'Contact', num: '03', section: 'contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-rule">
      {/* Desktop nav ≥900px */}
      <nav
        className="hidden min-[900px]:grid grid-cols-[1fr_auto_1fr] items-center py-6 max-w-[1600px] mx-auto px-[clamp(32px,4.5vw,64px)]"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xs tracking-[0.12em] uppercase text-ink no-underline"
        >
          <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_12px_rgba(0,229,255,0.6)]" />
          <span>AB</span>
          <span className="text-ink-faint">/</span>
          <span className="text-ink-dim">MALMÖ, SE</span>
        </Link>

        <ul className="flex gap-10 list-none justify-self-center">
          {navLinks.map(({ href, label, num, section }) => (
            <li key={section}>
              <Link
                href={href}
                data-section={section}
                className={`text-ink no-underline text-[13px] tracking-[0.04em] ${styles.navLink}`}
              >
                <span className={`text-ink-faint mr-1.5 text-[11px] ${styles.num}`}>{num}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="justify-self-end flex items-center gap-2.5 text-xs text-ink-dim tracking-[0.08em] uppercase">
          <span className={`w-1.5 h-1.5 bg-green-400 rounded-full ${styles.pulse}`} />
          <span>Available · &#39;26</span>
        </div>
      </nav>

      {/* Mobile nav <900px */}
      <MobileNav />
    </header>
  )
}
