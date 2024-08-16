import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import TextInput from './TextInput';
import { useLoginForm } from '../hooks/useLoginForm';
import { useUserContext } from '../context/UserContext';

const LoginForm: React.FC = () => {
    const { fullName, setFullName, phoneNumber, setPhoneNumber, handleLogin } = useLoginForm();
    const { user, setUser } = useUserContext();

    const handleUserLogin = () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.fullName === fullName && userData.phoneNumber === phoneNumber) {
                setUser(userData); // Устанавливаем пользователя в контекст
                handleLogin(); // Вызываем дополнительную логику входа, если нужно
            } else {
                alert('Неправильные данные');
            }
        } else {
            alert('Пользователь не зарегистрирован');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Вход
            </Typography>
            <form noValidate autoComplete="off">
                <TextInput label="ФИО" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <TextInput label="Номер телефона" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <Button variant="contained" color="primary" onClick={handleUserLogin} fullWidth style={{ marginTop: '20px' }}>
                    Войти
                </Button>
            </form>
        </Container>
    );
};

export default LoginForm;
