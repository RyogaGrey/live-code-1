import { useState } from 'react';

export const useForm = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('male');
    const [comment, setComment] = useState('');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
    const [selectedRadio, setSelectedRadio] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [switchChecked, setSwitchChecked] = useState(false);

    return {
        fullName,
        setFullName,
        phoneNumber,
        setPhoneNumber,
        gender,
        setGender,
        comment,
        setComment,
        selectedCheckboxes,
        setSelectedCheckboxes,
        selectedRadio,
        setSelectedRadio,
        selectedOption,
        setSelectedOption,
        file,
        setFile,
        switchChecked,
        setSwitchChecked,
    };
};
