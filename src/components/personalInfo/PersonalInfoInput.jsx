const PersonalInfoInput = ({ personalInfo, setPersonalInfo, onSubmit }) => {
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-section">
        <input
          type="text"
          placeholder="Forename"
          name="fname"
          value={personalInfo.fname}
          onChange={handlePersonalInfoChange}
        />
        <input
          type="text"
          placeholder="Surname"
          name="sname"
          value={personalInfo.sname}
          onChange={handlePersonalInfoChange}
        />
      </div>
      <div className="form-section">
        <input
          type="text"
          placeholder="Phone number"
          name="phone"
          value={personalInfo.phone}
          onChange={handlePersonalInfoChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
        />
      </div>

      <input
        type="text"
        placeholder="Location"
        name="location"
        value={personalInfo.location}
        onChange={handlePersonalInfoChange}
      />

      <div>
        <button type="button">Clear</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default PersonalInfoInput;
