// src/App.jsx
import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
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

  return (
    <div className="app-container">
      <header>
        <h1>CV Application</h1>
        <p>Preencha os campos e clique em Submit para ver o currículo. Use Edit para voltar a editar.</p>
      </header>

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
      </main>

      <footer>
        <p>Made for React course project</p>
      </footer>
    </div>
  );
}