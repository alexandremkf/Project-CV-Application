// src/components/Education.jsx
import React, { useState, useEffect } from "react";
import "../styles/education.css";

export default function Education({ data, onSave }) {
  const [editing, setEditing] = useState(true);
  const [form, setForm] = useState(data);

  useEffect(() => { setForm(data); }, [data]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
    setEditing(false);
  }

  return (
    <div className="section">
      {editing ? (
        <form onSubmit={handleSubmit} className="form">
          <label>
            School name
            <input name="school" value={form.school} onChange={handleChange} required />
          </label>

          <label>
            Title of study
            <input name="title" value={form.title} onChange={handleChange} required />
          </label>

          <label>
            Date
            <input name="date" value={form.date} onChange={handleChange} placeholder="e.g. 2018 - 2022" required />
          </label>

          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p><strong>School:</strong> {data.school || "-"}</p>
          <p><strong>Title:</strong> {data.title || "-"}</p>
          <p><strong>Date:</strong> {data.date || "-"}</p>
          <div className="buttons">
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}