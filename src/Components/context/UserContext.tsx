import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Типы данных пользователя
interface User {
    fullName: string;
    phoneNumber: string;
    gender: string;
    comment: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
    updateUser: (updatedData: Partial<User>) => void;
}

// Создаем контекст
const UserContext = createContext<UserContextType | undefined>(undefined);

// Хук для использования контекста
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

// Провайдер контекста
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUserState] = useState<User | null>(null);

    // Загрузка пользователя из localStorage при монтировании
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserState(JSON.parse(storedUser));
        }
    }, []);

    // Обновление данных пользователя и сохранение в localStorage
    const setUser = (userData: User) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUserState(userData);
    };

    // Обновление отдельных полей пользователя
    const updateUser = (updatedData: Partial<User>) => {
        const newUser = { ...user, ...updatedData };
        setUser(newUser as User);
    };

    // Логаут пользователя
    const logout = () => {
        localStorage.removeItem('user');
        setUserState(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
