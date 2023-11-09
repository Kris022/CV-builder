import { useState } from "react";
import "./styles/App.css";

import PersonalInfoInput from "./components/personalInfo/PersonalInfoInput";
import PersonalInfoPreview from "./components/personalInfo/PersonalInfoPreview";

import EducationInfoInput from "./components/educationInfo/EducationInfoInput";
import EducationInfoPreview from "./components/educationInfo/EducationInfoPreview";

import WorkInfoInput from "./components/workInfo/WorkInfoInput";
import WorkInfoPreview from "./components/workInfo/WorkInfoPreview";

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

  // Work Info
  const [workInfoEntries, setWorkInfoEntries] = useState([]);
  const [showAddWorkInfoEntryForm, setShowAddWorkInfoEntryForm] =
    useState(false);
  const [showEditWorkInfoEntryForm, setShowEditWorkInfoEntryForm] =
    useState(false);

  const [currentWorkEntry, setCurrentWorkEntry] = useState();

  const addWorkEntry = (entry) => {
    setWorkInfoEntries([...workInfoEntries, entry]);

    setShowAddWorkInfoEntryForm(false);
    setShowEditWorkInfoEntryForm(false);
  };

  const removeWorkEntry = (entryId) => {
    const filtered = workInfoEntries.filter((entry) => entry.id !== entryId);
    setWorkInfoEntries(filtered);
  };

  const editWorkEntry = (entry) => {
    setCurrentWorkEntry(entry);
    removeWorkEntry(entry.id);
    setShowEditWorkInfoEntryForm(true);
  };

  return (
    <div className="a4-page">
      <div className="personal-info section">
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
      </div>

      <div className="education-info section">
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

      <div className="work-info section">
        <h2>Work Experience</h2>
        {workInfoEntries.map((entry, index) => (
          <WorkInfoPreview
            key={index}
            workEntry={entry}
            onRemove={removeWorkEntry}
            onEdit={editWorkEntry}
          />
        ))}

        {showEditWorkInfoEntryForm && (
          <WorkInfoInput onSubmit={addWorkEntry} workInfo={currentWorkEntry} />
        )}
        {showAddWorkInfoEntryForm && <WorkInfoInput onSubmit={addWorkEntry} />}

        <button onClick={() => setShowAddWorkInfoEntryForm(true)}>
          Add Work Experience Entry
        </button>
      </div>
    </div>
  );
}

export default App;
