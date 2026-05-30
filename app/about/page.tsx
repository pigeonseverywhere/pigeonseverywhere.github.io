import MobileThemeToggle from '../components/MobileThemeToggle'

const sectionStyle: React.CSSProperties = {
  maxWidth: '700px',
  padding: '80px 48px',
}

export default function About() {
  return (
    <section style={sectionStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p className="font-mono" style={{ fontSize: '11px', color: 'var(--fg-secondary)', margin: 0 }}>02</p>
        <MobileThemeToggle />
      </div>
      <h1 className="font-mono" style={{ fontSize: '24px', marginTop: '8px' }}>about</h1>
      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '520px' }}>
        <p>
          I write software sometimes and I care a bit too much about the UI/UX— I should probably switch careers to design instead.
        </p>
      </div>
    </section>
  )
}
