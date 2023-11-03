import { useState } from "react";
import "./styles/App.css";
import PersonalInfoInput from "./components/personalInfo/PersonalInfoInput";
import PersonalInfoPreview from "./components/personalInfo/PersonalInfoPreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fname: "",
    sname: "",
    phone: "",
    location: "",
    email: "",
  });
  const [editPersonalInfo, setEditPersonalInfo] = useState(true);

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
    </div>
  );
}

export default App;
