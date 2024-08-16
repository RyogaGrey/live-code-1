import { useState } from 'react';

export const useUser = () => {
    const [userName, setUserName] = useState<string>('Пользователь');

    return { userName, setUserName };
};
