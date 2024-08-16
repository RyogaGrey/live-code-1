import { useState } from 'react';

export const useLoginForm = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = () => {
        const loginData = { fullName, phoneNumber };
        console.log('Login attempt:', loginData);
        // Тут можно добавить логику для проверки пользователя
    };

    return {
        fullName,
        setFullName,
        phoneNumber,
        setPhoneNumber,
        handleLogin,
    };
};
