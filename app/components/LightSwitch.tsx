'use client'

interface LightSwitchProps {
  isDark: boolean
  onToggle: () => void
}

export default function LightSwitch({ isDark, onToggle }: LightSwitchProps) {
  return (
    <button
      onClick={onToggle}
      title="Toggle theme (M)"
      aria-label="Toggle theme"
      style={{
        cursor: 'pointer',
        border: '1px solid var(--border)',
        background: 'none',
        borderRadius: '2px',
        padding: '0',
        width: '30px',
        height: '16px',
        position: 'relative',
        flexShrink: 0,
        outline: 'none',
      }}
    >
      <span
        style={{
          display: 'block',
          width: '10px',
          height: '10px',
          background: 'var(--fg-secondary)',
          borderRadius: '1px',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: isDark ? '2px' : '16px',
          transition: 'left 120ms ease',
        }}
      />
    </button>
  )
}
