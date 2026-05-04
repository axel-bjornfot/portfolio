'use client'

const ART = [
  "......................",
  "......................",
  "..........CCCC........",
  ".........CBBBBC.......",
  "........CBHHBBBC......",
  ".......KBHHHHBBK......",
  "......KBBHHHHBBBK.....",
  ".....KBBSSSSSSBBK.....",
  "....CKBSSSSSSSSBKC....",
  "....CKSSSSSSSSSSKC....",
  "....CKSGGGSSGGGSKC....",
  "....CKSGCEGSGCEGSKC...",
  ".....KSGGGSSGGGSK.....",
  "......SSSSSSSSSS......",
  "......SSDDMMDDSS......",
  ".......SDDDDDDS.......",
  "........SSSSSS........",
  "........TTTTTT........",
  ".......TUTTUTTT.......",
  "......TTUTTTUTTT......",
  "......TTTTTTTTTT......",
  "......................",
]

const PALETTE: Record<string, string> = {
  B: '#1a1410', H: '#2a2018', S: '#e8c39c', D: '#b48560',
  M: '#7a3a2a', T: '#0a0e16', U: '#1a2238', G: '#0a0e16',
  C: '#00d9ff', W: '#ffffff', E: '#0a0e16', K: '#2a2f3a',
}

export default function PixelAvatar({ pixelSize = 7 }: { pixelSize?: number }) {
  const cols = 22
  const size = pixelSize * cols

  return (
    <div
      style={{ width: size, height: size, position: 'relative', imageRendering: 'pixelated' }}
    >
      {ART.flatMap((row, y) =>
        row.split('').map((ch, x) => {
          if (ch === '.') return null
          const color = PALETTE[ch] ?? '#fff'
          return (
            <i
              key={`${y}-${x}`}
              style={{
                position: 'absolute',
                left: `${(x / cols) * 100}%`,
                top: `${(y / cols) * 100}%`,
                width: `${100 / cols}%`,
                height: `${100 / cols}%`,
                background: color,
                boxShadow: ch === 'C' ? '0 0 4px rgba(0,229,255,0.6)' : undefined,
              }}
            />
          )
        })
      )}
    </div>
  )
}
