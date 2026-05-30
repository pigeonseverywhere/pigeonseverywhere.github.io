import MobileThemeToggle from './components/MobileThemeToggle'

const sectionStyle: React.CSSProperties = {
  maxWidth: '700px',
  padding: '80px 48px',
}

export default function Home() {
  return (
    <section style={sectionStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <p
          className="font-mono"
          style={{ fontSize: '11px', color: 'var(--fg-secondary)', letterSpacing: '0.05em', margin: 0 }}
        >
          <span style={{ color: 'var(--accent)' }}>●</span> SYDNEY, AU · SOFTWARE ENGINEER
        </p>
        <MobileThemeToggle />
      </div>
      <h1 className="font-mono" style={{ fontSize: '36px', lineHeight: 1.2 }}>
        yunshu dai<span style={{ color: 'var(--accent)' }}>.</span>
      </h1>
      <p style={{ marginTop: '16px', color: 'var(--fg-secondary)', maxWidth: '480px' }}>
        This site is a place for things I've built, shower thoughts that escaped the shower, and experiments that may or may not have worked out.
      </p>
    </section>
  )
}
