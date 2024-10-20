"use client";

import { showToast } from "@/components/ToastProvider";
import { useLoading } from "@/context/LoadingContext";
import LoadingWrapper from "@/components/LoadingWrapper";
import React, { useEffect, useState } from "react";

const UploadProfilePicture = ({
  initiateNextStep,
  setSetupData,
}: {
  initiateNextStep: () => void;
  setSetupData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setSetupData((prevData: any) => ({
          ...prevData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl mb-8">
        1. Upload your profile picture (or you can skip)
      </h1>
      <div className="w-36 h-36 mb-8 border-2 border-dashed border-gray-300 flex items-center justify-center">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">150x150</span>
        )}
      </div>
      <input type="file" onChange={handleImageUpload} className="mb-8" />
      <button
        onClick={initiateNextStep}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        {image ? "Next" : "Skip"}
      </button>
    </main>
  );
};

const PofileName = ({
  initiateNextStep,
  setSetupData,
}: {
  initiateNextStep: () => void;
  setSetupData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-xl mb-8">2. What is your full name?</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            setSetupData((prevData: any) => ({
              ...prevData,
              fullName: e.target.value,
            }));
          }}
          className="border border-gray-300 px-4 py-2 rounded mb-8"
        />
      </div>
      <div>
        <h1 className="text-xl mb-8">3. What is your nickname?</h1>
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
            setSetupData((prevData: any) => ({
              ...prevData,
              nickname: e.target.value,
            }));
          }}
          placeholder="Nickname"
          className="border border-gray-300 px-4 py-2 rounded mb-8"
        />
      </div>
      <button
        onClick={() => {
          if (fullName && nickname) {
            initiateNextStep();
          } else {
            showToast("Please fill in the full name and nickname.", "error");
          }
        }}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </main>
  );
};

const AppPreferences = ({
  initiateNextStep,
  setSetupData,
}: {
  initiateNextStep: () => void;
  setSetupData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [isTeamMode, setIsTeamMode] = useState(false);
  const [aiAssistance, setAiAssistance] = useState(true);

  const handleToggleTeamMode = () => {
    setIsTeamMode(!isTeamMode);
    setSetupData((prevData: any) => ({
      ...prevData,
      isDefaultUsageByTeamMode: !isTeamMode,
    }));
  };

  const handleToggleAiAssistance = () => {
    setAiAssistance(!aiAssistance);
    setSetupData((prevData: any) => ({
      ...prevData,
      aiAssistance: !aiAssistance,
    }));
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl mb-8">
        4. How will you be using the app by default? (You can still use both, by
        the way)
      </h1>
      <div className="flex items-center mb-8">
        <span className="mr-2">Personal</span>
        <div
          className={`relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in-out ${
            isTeamMode ? "bg-orange-500" : "bg-gray-300"
          } rounded-full`}
        >
          <input
            type="checkbox"
            name="toggle-team-mode"
            id="toggle-team-mode"
            checked={isTeamMode}
            onChange={handleToggleTeamMode}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out transform-gpu"
            style={{
              transform: isTeamMode ? "translateX(100%)" : "translateX(0)",
              borderColor: "orange",
            }}
          />
          <label
            htmlFor="toggle-team-mode"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <span className="ml-2">Team</span>
      </div>
      <h1 className="text-xl mb-8">
        5. Do you want to enable AI assistance? (You can change this later)
      </h1>
      <div className="flex items-center mb-8">
        <span className="mr-2">Disable</span>
        <div
          className={`relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in-out ${
            aiAssistance ? "bg-orange-500" : "bg-gray-300"
          } rounded-full`}
        >
          <input
            type="checkbox"
            name="toggle-ai-assistance"
            id="toggle-ai-assistance"
            checked={aiAssistance}
            onChange={handleToggleAiAssistance}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out transform-gpu"
            style={{
              transform: aiAssistance ? "translateX(100%)" : "translateX(0)",
              borderColor: "orange",
            }}
          />
          <label
            htmlFor="toggle-ai-assistance"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <span className="ml-2">Enable</span>
      </div>
      <button
        onClick={initiateNextStep}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </main>
  );
};

const AccountPassword = ({
  handleSaveData,
  setSetupData,
}: {
  handleSaveData: () => void;
  setSetupData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordSetup = () => {
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!password || !confirmPassword) {
      showToast("Please fill in both fields.", "error");
    } else if (password !== confirmPassword) {
      showToast("Passwords do not match.", "error");
    } else if (password.length < 6) {
      showToast("Password must be at least 6 characters long.", "error");
    } else if (!hasNumber.test(password)) {
      showToast("Password must contain at least one number.", "error");
    } else if (!hasSpecialChar.test(password)) {
      showToast(
        "Password must contain at least one special character.",
        "error"
      );
    } else {
      setSetupData((prevData: any) => ({
        ...prevData,
        password: password,
      }));
      handleSaveData();
    }
  };
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-xl mb-8">6. Setup your password.</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border border-gray-300 px-4 py-2 rounded mb-8"
        />
      </div>
      <div>
        <h1 className="text-xl mb-8">7. Confirm your password.</h1>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          className="border border-gray-300 px-4 py-2 rounded mb-8"
        />
      </div>
      <button
        onClick={handlePasswordSetup}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Finish Setup
      </button>
    </main>
  );
};

const Setup = () => {
  const [isValidVisit, setIsValidVisit] = useState(true); // TODO: save the state in the local storage
  const [currentStep, setCurrentStep] = useState(0);
  const [setupData, setSetupData] = useState({
    profilePicture: null,
    fullName: "",
    nickname: "",
    isDefaultUsageByTeamMode: false,
    aiAssistance: true,
    password: "",
  }); // TODO: save the state in the local storage, in case the user refreshes the page or comes back later
  const [loading, setLoading] = useState(false);
  const { setGlobalLoading } = useLoading();

  useEffect(() => {
    if (!isValidVisit) {
      window.location.href = "/dashboard";
    }
    window.document.title = "CollabHub | Setup";
    setGlobalLoading(loading);
    console.log(setupData);
  }, [setupData, currentStep, loading, setGlobalLoading, isValidVisit]);

  const initiateNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSaveData = () => {
    // simulate saving data to the server
    setLoading(true);
    setTimeout(() => {
      console.log("Data saved to the server:", setupData);
      setLoading(false);
      showToast("Setup completed!", "success");
      window.location.href = "/dashboard";
    }, 5000);
  };

  const steps = [
    <UploadProfilePicture
      setSetupData={setSetupData}
      initiateNextStep={initiateNextStep}
      key="upload-profile-picture"
    />,
    <PofileName
      setSetupData={setSetupData}
      initiateNextStep={initiateNextStep}
      key="profile-name"
    />,
    <AppPreferences
      setSetupData={setSetupData}
      initiateNextStep={initiateNextStep}
      key="app-preferences"
    />,
    <AccountPassword
      setSetupData={setSetupData}
      handleSaveData={handleSaveData}
      key="account-password"
    />,
  ];

  return isValidVisit && <LoadingWrapper>{steps[currentStep]}</LoadingWrapper>;
};

export default Setup;
