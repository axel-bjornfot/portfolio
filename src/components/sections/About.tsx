import PixelAvatar from '@/src/components/ui/PixelAvatar'
import styles from './About.module.css'

const skills = [
  {
    label: 'React',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="2" fill="currentColor" />
        <ellipse cx="14" cy="14" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="14" cy="14" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 14 14)" />
        <ellipse cx="14" cy="14" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 14 14)" />
      </svg>
    ),
  },
  {
    label: 'Next.js',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <circle cx="14" cy="14" r="11.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 8h2v9.5l6-9.5h2v12h-2v-9.5l-6 9.5H9V8z" />
        <circle cx="20" cy="18.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Node.js',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M14 3L4 8v12l10 5 10-5V8L14 3z" />
        <path d="M10 11v6c0 1 .8 2 2 2s2-1 2-2v-6" />
        <path d="M16 17c.5 1 1.6 2 3 2s2.5-.8 2.5-2c0-1-.7-1.6-2.2-2-1.4-.4-2.3-.9-2.3-2 0-.9.9-1.8 2.3-1.8 1 0 1.8.4 2.2 1" />
      </svg>
    ),
  },
  {
    label: 'TypeScript',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <path d="M9 17h2v-6h2v-1.5h-6V11h2v6zm9 0c1.5 0 2.5-.6 2.5-2 0-1-.5-1.4-1.7-1.9l-.6-.3c-.6-.2-.8-.4-.8-.7 0-.3.2-.5.6-.5.4 0 .6.2.8.5l1-.7c-.4-.7-1-.9-1.8-.9-1.2 0-2 .7-2 1.6 0 1 .5 1.4 1.5 1.8l.6.3c.6.2.9.4.9.8 0 .3-.3.6-.8.6-.6 0-.9-.3-1.2-.7l-1.1.6c.4 1 1.2 1.5 2.4 1.5z" fill="#000" />
      </svg>
    ),
  },
  {
    label: 'Postgres',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="14" cy="7" rx="9" ry="3.5" />
        <path d="M5 7v7c0 2 4 3.5 9 3.5s9-1.5 9-3.5V7" />
        <path d="M5 14v7c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-7" />
      </svg>
    ),
  },
  {
    label: 'Git',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="8" cy="14" r="2.5" />
        <circle cx="20" cy="8" r="2.5" />
        <circle cx="20" cy="20" r="2.5" />
        <path d="M10.2 12.6l7.6-3.2M10.2 15.4l7.6 3.2" />
      </svg>
    ),
  },
]

function AvatarCard({ pixelSize }: { pixelSize: number }) {
  return (
    <div className="bg-bg-2 border border-rule rounded-[18px] overflow-hidden relative">
      <div
        className={`aspect-square relative flex items-center justify-center overflow-hidden ${styles.avatarFrame}`}
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 60%, rgba(0,229,255,0.12), transparent 70%), var(--bg-2)' }}
      >
        <div className="absolute top-3.5 right-3.5 z-10 font-mono text-[10px] text-accent flex items-center gap-1">
          ~/axel<span className={styles.blink} />
        </div>
        <div className="relative z-10">
          <PixelAvatar pixelSize={pixelSize} />
        </div>
        <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-ink-dim">
          <span className={styles.live} />
          Online
        </div>
        <div className="absolute bottom-3.5 right-3.5 z-10 font-mono text-[9px] tracking-[0.2em] text-ink-dim">
          v.04 · &apos;26
        </div>
      </div>
    </div>
  )
}

function SkillsGrid({ cols }: { cols: 3 | 6 }) {
  return (
    <div className="mt-7 pt-5 border-t border-rule">
      <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-[18px]">
        <span>Stack — daily drivers</span>
        <span className="text-ink">06</span>
      </div>
      <div className={`grid gap-3 ${cols === 6 ? 'grid-cols-6' : 'grid-cols-3'}`}>
        {skills.map(({ label, icon }) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-2 py-3.5 px-1.5 border border-rule rounded-xl bg-bg-2 ${styles.skill}`}
          >
            <span className={`w-8 h-8 flex items-center justify-center text-ink ${styles.skillIcon}`}>
              {icon}
            </span>
            <span className="font-mono text-[10px] tracking-[0.04em] text-ink-dim">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* ── Desktop ≥900px ── */}
      <div className="hidden min-[900px]:block px-20 pt-20 pb-24 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-[18px]">
          <span className="text-accent">02</span>
          <span>—</span>
          <span>About me</span>
        </div>

        <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start">
          {/* Left */}
          <div>
            <h1
              className={`font-display font-bold leading-[0.92] tracking-[-0.04em] text-ink mb-8 ${styles.title}`}
              style={{ fontSize: 'clamp(64px, 7vw, 88px)' }}
            >
              About<span className="text-accent">.</span>
            </h1>

            <p className="font-display text-[18px] leading-[1.55] text-ink mb-2">
              I&apos;m a software developer based in Malmö, building{' '}
              <em className="not-italic text-accent font-medium">fast, opinionated</em> products for the web — interfaces, design systems, and developer tools.
            </p>
            <p className="font-display text-[18px] leading-[1.55] text-ink-dim">
              Four years deep in frontend engineering, equally at home in a TypeScript monorepo or pushing pixels in Figma. I care most about building fast, opinionated products for the web.
            </p>

            <SkillsGrid cols={6} />
          </div>

          {/* Right — avatar */}
          <AvatarCard pixelSize={11} />
        </div>
      </div>

      {/* ── Mobile <900px ── */}
      <div className="flex min-[900px]:hidden flex-col px-[22px] pt-2 pb-14">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-4">
          <span className="text-accent">03</span>
          <span>—</span>
          <span>About me</span>
        </div>

        <AvatarCard pixelSize={7} />

        <h1
          className={`font-display font-bold leading-[0.92] tracking-[-0.04em] text-ink mt-8 mb-6 ${styles.title}`}
          style={{ fontSize: 'clamp(48px, 16vw, 56px)' }}
        >
          About<span className="text-accent">.</span>
        </h1>

        <p className="font-display text-[16px] leading-[1.55] text-ink mb-2">
          I&apos;m a software developer based in Malmö, building{' '}
          <em className="not-italic text-accent font-medium">fast, opinionated</em> products for the web — interfaces, design systems, and developer tools.
        </p>
        <p className="font-display text-[16px] leading-[1.55] text-ink-dim">
          Twelve years deep in frontend engineering, equally at home in a TypeScript monorepo or pushing pixels in Figma. I care most about typography, motion, and writing code that reads like prose.
        </p>

        <SkillsGrid cols={3} />
      </div>
    </>
  )
}
