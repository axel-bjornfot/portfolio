import styles from './Projects.module.css'

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M5 9L9 5M9 5H5.5M9 5V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

type ThumbType = 'grid' | 'bars' | 'doc' | 'orb'

interface Project {
  id: string
  slug: string
  title: string
  year: string
  description: string
  tags: string[]
  accentTag: string
  status: string
  thumb: ThumbType
  thumbLabel?: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    id: '01',
    slug: 'lattice',
    title: 'Lattice',
    year: '2026',
    description: 'A typographic design system and component library for editorial product teams. Tokens, primitives, motion — the lot.',
    tags: ['React', 'TypeScript', 'Vite'],
    accentTag: 'Storybook',
    status: 'Open source',
    thumb: 'grid',
    github: '#',
    live: '#',
  },
  {
    id: '02',
    slug: 'northwind',
    title: 'Northwind',
    year: "'25",
    description: 'Realtime analytics dashboard for logistics teams — query builder, custom widgets, and a fast streaming backend that scales horizontally.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    accentTag: 'WebSockets',
    status: 'Production',
    thumb: 'bars',
    thumbLabel: 'analytics · v3.2',
    github: '#',
    live: '#',
  },
  {
    id: '03',
    slug: 'foothold',
    title: 'Foothold',
    year: "'25",
    description: 'Markdown-first docs engine with bidirectional links, inline code execution, and a publishing workflow built for solo writers.',
    tags: ['Astro', 'SQLite', 'Rust'],
    accentTag: 'MDX',
    status: 'Side project',
    thumb: 'doc',
    github: '#',
    live: '#',
  },
  {
    id: '04',
    slug: 'halcyon',
    title: 'Halcyon',
    year: "'24",
    description: 'A spatial audio sketchpad — drag generators around a canvas, route signals visually, and export the patches as portable JSON files.',
    tags: ['Three.js', 'Web Audio', 'Svelte'],
    accentTag: 'WebGL',
    status: 'Experiment',
    thumb: 'orb',
    thumbLabel: 'audio · WebGL',
    github: '#',
    live: '#',
  },
]

