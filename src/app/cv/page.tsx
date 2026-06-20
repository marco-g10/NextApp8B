"use client";

import { useState } from "react";

// Shape of the CV data
interface CVData {
  name: string;
  address: string;
  email: string;
  summary: string;
  experience: string;
  education: string;
  languages: string;
  skills: string;
}

// Initial empty state for the form
const emptyCV: CVData = {
  name: "",
  address: "",
  email: "",
  summary: "",
  experience: "",
  education: "",
  languages: "",
  skills: "",
};

export default function CVPage() {
  // Form input state (what the user is typing)
  const [form, setForm] = useState<CVData>(emptyCV);

  // Submitted CV state (what gets displayed in the CV preview)
  const [cv, setCV] = useState<CVData | null>(null);

  // Generic change handler for all text inputs / textareas
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // On submit, copy form state into cv state to render the preview
  function handleGenerate() {
    setCV({ ...form });
  }

  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 700, margin: "0 auto", padding: "2rem" }}>
      <h1>CV Generator</h1>

      {/* ── FORM SECTION ── */}
      <section style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

        {/* Name */}
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            style={inputStyle}
          />
        </label>

        {/* Address */}
        <label>
          Address
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="123 Main St, City"
            style={inputStyle}
          />
        </label>

        {/* Email */}
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={inputStyle}
          />
        </label>

        {/* Summary */}
        <label>
          Summary
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            rows={3}
            placeholder="Brief professional summary..."
            style={inputStyle}
          />
        </label>

        {/* Experience */}
        <label>
          Experience
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            rows={3}
            placeholder="Job title – Company – Year..."
            style={inputStyle}
          />
        </label>

        {/* Education */}
        <label>
          Education
          <textarea
            name="education"
            value={form.education}
            onChange={handleChange}
            rows={2}
            placeholder="Degree – Institution – Year..."
            style={inputStyle}
          />
        </label>

        {/* Languages */}
        <label>
          Languages
          <input
            name="languages"
            value={form.languages}
            onChange={handleChange}
            placeholder="Spanish, English..."
            style={inputStyle}
          />
        </label>

        {/* Skills */}
        <label>
          Skills
          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="React, Node.js, TypeScript..."
            style={inputStyle}
          />
        </label>

        {/* Generate button – copies form into cv state */}
        <button onClick={handleGenerate} style={btnStyle}>
          Generate CV
        </button>
      </section>

      {/* ── CV PREVIEW (only shown after the button is pressed) ── */}
      {cv && (
        <section style={cvContainer}>
          {/* Header */}
          <h2 style={{ margin: 0 }}>{cv.name}</h2>
          <p style={{ margin: "0.25rem 0", color: "#555" }}>
            {cv.address} · {cv.email}
          </p>

          <hr />

          {/* Summary */}
          <CVSection title="Summary" content={cv.summary} />

          {/* Experience */}
          <CVSection title="Experience" content={cv.experience} />

          {/* Education */}
          <CVSection title="Education" content={cv.education} />

          {/* Languages */}
          <CVSection title="Languages" content={cv.languages} />

          {/* Skills */}
          <CVSection title="Skills" content={cv.skills} />
        </section>
      )}
    </main>
  );
}

// ── Small helper to render each CV section ──
function CVSection({ title, content }: { title: string; content: string }) {
  // Don't render empty sections
  if (!content.trim()) return null;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3 style={{ marginBottom: "0.25rem", borderBottom: "1px solid #ccc" }}>
        {title}
      </h3>
      {/* Preserve line breaks the user typed */}
      <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{content}</p>
    </div>
  );
}

// ── Shared styles ──
const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  marginTop: "0.25rem",
  padding: "0.4rem 0.6rem",
  fontSize: "0.95rem",
  boxSizing: "border-box",
};

const btnStyle: React.CSSProperties = {
  marginTop: "0.5rem",
  padding: "0.6rem 1.4rem",
  fontSize: "1rem",
  cursor: "pointer",
  border: "none",
  borderRadius: 4,
};

const cvContainer: React.CSSProperties = {
  marginTop: "2rem",
  padding: "1.5rem",
  borderRadius: 6,
};
