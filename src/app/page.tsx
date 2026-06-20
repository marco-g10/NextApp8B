'use client'

import React, { useState } from 'react'

const CV_DATA = {
  name: 'Dante Jehudiel Velarde Torres',
  role: 'Ingeniero en Sistemas Computacionales',
  badge: 'Desarrollo Web · Creatividad · Ofimática',
  contact: {
    location: 'Aguascalientes, Ags.',
    email: 'dantejvt.340@gmail.com',
    phone: '449 545 4955',
    languages: 'Español (Nativo) / Inglés (B2)',
  },
  summary:
    'Mi objetivo profesional es destacar en el ámbito laboral por mi creatividad individual y mi gran iniciativa, ' +
    'así como aportar para el crecimiento en buena dirección de la empresa a través del desarrollo estructurado ' +
    'de software y optimización informática.',
  stats: [
    { value: '8 Meses', label: 'Experiencia total' },
    { value: 'B2',      label: 'Nivel de Inglés'   },
    { value: '4+',      label: 'Lenguajes clave'   },
    { value: '100%',    label: 'Iniciativa'         },
  ],
  experience: [
    {
      duration: '4 Meses',
      title: 'Desarrollador de Sitios Web Autónomo',
      description:
        'Diseño, maquetación y puesta en marcha de un sitio web simple, aplicando tecnologías core como HTML y CSS para una visualización correcta.',
    },
    {
      duration: '4 Meses',
      title: 'Auxiliar de Ofimática y Documentación',
      description:
        'Manejo de herramientas administrativas para el desarrollo de reportes técnicos organizados y documentación simple de proyectos informáticos.',
    },
  ],
  education: [
    { status: 'Cursando actualmente', institution: 'Universidad Politécnica de Aguascalientes', detail: 'Ingeniería en Sistemas Computacionales.' },
    { status: 'Egresado',             institution: 'CBTiS No. 168',                             detail: 'Educación Media Superior / Bachillerato Tecnológico.' },
    { status: 'Egresado',             institution: 'Secundaria Técnica No. 20',                 detail: 'Educación Básica Secundaria.' },
  ],
  skills: [
    'HTML5', 'CSS3', 'Java', 'Python',
    'Herramientas Ofimáticas', 'Mantenimiento de Hardware (Laptops)',
    'Trabajo en Equipo', 'Gran Creatividad Individual', 'Iniciativa Propia',
  ],
  hobbies: [
    { title: 'Escultura',                description: 'Desarrollo de la tridimensionalidad y volumen visual mediante moldeado manual.'             },
    { title: 'Dibujo Clásico y Digital', description: 'Exploración del diseño visual tradicional y el uso de software de ilustración digital.'    },
    { title: 'Interés en las Artes',     description: 'Apreciación de corrientes estéticas que alimentan mi creatividad individual en el software.' },
    { title: 'Videojuegos',              description: 'Actividad recreativa enfocada al análisis lógico de mecánicas e interfaces multimedia.'      },
  ],
}

// ── Componente principal ────────────────────────────────────────────────────

