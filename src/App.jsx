import { useState } from "react";
import "./styles/App.css";

import PersonalInfoInput from "./components/personalInfo/PersonalInfoInput";
import PersonalInfoPreview from "./components/personalInfo/PersonalInfoPreview";

import EducationInfoInput from "./components/educationInfo/EducationInfoInput";
import EducationInfoPreview from "./components/educationInfo/EducationInfoPreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fname: "",
    sname: "",
    phone: "",
    location: "",
    email: "",
  });
  const [editPersonalInfo, setEditPersonalInfo] = useState(true);

  // Education Info
  const [educationInfoEntries, setEducationInfoEntries] = useState([]);
  const [showAddEducationEntryForm, setShowAddEducationEntryForm] =
    useState(false);

  const [showEditEducationEntryForm, setShowEditEducationEntryForm] =
    useState(false);

  // let currentEducationEntryIndex = 0; // Does not require re-render so not a state
  // should prob store index not the whole entry
  const [currentEducationEntry, setCurrentEducationEntry] = useState();

  const addEducationEntry = (entry) => {
    setEducationInfoEntries([...educationInfoEntries, entry]);

    setShowAddEducationEntryForm(false);
    setShowEditEducationEntryForm(false);
  };

  const removeEducationEntry = (entryId) => {
    const filtered = educationInfoEntries.filter(
      (entry) => entry.id !== entryId
    );
    setEducationInfoEntries(filtered);
  };

  const editEducationEntry = (entry) => {
    setCurrentEducationEntry(entry);
    removeEducationEntry(entry.id);
    setShowEditEducationEntryForm(true);
  };

  return (
    <div className="a4-page">
      {editPersonalInfo ? (
        <PersonalInfoInput
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          onSubmit={() => setEditPersonalInfo(false)}
        />
      ) : (
        <PersonalInfoPreview
          personalInfo={personalInfo}
          onClick={() => setEditPersonalInfo(true)}
        />
      )}

      <div className="education-info">
        <h2>Education</h2>
        {educationInfoEntries.map((entry, index) => (
          <EducationInfoPreview
            key={index}
            educationEntry={entry}
            onRemove={removeEducationEntry}
            onEdit={editEducationEntry}
          />
        ))}

        {showEditEducationEntryForm && (
          <EducationInfoInput
            educationInfo={currentEducationEntry}
            onSubmit={addEducationEntry}
          />
        )}

        {showAddEducationEntryForm && (
          <EducationInfoInput onSubmit={addEducationEntry} />
        )}
        <button onClick={() => setShowAddEducationEntryForm(true)}>
          Add education entry
        </button>
      </div>
    </div>
  );
}

export default App;
