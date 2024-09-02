import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import TextInput from './TextInput';
import { useRegistrationForm } from '../hooks/useRegistrationForm';
import { useUserContext } from '../context/UserContext';

const RegistrationForm: React.FC = () => {
    const { fullName, setFullName, phoneNumber, setPhoneNumber, gender, setGender, comment, setComment, handleSubmit } =
        useRegistrationForm();
    const { setUser } = useUserContext();

    const handleRegistration = () => {
        const userData = { fullName, phoneNumber, gender, comment };
        setUser(userData);
        handleSubmit();
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Регистрация
            </Typography>
            <form noValidate autoComplete="off">
                <TextInput label="ФИО" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <TextInput label="Номер телефона" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <TextInput label="Комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
                <Button variant="contained" color="primary" onClick={handleRegistration} fullWidth style={{ marginTop: '20px' }}>
                    Зарегистрироваться
                </Button>
            </form>
        </Container>
    );
};

export default RegistrationForm;
