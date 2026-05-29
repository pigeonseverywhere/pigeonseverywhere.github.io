'use client'

const HINTS = [
  { keys: ['←', '→'], label: 'navigate' },
  { keys: ['1–4'],    label: 'to section' },
  { keys: ['M'],      label: 'light/dark' },
  { keys: ['H'],      label: 'hide' },
]

export default function KeyHintFooter({ visible }: { visible: boolean }) {
  if (!visible) return null

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 flex items-center gap-6 px-8 h-8"
      style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
    >
      {HINTS.map((h) => (
        <div key={h.label} className="flex items-center gap-1.5">
          {h.keys.map((k) => (
            <kbd
              key={k}
              className="font-mono"
              style={{
                fontSize: '11px',
                padding: '0 4px',
                border: '1px solid var(--border)',
                color: 'var(--fg)',
                lineHeight: '16px',
              }}
            >
              {k}
            </kbd>
          ))}
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--fg-secondary)' }}>
            {h.label}
          </span>
        </div>
      ))}
    </footer>
  )
}
