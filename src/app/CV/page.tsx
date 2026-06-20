'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import './page_CSS.css'

// Mapeo de clases CSS para evitar strings literales dispersos en el JSX
const styles = {
  page: 'page', card: 'card', title: 'title', field: 'field', btn: 'btn',
  cvName: 'cvName', cvContact: 'cvContact', divider: 'divider',
  section: 'section', sectionTitle: 'sectionTitle', sectionText: 'sectionText',
}

// Tipado de los datos del formulario / CV generado
interface CVData {
  name: string; address: string; email: string
  summary: string; experience: string; education: string
  languages: string; skills: string
}

// Estado vacío inicial, reutilizable para resetear el formulario
const EMPTY: CVData = {
  name: '', address: '', email: '',
  summary: '', experience: '', education: '',
  languages: '', skills: '',
}

export default function CVForm() {
  const [form, setForm] = useState<CVData>(EMPTY) // Estado del formulario en edición
  const [cv, setCv]     = useState<CVData | null>(null) // CV generado (null = oculto)

  // Handler genérico para inputs y textareas usando el atributo `name`
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // Al enviar, "congela" los datos del form en el estado cv para renderizar el preview
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCv(form)
  }

  return (
    <div className={styles.page}>

      {/* Formulario: cada sección se genera con .map() para evitar repetición */}
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Create CV</h2>

        {/* Campos de texto simples (input) */}
        {([
          { name: 'name',    label: 'Name',    type: 'text'  },
          { name: 'address', label: 'Address', type: 'text'  },
          { name: 'email',   label: 'Email',   type: 'email' },
        ] as const).map(f => (
          <div key={f.name} className={styles.field}>
            <label>{f.label}</label>
            <input name={f.name} type={f.type} onChange={handleChange} required />
          </div>
        ))}

        {/* Campos de texto largo (textarea) */}
        {([
          { name: 'summary',    label: 'Summary'    },
          { name: 'experience', label: 'Experience' },
          { name: 'education',  label: 'Education'  },
        ] as const).map(f => (
          <div key={f.name} className={styles.field}>
            <label>{f.label}</label>
            <textarea name={f.name} rows={3} onChange={handleChange} required />
          </div>
        ))}

        {/* Campos de una línea para datos cortos */}
        {([
          { name: 'languages', label: 'Languages' },
          { name: 'skills',    label: 'Skills'    },
        ] as const).map(f => (
          <div key={f.name} className={styles.field}>
            <label>{f.label}</label>
            <input name={f.name} type="text" onChange={handleChange} required />
          </div>
        ))}

        <button type="submit" className={styles.btn}>Generate CV</button>
      </form>

      {/* Preview del CV: solo se renderiza cuando cv !== null */}
      {cv && (
        <div className={styles.card}>
          <h2 className={styles.cvName}>{cv.name}</h2>
          <p className={styles.cvContact}>{cv.email} · {cv.address}</p>
          <hr className={styles.divider} />

          {/* Secciones del CV generadas dinámicamente */}
          {([
            { label: 'Summary',    value: cv.summary    },
            { label: 'Experience', value: cv.experience },
            { label: 'Education',  value: cv.education  },
            { label: 'Languages',  value: cv.languages  },
            { label: 'Skills',     value: cv.skills     },
          ]).map(s => (
            <div key={s.label} className={styles.section}>
              <p className={styles.sectionTitle}>{s.label}</p>
              <p className={styles.sectionText}>{s.value}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}