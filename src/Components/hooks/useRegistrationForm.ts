import { useState } from 'react';

export const useRegistrationForm = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('male');
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        const formData = { fullName, phoneNumber, gender, comment };
        console.log('Form submitted:', formData);
    };

    return {
        fullName,
        setFullName,
        phoneNumber,
        setPhoneNumber,
        gender,
        setGender,
        comment,
        setComment,
        handleSubmit,
    };
};
