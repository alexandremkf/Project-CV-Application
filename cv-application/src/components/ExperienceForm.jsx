import { useState } from "react";
import "../styles/ExperienceForm.css";

export default function ExperienceForm({ onSave }) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
    setForm({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: "",
    });
  }

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange}/>
      <input name="position" placeholder="Position" value={form.position} onChange={handleChange}/>
      <textarea name="responsibilities" placeholder="Main responsibilities" value={form.responsibilities} onChange={handleChange}/>
      <input name="from" placeholder="From" value={form.from} onChange={handleChange}/>
      <input name="to" placeholder="To" value={form.to} onChange={handleChange}/>
      <button type="submit">Add Experience</button>
    </form>
  );
}