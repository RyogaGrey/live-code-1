import { useState } from 'react';

export const useRecoveryForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleRecovery = () => {
        // Логика для восстановления доступа по номеру телефона
        console.log('Восстановление для номера:', phoneNumber);
        alert(`Запрос на восстановление отправлен для номера: ${phoneNumber}`);
    };

    return {
        phoneNumber,
        setPhoneNumber,
        handleRecovery,
    };
};
