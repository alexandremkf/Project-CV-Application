// src/App.jsx
import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview"; // ← ADICIONE ESTA LINHA
import "./styles/app.css";

export default function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: ""
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: ""
  });

  const [preview, setPreview] = useState(false);

  return (
    <div className="app-container">
      <header>
        <h1>CV Application</h1>
      </header>

      {preview ? (
        <CVPreview 
          general={general}
          education={education}
          experience={experience}
          onBack={() => setPreview(false)}
        />
      ) : (
        <main>
          <section className="card">
            <h2>General Information</h2>
            <GeneralInfo data={general} onSave={setGeneral} />
          </section>

          <section className="card">
            <h2>Education</h2>
            <Education data={education} onSave={setEducation} />
          </section>

          <section className="card">
            <h2>Experience</h2>
            <Experience data={experience} onSave={setExperience} />
          </section>

          <button 
            style={{
              marginTop: "16px",
              padding: "12px 18px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg,#4f46e5,#06b6d4)",
              color: "white",
              fontSize: "16px"
            }}
            onClick={() => setPreview(true)}
          >
            Preview CV
          </button>
        </main>
      )}

      <footer>
        <p>Made for React course project</p>
      </footer>
    </div>
  );
}