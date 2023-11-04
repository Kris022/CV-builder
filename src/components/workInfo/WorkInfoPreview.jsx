const WorkInfoPreview = ({ workEntry, onRemove, onEdit }) => {
  const handleRemove = () => {
    onRemove(workEntry.id);
  };

  const handleEdit = () => {
    onEdit(workEntry);
  };

  return (
    <div className="work-entry">
      <div>
        <p>{workEntry.companyName}</p>
        <p>{workEntry.role}</p>
        <p>{workEntry.location}</p>
        <p>{workEntry.date}</p>
        <p>{workEntry.responsibilities}</p>
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default WorkInfoPreview;
