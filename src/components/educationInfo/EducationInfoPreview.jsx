const EducationInfoPreview = ({ educationEntry, onEdit, onRemove }) => {
  const handleEdit = () => {
    onEdit(educationEntry);
  };

  const handleRemove = () => {
    onRemove(educationEntry.id);
  };

  return (
    <div className="education-entry">
      <div>
        <p>{educationEntry.schoolName}</p>
        <p>{educationEntry.location}</p>
        <p>{educationEntry.date}</p>
        <p>{educationEntry.grade}</p>
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default EducationInfoPreview;
