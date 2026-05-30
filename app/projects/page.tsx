import Link from 'next/link'
import MobileThemeToggle from '../components/MobileThemeToggle'

const sectionStyle: React.CSSProperties = {
  maxWidth: '700px',
  padding: '80px 48px',
}

const PROJECTS: { name: string; stack: string; description: React.ReactNode; href?: string }[] = [
  {
    name: 'Folly',
    stack: 'iOS · Swift',
    href: '/folly-home',
    description: 'Shared budget tracker for two people. Built to avoid interacting with my Google Sheets on the phone. No server, no backend. TestFlight beta.',
  },
  {
    name: 'Sunswift ERP',
    stack: 'React · FastAPI · AWS · PostgreSQL',
    description: 'Internal tooling for a solar racing team at university, worked on in 2023. Inventory, logistics, member management. I recently heard it got axed— maybe they went back to Excel.',
  },
  {
    name: 'Cuppa',
    stack: 'Swift · Obj-C · macOS',
    description: <>Menubar app for timing tea. Does one thing, wraps the built-in macOS utility command <code>caffeinate</code> for fun.</>,
  },
  {
    name: 'Shelves',
    stack: 'Node.js · TypeScript · SQLite',
    description: "CLI book tracker. npm package. So I can keep track of how many books I haven't finished.",
  },
]

export default function Projects() {
  return (
    <section style={sectionStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p className="font-mono" style={{ fontSize: '11px', color: 'var(--fg-secondary)', margin: 0 }}>03</p>
        <MobileThemeToggle />
      </div>
      <h1 className="font-mono" style={{ fontSize: '24px', marginTop: '8px' }}>projects</h1>
      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '560px' }}>
        {PROJECTS.map((p) => {
          const cardStyle: React.CSSProperties = {
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '16px 20px',
            display: 'block',
            textDecoration: 'none',
            color: 'inherit',
          }
          const inner = (
            <>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span className="font-mono" style={{ fontSize: '15px', color: 'var(--fg)' }}>{p.name}</span>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--fg-secondary)' }}>{p.stack}</span>
                {p.href && (
                  <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', marginLeft: 'auto' }}>↗</span>
                )}
              </div>
              <p style={{ marginTop: '6px', fontSize: '14px', color: 'var(--fg-secondary)', lineHeight: 1.55 }}>
                {p.description}
              </p>
            </>
          )
          return p.href ? (
            <Link key={p.name} href={p.href} style={cardStyle}>{inner}</Link>
          ) : (
            <div key={p.name} style={cardStyle}>{inner}</div>
          )
        })}
      </div>
    </section>
  )
}
