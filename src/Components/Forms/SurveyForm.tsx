import React from 'react';
import { Container, Typography } from '@mui/material';
import TextInput from './TextInput';
import { useUserContext } from '../context/UserContext';
import { Button } from '@mui/material';

const SurveyForm: React.FC = () => {
    const { user, updateUser } = useUserContext();
    const [fullName, setFullName] = React.useState(user?.fullName || '');
    const [phoneNumber, setPhoneNumber] = React.useState(user?.phoneNumber || '');
    const [comment, setComment] = React.useState(user?.comment || '');

    const handleSubmit = () => {
        updateUser({ fullName, phoneNumber, comment });
        alert('Анкета обновлена!');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Анкета
            </Typography>
            <form noValidate autoComplete="off">
                <TextInput label="ФИО" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <TextInput label="Номер телефона" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <TextInput label="Комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
                <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth style={{ marginTop: '20px' }}>
                    Обновить анкету
                </Button>
            </form>
        </Container>
    );
};

export default SurveyForm;
