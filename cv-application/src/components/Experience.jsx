// src/components/Experience.jsx
import React, { useState, useEffect } from "react";
import "../styles/experience.css";

export default function Experience({ data, onSave }) {
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
            Company
            <input name="company" value={form.company} onChange={handleChange} required />
          </label>

          <label>
            Position title
            <input name="position" value={form.position} onChange={handleChange} required />
          </label>

          <label>
            Main responsibilities
            <textarea name="responsibilities" value={form.responsibilities} onChange={handleChange} rows="3" required />
          </label>

          <label>
            From
            <input name="from" value={form.from} onChange={handleChange} placeholder="e.g. Jan 2020" required />
          </label>

          <label>
            To
            <input name="to" value={form.to} onChange={handleChange} placeholder="e.g. Dec 2022 or Present" required />
          </label>

          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p><strong>Company:</strong> {data.company || "-"}</p>
          <p><strong>Position:</strong> {data.position || "-"}</p>
          <p><strong>Responsibilities:</strong> {data.responsibilities || "-"}</p>
          <p><strong>From:</strong> {data.from || "-" } <strong>To:</strong> {data.to || "-"}</p>
          <div className="buttons">
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}