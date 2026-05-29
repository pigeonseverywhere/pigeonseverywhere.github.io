const sectionStyle: React.CSSProperties = {
  maxWidth: '700px',
  padding: '80px 48px',
}

export default function Contact() {
  return (
    <section style={sectionStyle}>
      <p className="font-mono" style={{ fontSize: '11px', color: 'var(--fg-secondary)' }}>04</p>
      <h1 className="font-mono" style={{ fontSize: '24px', marginTop: '8px' }}>contact</h1>
      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <a
          href="mailto:yunshudai2010@gmail.com"
          className="font-mono"
          style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none' }}
        >
          yunshudai2010@gmail.com
        </a>
        <a
          href="https://github.com/pigeonseverywhere"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none' }}
        >
          github
        </a>
      </div>
    </section>
  )
}
