import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const WorkInfoInput = ({
  onSubmit,
  workInfo = {
    id: uuidv4(),
    companyName: "",
    role: "",
    location: "",
    date: "",
    responsibilities: "",
  },
}) => {
  const [formData, setFormData] = useState(workInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="start date - end date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Responsibilities"
        name="responsibilities"
        value={formData.responsibilities}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default WorkInfoInput;
