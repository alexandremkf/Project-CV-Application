// src/components/GeneralInfo.jsx
import React, { useState, useEffect } from "react";
import "../styles/general.css";

export default function GeneralInfo({ data, onSave }) {
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

  function handleEdit() {
    setEditing(true);
  }

  return (
    <div className="section">
      {editing ? (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Phone
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </label>

          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p><strong>Name:</strong> {data.name || "-"}</p>
          <p><strong>Email:</strong> {data.email || "-"}</p>
          <p><strong>Phone:</strong> {data.phone || "-"}</p>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}