function Thumb({ project, desktop }: { project: Project; desktop?: boolean }) {
  const aspectClass = desktop ? 'aspect-[16/10]' : 'aspect-[4/3]'
  const base = `relative ${aspectClass} bg-surface overflow-hidden border-b border-rule`

  if (project.thumb === 'grid') {
    return (
      <div className={`${base} ${styles.thumbGrid}`}>
        <span className="absolute top-3.5 left-4 z-[2] font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
          <span className="text-accent">{project.id}</span> / {project.title}
        </span>
        <span className="absolute top-3.5 right-4 z-[2] font-mono text-[10px] tracking-[0.2em] text-ink-dim">{project.year}</span>
        <span className={`${styles.centerNum}`}>
          {project.title[0]}<span className="text-accent">.</span>
        </span>
        <div className={styles.scan} />
        <div className={styles.thumbGlow} />
      </div>
    )
  }

  if (project.thumb === 'bars') {
    const heights = [30, 55, 80, 45, 70, 38, 60]
    return (
      <div className={`${base} ${styles.thumbBars}`}>
        <span className="absolute top-3.5 left-4 z-[2] font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
          <span className="text-accent">{project.id}</span> / {project.title}
        </span>
        <span className="absolute top-3.5 right-4 z-[2] font-mono text-[10px] tracking-[0.2em] text-ink-dim">{project.year}</span>
        <div className="absolute inset-6 grid grid-cols-7 gap-1.5 items-end">
          {heights.map((h, i) => (
            <span
              key={i}
              className={`w-full rounded-t-[2px] ${i === 2 ? 'bg-accent' : 'bg-ink-faint'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        {project.thumbLabel && (
          <span className="absolute bottom-3.5 left-4 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim">
            {project.thumbLabel}
          </span>
        )}
        <div className={styles.thumbGlow} />
      </div>
    )
  }

  if (project.thumb === 'doc') {
    return (
      <div className={`${base} ${styles.thumbDoc}`}>
        <span className="absolute top-3.5 left-4 z-[2] font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
          <span className="text-accent">{project.id}</span> / {project.title}
        </span>
        <span className="absolute top-3.5 right-4 z-[2] font-mono text-[10px] tracking-[0.2em] text-ink-dim">{project.year}</span>
        <div className="absolute top-11 left-6 right-6 bottom-6 flex flex-col gap-[9px]">
          <div className="h-2 rounded-[2px] bg-accent w-[30%]" />
          <div className="h-2 rounded-[2px] bg-ink-faint w-full" />
          <div className="h-2 rounded-[2px] bg-ink-faint w-[78%]" />
          <div className="h-2 rounded-[2px] bg-ink-faint w-[60%]" />
          <div className="h-2 rounded-[2px] bg-ink-faint w-full" />
          <div className="h-2 rounded-[2px] bg-ink-faint w-[78%]" />
        </div>
        <div className={styles.thumbGlow} />
      </div>
    )
  }

  // orb
  return (
    <div className={`${base} ${styles.thumbOrb}`}>
      <span className="absolute top-3.5 left-4 z-[2] font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
        <span className="text-accent">{project.id}</span> / {project.title}
      </span>
      <span className="absolute top-3.5 right-4 z-[2] font-mono text-[10px] tracking-[0.2em] text-ink-dim">{project.year}</span>
      <div className={styles.ring} />
      <div className={styles.orb} />
      {project.thumbLabel && (
        <span className="absolute bottom-3.5 right-4 font-mono text-[10px] tracking-[0.18em] text-ink-dim">
          {project.thumbLabel}
        </span>
      )}
      <div className={styles.thumbGlow} />
    </div>
  )
}

function ProjectCard({ project, desktop }: { project: Project; desktop?: boolean }) {
  const titleSize = desktop ? 'text-[30px]' : 'text-[26px]'
  return (
    <article className={`relative bg-surface border border-rule rounded-[18px] overflow-hidden ${styles.card}`}>
      <Thumb project={project} desktop={desktop} />
      <div className="px-[22px] pt-[22px] pb-[18px] flex flex-col gap-3.5">
        <h3 className={`flex items-baseline gap-2.5 font-display font-semibold ${titleSize} leading-[1.05] tracking-[-0.025em] text-ink`}
          style={{ fontVariationSettings: '"opsz" 32' }}
        >
          {project.title}
          <span className={styles.tick}>↗</span>
        </h3>
        <p className="font-display text-[14px] leading-[1.55] text-ink-dim">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="font-mono text-[10px] tracking-[0.06em] text-ink border border-ink-faint rounded-full px-2.5 py-[5px] bg-white/[0.02]">
              {tag}
            </span>
          ))}
          <span className="font-mono text-[10px] tracking-[0.06em] text-accent border border-accent/40 rounded-full px-2.5 py-[5px] bg-accent/[0.06]">
            {project.accentTag}
          </span>
        </div>
        <div className="mt-1 pt-4 border-t border-rule flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-dim">{project.status}</span>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className={`w-[38px] h-[38px] rounded-[10px] border border-ink-faint flex items-center justify-center text-ink-dim no-underline ${styles.iconLink}`} aria-label="GitHub">
                <GitHubIcon />
              </a>
            )}
            {project.live && (
              <a href={project.live} className={`w-[38px] h-[38px] rounded-[10px] border border-ink-faint flex items-center justify-center text-ink-dim no-underline ${styles.iconLink}`} aria-label="Live site">
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      {/* ── Desktop ≥900px ── */}
      <div className="hidden min-[900px]:block px-20 pt-20 pb-24 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-4">
          <span className="text-accent">01</span>
          <span>—</span>
          <span>Selected work</span>
        </div>
        <h1
          className={`font-display font-bold leading-[0.92] tracking-[-0.04em] text-ink mb-4 ${styles.title}`}
          style={{ fontSize: 'clamp(64px, 7vw, 80px)' }}
        >
          My work<span className="text-accent">.</span>
        </h1>
        <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim pb-7 border-b border-rule">
          <span>2024 — &apos;26</span>
          <span className="text-ink">04 projects</span>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-9">
          {projects.map(p => <ProjectCard key={p.slug} project={p} desktop />)}
        </div>
        {/* <a href="#archive" className={`mt-8 py-[18px] border-t border-b border-rule flex justify-between items-center font-mono text-[11px] tracking-[0.16em] uppercase text-ink no-underline ${styles.moreRow}`}>
          <span>↓ View archive</span>
          <span className="w-7 h-7 rounded-full border border-ink-faint flex items-center justify-center">
            <ArrowIcon />
          </span>
        </a> */}
      </div>

      {/* ── Mobile <900px ── */}
      <div className="flex min-[900px]:hidden flex-col px-[22px] pt-2 pb-14">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim mb-4">
          <span className="text-accent">01</span>
          <span>—</span>
          <span>Selected work</span>
        </div>
        <h1
          className={`font-display font-bold leading-[0.92] tracking-[-0.04em] text-ink mb-3.5 ${styles.title}`}
          style={{ fontSize: 'clamp(48px, 16vw, 56px)' }}
        >
          My work<span className="text-accent">.</span>
        </h1>
        <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim mb-7 pb-6 border-b border-rule">
          <span>2024 — &apos;26</span>
          <span className="text-ink">04 projects</span>
        </div>
        <div className="flex flex-col gap-7">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
        {/* <a href="#archive" className={`mt-8 py-[18px] border-t border-b border-rule flex justify-between items-center font-mono text-[11px] tracking-[0.16em] uppercase text-ink no-underline ${styles.moreRow}`}>
          <span>↓ View archive</span>
          <span className={`w-7 h-7 rounded-full border border-ink-faint flex items-center justify-center`}>
            <ArrowIcon />
          </span>
        </a> */}
      </div>
    </>
  )
}
