import Link from 'next/link'
import styles from './Contact.module.css'

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
)

const ArrowUpIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
    <path d="M5 8V2M5 2L2 5M5 2L8 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Contact() {
  return (
    <>
      {/* ── Desktop ≥900px ── */}
      <div className="hidden min-[900px]:flex flex-col">
        <section className="flex-1 px-24 pt-[120px] pb-20 grid grid-cols-[1.4fr_1fr] gap-16 items-end max-w-[1600px] mx-auto w-full">

          {/* Left — headline */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-6">
              <span>Get in touch</span>
            </div>

            <h1
              className={`font-display font-bold leading-[0.9] tracking-[-0.045em] text-ink ${styles.headline}`}
              style={{ fontSize: 'clamp(72px, 9vw, 120px)' }}
            >
              Let&apos;s work <em className="font-medium not-italic">together</em>
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-8 font-display text-[20px] leading-[1.5] text-ink-dim max-w-[480px]">
              <span className={styles.liveDot} aria-hidden />
              Open to new opportunities and interesting projects in 2026.
            </p>
          </div>

          {/* Right — CTA */}
          <div className="flex flex-col items-start gap-7">
            <Link
              href="mailto:axelbjornfot@gmail.com"
              className={`inline-flex items-center gap-3 px-7 py-5 no-underline text-bg bg-accent rounded-[14px] font-mono text-[18px] font-semibold tracking-[0.02em] ${styles.emailCta}`}
            >
              <span>axelbjornfot@gmail.com</span>
              <span className="w-7 h-7 rounded-full bg-bg text-accent flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim">
              <span className="text-ink">↳</span> Replies within 24h
            </div>

            <div className="flex gap-4 items-center mt-2">
              <a href="https://github.com/axel-bjornfot" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className={`w-14 h-14 rounded-[14px] border border-ink-faint bg-bg-2 text-ink flex items-center justify-center no-underline ${styles.social}`}>
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/axel-bjornfot" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className={`w-14 h-14 rounded-[14px] border border-ink-faint bg-bg-2 text-ink flex items-center justify-center no-underline ${styles.social}`}>
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </section>

        <footer className="px-24 py-6 border-t border-rule flex justify-between items-center font-mono text-[11px] tracking-[0.18em] uppercase text-ink-dim max-w-[1600px] mx-auto w-full">
          <span>© 2026 Axel Björnfot</span>
          <span>Malmö — Remote</span>
          <a href="#top" className={`text-ink-dim no-underline flex items-center gap-2 ${styles.topLink}`}>
            Back to top
            <ArrowUpIcon />
          </a>
        </footer>
      </div>

      {/* ── Mobile <900px ── */}
      <div className="flex min-[900px]:hidden flex-col min-h-[calc(100vh-73px)] px-[22px] pt-4 pb-8">
        <section className="flex-1 flex flex-col items-center text-center pt-4">

          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-9">
            <span>Get in touch</span>
          </div>

          <h1
            className={`font-display font-bold leading-[0.92] tracking-[-0.045em] text-ink ${styles.headline}`}
            style={{ fontSize: 'clamp(56px, 18vw, 80px)' }}
          >
            Let&apos;s<br />work<br />together<span className="text-accent">.</span>
          </h1>

          <p className="mt-7 font-display text-[16px] leading-[1.5] text-ink-dim max-w-[280px]">
            <span className={styles.liveDot} aria-hidden />
            Open to new opportunities and interesting projects in 2026.
          </p>

          <Link
            href="mailto:axelbjornfot@gmail.com"
            className={`mt-11 inline-flex items-center gap-3 px-6 py-[18px] no-underline text-bg bg-accent rounded-[14px] font-mono text-[15px] font-semibold tracking-[0.02em] ${styles.emailCta}`}
          >
            <span>axelbjornfot@gmail.com</span>
            <span className="w-6 h-6 rounded-full bg-bg text-accent flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>

          <div className="mt-3.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim">
            <span className="text-ink">↳</span> Replies within 24h
          </div>

          <div className="flex gap-4 items-center mt-14">
            <a href="https://github.com/axel-bjornfot" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className={`w-14 h-14 rounded-[14px] border border-ink-faint bg-bg-2 text-ink flex items-center justify-center no-underline ${styles.social}`}>
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/axel-bjornfot" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className={`w-14 h-14 rounded-[14px] border border-ink-faint bg-bg-2 text-ink flex items-center justify-center no-underline ${styles.social}`}>
              <LinkedInIcon />
            </a>
          </div>

          <div className="flex-1 min-h-8" />
        </section>

        <footer className="pt-[18px] border-t border-rule flex justify-between items-center font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim">
          <span>© 2026 Axel Björnfot</span>
          <a href="#top" className={`text-ink-dim no-underline flex items-center gap-1.5 ${styles.topLink}`}>
            Top
            <ArrowUpIcon />
          </a>
        </footer>
      </div>
    </>
  )
}