export default function CVPage() {
  const [showHobbies, setShowHobbies] = useState(false)

  return (
    <div style={s.page}>

      {/* ── HERO ── */}
      <header style={s.hero}>
        <div style={s.heroBadge}>{CV_DATA.role}</div>
        <h1 style={s.heroName}>{CV_DATA.name}</h1>
        <p  style={s.heroBadgeText}>{CV_DATA.badge}</p>
        <p  style={s.heroSummaryShort}>
          Estudiante del área informática con iniciativa propia, alta creatividad individual y enfoque proactivo,
          comprometido en aportar activamente al crecimiento y dirección óptima de proyectos tecnológicos.
        </p>

        {/* Tarjeta de contacto */}
        <div style={s.contactCard}>
          <p style={s.contactName}>{CV_DATA.name}</p>
          <p style={s.contactRole}>{CV_DATA.role}</p>
          <div style={s.contactList}>
            {[
              { text: CV_DATA.contact.location  },
              { text: CV_DATA.contact.email     },
              { text: CV_DATA.contact.phone     },
              { text: CV_DATA.contact.languages },
            ].map(item => (
              <div key={item.text} style={s.contactItem}>
                <span style={s.contactText}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={s.heroBtns}>
          <button style={s.btnPrimary} onClick={() => setShowHobbies(v => !v)}>
            {showHobbies ? 'Ocultar Pasatiempos' : 'Desplegar Pasatiempos'}
          </button>
          <a href={`mailto:${CV_DATA.contact.email}`} style={s.btnOutline}>
            Contactar
          </a>
        </div>
      </header>

      <main style={s.main}>

        {/* ── PERFIL ── */}
        <section style={s.section}>
          <SectionTitle title="Perfil profesional" />
          <div style={s.card}>
            <p style={s.bodyText}>{CV_DATA.summary}</p>
            <div style={s.statsGrid}>
              {CV_DATA.stats.map(st => (
                <div key={st.label} style={s.stat}>
                  <strong style={s.statValue}>{st.value}</strong>
                  <span   style={s.statLabel}>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCIA ── */}
        <section style={s.section}>
          <SectionTitle title="Experiencia en proyectos" />
          <div style={s.timeline}>
            {CV_DATA.experience.map(exp => (
              <div key={exp.title} style={s.card}>
                <span style={s.dateBadge}>{exp.duration}</span>
                <h3   style={s.cardTitle}>{exp.title}</h3>
                <p    style={s.bodyText}>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCACIÓN ── */}
        <section style={s.section}>
          <SectionTitle title="Formación académica" />
          <div style={s.grid3}>
            {CV_DATA.education.map(edu => (
              <div key={edu.institution} style={s.card}>
                <span style={s.dateBadge}>{edu.status}</span>
                <h3   style={s.cardTitle}>{edu.institution}</h3>
                <p    style={s.bodyText}>{edu.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HABILIDADES ── */}
        <section style={s.section}>
          <SectionTitle title="Habilidades" />
          <div style={s.card}>
            <div style={s.skillsWrap}>
              {CV_DATA.skills.map(skill => (
                <span key={skill} style={s.skillChip}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PASATIEMPOS (toggle) ── */}
        {showHobbies && (
          <section style={s.section}>
            <SectionTitle title="Pasatiempos e Intereses" />
            <div style={s.grid4}>
              {CV_DATA.hobbies.map(h => (
                <div key={h.title} style={s.hobbyCard}>
                  <h3  style={s.hobbyTitle}>{h.title}</h3>
                  <p   style={s.bodyText}>{h.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      <footer style={s.footer}>
        <h2 style={s.footerName}>{CV_DATA.name}</h2>
        <p  style={s.footerSub}>CV digital interactivo desarrollado con HTML, CSS y JavaScript básico · 2026.</p>
      </footer>

    </div>
  )
}

// ── Sub-componente reutilizable ─────────────────────────────────────────────

function SectionTitle({ title }: { title: string }) {
  return (
    <div style={s.sectionTitle}>
      <h2 style={s.sectionH2}>{title}</h2>
    </div>
  )
}

// ── Estilos en objeto (sin dependencia de CSS externo) ──────────────────────

const ACCENT   = '#6366f1'
const ACCENT2  = '#818cf8'
const BG       = '#f8fafc'
const CARD_BG  = '#ffffff'
const TEXT      = '#1e293b'
const MUTED     = '#64748b'
const BORDER    = '#e2e8f0'

const s: Record<string, React.CSSProperties> = {
  page:        { fontFamily: "'Poppins', sans-serif", background: BG, color: TEXT, minHeight: '100vh' },

  /* Hero */
  hero:        { background: `linear-gradient(135deg, ${ACCENT} 0%, #4f46e5 100%)`, color: '#fff', padding: '3rem 2rem 4rem', textAlign: 'center' },
  heroBadge:   { display: 'inline-block', background: 'rgba(255,255,255,0.2)', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.8rem', marginBottom: '1rem', letterSpacing: '0.05em' },
  heroName:    { fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, margin: '0 0 0.4rem', lineHeight: 1.1 },
  heroBadgeText:{ fontSize: '1rem', opacity: 0.85, margin: '0 0 1rem' },
  heroSummaryShort: { fontSize: '0.9rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 },
  heroBtns:    { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' },

  /* Contact card */
  contactCard: { background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', borderRadius: '1rem', padding: '1.5rem', maxWidth: '320px', margin: '0 auto' },
  avatar:      { fontSize: '2.5rem', marginBottom: '0.5rem' },
  contactName: { fontWeight: 700, fontSize: '1rem', margin: '0 0 0.2rem' },
  contactRole: { fontSize: '0.8rem', opacity: 0.8, margin: '0 0 1rem' },
  contactList: { display: 'flex', flexDirection: 'column', gap: '0.45rem', textAlign: 'left' },
  contactItem: { display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '0.82rem' },
  contactText: { opacity: 0.9 },

  /* Buttons */
  btnPrimary:  { background: '#fff', color: ACCENT, border: 'none', borderRadius: '0.5rem', padding: '0.65rem 1.4rem', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' },
  btnOutline:  { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '0.5rem', padding: '0.65rem 1.4rem', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' },

  /* Layout */
  main:        { maxWidth: '900px', margin: '0 auto', padding: '2.5rem 1.5rem' },
  section:     { marginBottom: '2.5rem' },
  sectionTitle:{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' },
  sectionIcon: { fontSize: '1.3rem' },
  sectionH2:   { fontSize: '1.3rem', fontWeight: 700, margin: 0 },

  /* Card */
  card:        { background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '0.8rem', padding: '1.4rem', marginBottom: '0.8rem' },
  cardTitle:   { fontWeight: 600, fontSize: '1rem', margin: '0.3rem 0 0.5rem' },
  bodyText:    { fontSize: '0.88rem', color: MUTED, lineHeight: 1.7, margin: 0 },
  dateBadge:   { display: 'inline-block', background: `${ACCENT}18`, color: ACCENT, borderRadius: '999px', padding: '0.2rem 0.8rem', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.4rem' },

  /* Stats */
  statsGrid:   { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '1rem', marginTop: '1.2rem' },
  stat:        { background: BG, borderRadius: '0.6rem', padding: '0.8rem', textAlign: 'center' },
  statValue:   { display: 'block', fontSize: '1.4rem', fontWeight: 800, color: ACCENT },
  statLabel:   { display: 'block', fontSize: '0.75rem', color: MUTED, marginTop: '0.2rem' },

  /* Grids */
  timeline:    { display: 'flex', flexDirection: 'column', gap: '0.8rem' },
  grid3:       { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem' },
  grid4:       { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem' },

  /* Skills */
  skillsWrap:  { display: 'flex', flexWrap: 'wrap', gap: '0.6rem' },
  skillChip:   { background: `${ACCENT}12`, color: ACCENT, border: `1px solid ${ACCENT2}40`, borderRadius: '999px', padding: '0.3rem 0.9rem', fontSize: '0.82rem', fontWeight: 500 },

  /* Hobbies */
  hobbyCard:   { background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: '0.8rem', padding: '1.2rem', textAlign: 'center' },
  hobbyIcon:   { fontSize: '2rem', marginBottom: '0.6rem' },
  hobbyTitle:  { fontWeight: 700, fontSize: '0.95rem', margin: '0 0 0.4rem' },

  /* Footer */
  footer:      { background: TEXT, color: '#fff', textAlign: 'center', padding: '2rem 1rem' },
  footerName:  { fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.4rem' },
  footerSub:   { fontSize: '0.8rem', opacity: 0.6, margin: 0 },
}
