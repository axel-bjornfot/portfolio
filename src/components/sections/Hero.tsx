import Link from 'next/link'
import styles from './Hero.module.css'

const marqueeItems = [
  'Selected Work', 'Frontend Engineering', 'Design Systems',
  'Interactive Prototypes', 'Type-driven Interfaces',
]

export default function Hero() {
  return (
    <>
      {/* ── Desktop ≥900px ── */}
      <div className={`hidden min-[900px]:block w-full ${styles.pageBg}`}>
        <section
          className={`relative px-[clamp(32px,4.5vw,64px)] py-[clamp(72px,8vw,120px)] pb-[clamp(80px,10vw,140px)] overflow-hidden ${styles.hero}`}
        >
          <div className="grid grid-cols-[80px_1fr_80px] gap-10 relative">

            {/* Left rail — vertical caption */}
            <div className={`text-[11px] tracking-[0.3em] uppercase text-ink-dim h-fit mt-10 flex items-center gap-6 ${styles.railLeft}`}>
              <span>Portfolio</span>
              <span className={styles.railBar} />
              <span>v.04 — 2026</span>
            </div>

            {/* Main content */}
            <div className="px-2">

              {/* Eyebrow */}
              <div className="flex items-center gap-3.5 text-xs tracking-[0.18em] uppercase text-ink-dim mb-14">
                <span className="w-12 h-px bg-accent flex-shrink-0" />
                <span>Software Developer · Independent</span>
                <span className="text-ink-faint ml-auto">© MMXXVI</span>
              </div>

              {/* Display name */}
              <h1 className={`font-serif font-normal leading-[0.86] tracking-[-0.04em] text-ink mb-2 relative ${styles.displayName}`}>
                <span className={styles.nameDecor}>
                  <span className={styles.nameDecorNum}><em>17</em>/projects</span>
                  <span>shipped this year</span>
                </span>
                <span className="block">Axel</span>
                <span className={`block italic pl-[clamp(80px,12vw,180px)]`}>
                  Björnfot<span className="text-accent not-italic">.</span>
                </span>
              </h1>

              {/* Meta bar */}
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 mt-[72px] py-6 border-t border-b border-rule">
                <div className="text-[13px] tracking-[0.18em] uppercase text-ink">
                  Engineer <span className="text-accent">×</span> Designer <span className="text-accent">×</span> Builder
                </div>
                <div className={`font-serif italic text-lg text-ink-dim text-center ${styles.pron}`}>
                  ˈbjœːɳˌfuːt
                </div>
                <div className="text-xs tracking-[0.12em] uppercase text-ink-dim">
                  Est. 2014 — Sthlm ↔ Remote
                </div>
              </div>

              {/* Tagline + CTA */}
              <div className="grid grid-cols-[1.2fr_1fr] gap-20 mt-16 items-end">
                <p className={`font-serif leading-[1.15] tracking-[-0.01em] text-ink max-w-[560px] text-[clamp(28px,2.8vw,38px)]`}>
                  Building <em className="text-accent italic">fast, opinionated</em> things for the
                  web — interfaces, tools, and the occasional weekend experiment
                  <span className={styles.cursor} />
                </p>

                <div className="flex flex-col gap-5 items-start">
                  <Link href="#work" className={styles.cta}>
                    <span>See my work</span>
                    <span className={styles.ctaArrow} />
                  </Link>
                  <Link href="mailto:axelbjornfot@gmail.com" className={styles.ctaSecondary}>
                    or email me directly →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right rail */}
            <div className="flex flex-col items-end justify-between gap-[200px]">
              <div className="text-[11px] text-ink-dim tracking-[0.2em] text-right leading-[1.8]">
                <div>N <strong className="text-ink font-medium">59.33°</strong></div>
                <div>E <strong className="text-ink font-medium">18.06°</strong></div>
              </div>
              <div className="text-[11px] text-ink-dim tracking-[0.2em] text-right leading-[1.8]">
                <div>SCROLL</div>
                <div><strong className="text-ink font-medium">↓ 04</strong></div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="mt-[140px] border-t border-b border-rule overflow-hidden">
            <div className={`flex gap-16 py-[22px] whitespace-nowrap w-max ${styles.marqueeTrack}`}>
              {[0, 1].map((i) => (
                <span key={i} className="inline-flex items-center gap-16 font-serif text-[32px] text-ink-dim">
                  {marqueeItems.map((item, j) => (
                    <span key={j} className="inline-flex items-center gap-16">
                      {item}
                      <span className="text-accent font-mono text-base">✦</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Scroll hint */}
        <div className="flex justify-between items-center px-[clamp(32px,4.5vw,64px)] pt-7 pb-16 text-[11px] tracking-[0.2em] uppercase text-ink-dim">
          <span>Next — 01 / Selected Projects</span>
          <span className={styles.scrollArrowDown} />
          <span>2026 — Index</span>
        </div>
      </div>

      {/* ── Mobile <900px ── */}
      <div className={`flex min-[900px]:hidden flex-col min-h-screen w-full overflow-x-hidden px-[22px] pt-6 pb-8 ${styles.mPageBg}`}>
        <section className="flex-1 flex flex-col pt-6">

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 pb-[22px] border-b border-rule">
            {([
              ['No.', <><span key="acc" className="text-accent">04</span> / 2026</>],
              ['Role', 'Engineer'],
              ['Based', 'Malmö'],
              ['Status', <><span key="dot" className="text-accent">●</span> Available</>],
            ] as [string, React.ReactNode][]).map(([k, v]) => (
              <div key={k}>
                <div className="text-[9px] tracking-[0.22em] uppercase text-ink-dim mb-1 font-mono">{k}</div>
                <div className="text-xs text-ink font-mono">{v}</div>
              </div>
            ))}
          </div>

          {/* Name */}
          <h1
            className={`font-display font-bold leading-[0.92] tracking-[-0.04em] text-ink mt-8 ${styles.mName}`}
            style={{ fontSize: 'clamp(56px, 18vw, 96px)' }}
          >
            <span className="block text-ink-dim font-medium">Axel</span>
            <span className={`block ${styles.mNameLast}`}>Björnfot</span>
          </h1>

          {/* Tagline */}
          <p className="mt-[22px] font-display font-normal text-[18px] leading-[1.4] tracking-[-0.01em] text-ink max-w-[320px]">
            Building <span className="text-accent border-b border-accent pb-px">opinionated</span>,
            fast things for the&nbsp;web.
          </p>

          <div className="flex-1 min-h-6" />

          {/* CTA */}
          <Link
            href="#work"
            className="mt-8 flex items-center justify-between text-ink no-underline"
          >
            <span className="font-display font-medium text-2xl tracking-[-0.02em]">See my work</span>
            <span className="w-[60px] h-[60px] rounded-full bg-accent text-bg flex items-center justify-center shadow-[0_0_28px_rgba(0,229,255,0.55)]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10H15M15 10L10 5M15 10L10 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          {/* Footer row */}
          <div className="mt-[22px] pt-[18px] border-t border-rule flex justify-between items-center font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim">
            <span>Next — Projects</span>
            <span className="text-accent">↓ 01 / 06</span>
          </div>
        </section>
      </div>
    </>
  )
}
