const PersonalInfoPreview = ({ personalInfo, onClick }) => {
  return (
    <div className="personal-info-preview">
      <div className="personal-info">
        <p>{personalInfo.fname}</p>
        <p>{personalInfo.sname}</p>
      </div>
      <div className="contact-info">
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.location}</p>
        <p>{personalInfo.email}</p>
      </div>
      <button onClick={onClick}>Edit</button>
    </div>
  );
};

export default PersonalInfoPreview;
