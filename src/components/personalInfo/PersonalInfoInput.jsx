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
      <div className="personal-info">
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
      <div className="contact-info">
        <input
          type="text"
          placeholder="Phone number"
          name="phone"
          value={personalInfo.phone}
          onChange={handlePersonalInfoChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={personalInfo.location}
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
      <button type="button">Clear</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default PersonalInfoInput;
