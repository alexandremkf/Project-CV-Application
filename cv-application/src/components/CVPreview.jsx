// src/components/CVPreview.jsx
import "../styles/preview.css";

export default function CVPreview({ general, education, experience, onBack }) {
  return (
    <div className="preview-container">
      <button className="back-btn" onClick={onBack}>
        ← Back to Edit
      </button>

      <div className="cv-card">
        <h1>{general.name || "Your Name"}</h1>
        <p>{general.email}</p>
        <p>{general.phone}</p>

        <hr />

        <h2>Education</h2>
        <p><strong>School:</strong> {education.school}</p>
        <p><strong>Title:</strong> {education.title}</p>
        <p><strong>Date:</strong> {education.date}</p>

        <hr />

        <h2>Experience</h2>
        <p><strong>Company:</strong> {experience.company}</p>
        <p><strong>Position:</strong> {experience.position}</p>
        <p><strong>Main responsibilities:</strong></p>
        <p className="respons">{experience.responsibilities}</p>
        <p><strong>From:</strong> {experience.from} — <strong>To:</strong> {experience.to}</p>
      </div>
    </div>
  );
}