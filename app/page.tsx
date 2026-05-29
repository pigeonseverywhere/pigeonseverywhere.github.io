const sectionStyle: React.CSSProperties = {
  maxWidth: '700px',
  padding: '80px 48px',
}

export default function Home() {
  return (
    <section style={sectionStyle}>
      <p
        className="font-mono"
        style={{ fontSize: '11px', color: 'var(--fg-secondary)', letterSpacing: '0.05em', marginBottom: '20px' }}
      >
        <span style={{ color: 'var(--accent)' }}>●</span> SYDNEY, AU · SOFTWARE ENGINEER
      </p>
      <h1 className="font-mono" style={{ fontSize: '36px', lineHeight: 1.2 }}>
        yunshu dai<span style={{ color: 'var(--accent)' }}>.</span>
      </h1>
      <p style={{ marginTop: '16px', color: 'var(--fg-secondary)', maxWidth: '480px' }}>
        This site is a place for things I've built, shower thoughts that escaped the shower, and experiments that may or may not have worked out.
      </p>
    </section>
  )
}
