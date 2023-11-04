import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const EducationInfoInput = ({
  onSubmit,
  educationInfo = {
    id: uuidv4(),
    schoolName: "",
    location: "",
    date: "",
    grade: "",
  },
}) => {
  const initialFormData = {
    id: uuidv4(),
    schoolName: "",
    location: "",
    date: "",
    grade: "",
  };
  
  const [formData, setFormData] = useState(educationInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="education-entry">
      <input
        type="text"
        placeholder="School Name"
        name="schoolName"
        value={formData.schoolName}
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
        placeholder="date start - date end"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Grade"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EducationInfoInput;
