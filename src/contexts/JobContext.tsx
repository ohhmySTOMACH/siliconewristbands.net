// context/JobProvider.tsx
"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface JobContextProps {
  job: any; // Replace `any` with a specific type if you know the structure
  setJob: Dispatch<SetStateAction<any>>; // Replace `any` similarly
}

export const JobContext = createContext<JobContextProps | undefined>(undefined);

interface JobProviderProps {
  children: ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [job, setJob] = useState<any>(null); // Replace `any` with a proper job type

  return (
    <JobContext.Provider value={{ job, setJob }}>
      {children}
    </JobContext.Provider>
  );
};
