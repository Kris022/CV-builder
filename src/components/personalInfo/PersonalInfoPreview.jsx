const PersonalInfoPreview = ({ personalInfo, onClick }) => {
  return (
    <div className="personal-info-preview">
      <div className="personal-info preview">
        <p>{personalInfo.fname}</p>
        <p>{personalInfo.sname}</p>
      </div>
      <div className="contact-info preview">
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.location}</p>
      </div>
      <button onClick={onClick}>Edit</button>
    </div>
  );
};

export default PersonalInfoPreview;
