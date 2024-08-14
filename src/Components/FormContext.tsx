import React, { createContext, useState, ReactNode } from 'react';

interface FormData {
    name: string;
    email: string;
    age: number | string;
    comment: string;
}

interface FormContextProps {
    surveyData: FormData[];
    addSurveyData: (data: FormData) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const SurveyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [surveyData, setSurveyData] = useState<FormData[]>([]);

    const addSurveyData = (data: FormData) => {
        setSurveyData((prevData) => [...prevData, data]);
    };

    return (
        <FormContext.Provider value={{ surveyData, addSurveyData }}>
            {children}
        </FormContext.Provider>
    );
};
