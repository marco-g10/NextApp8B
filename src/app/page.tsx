'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface CVData {
  name: string;
  phone: string;
  address: string;
  email: string;
  summary: string;
  experience: string;
  education: string;
  languages: string;
  skills: string;
}

export default function App() {

  const [formData, setFormData] = useState<CVData>({
    name: '',
    phone: '',
    address: '',
    email: '',
    summary: '',
    experience: '',
    education: '',
    languages: '',
    skills: ''
  });

  const [cvData, setCvData] = useState<CVData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCvData(formData);
  };

  return (
    <div className="container">
      <form className="form-section" onSubmit={handleSubmit}>
        <h2>Create your CV</h2>

        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Phone:</label>
          <input type="text" name="phone" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Address:</label>
          <input type="text" name="address" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Summary:</label>
          <textarea name="summary" onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Experience:</label>
          <textarea name="experience" onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Education:</label>
          <textarea name="education" onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Languages:</label>
          <input type="text" name="languages" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Skills:</label>
          <input type="text" name="skills" onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Generate CV</button>
      </form>

      {cvData && (
        <div className="cv-section">
          <h2>Curriculum Vitae</h2>
          <div className="cv-content">
            <h3>{cvData.name}</h3>
            <p><strong>Phone:</strong> {cvData.phone} | <strong>Email:</strong> {cvData.email} | <strong>Address:</strong> {cvData.address}</p>

            <hr />

            <h4>Summary</h4>
            <p>{cvData.summary}</p>

            <h4>Experience</h4>
            <p>{cvData.experience}</p>

            <h4>Education</h4>
            <p>{cvData.education}</p>

            <h4>Languages</h4>
            <p>{cvData.languages}</p>

            <h4>Skills</h4>
            <p>{cvData.skills}</p>
          </div>
        </div>
      )}
    </div>
  );
}
