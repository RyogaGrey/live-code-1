import React, { createContext, useState, ReactNode } from 'react';
import * as crypto from "crypto";

function generate(length: number = 16) : string {
    const uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase: string = "abcdefghijklmnopqrstuvwxyz";
    const numbers: string = "0123456789";
    const symbols: string = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const all: string = uppercase + lowercase + numbers + symbols;
    let password: string = "";
    for (let index: number = 0; index < length; index++) {
      const randomNumber: number = crypto.randomInt(all.length);
      password += all.charAt(randomNumber);
    }
    return password;
}

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
