import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import TextInput from './TextInput';
import { useUserContext } from '../context/UserContext';

const RecoveryForm: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const { user } = useUserContext();

    const handleRecovery = () => {
        if (user && user.phoneNumber === phoneNumber) {
            alert('На ваш номер телефона отправлено уведомление!');
        } else {
            alert('Номер телефона не найден.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Восстановление доступа
            </Typography>
            <form noValidate autoComplete="off">
                <TextInput label="Номер телефона" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <Button variant="contained" color="primary" onClick={handleRecovery} fullWidth style={{ marginTop: '20px' }}>
                    Восстановить
                </Button>
            </form>
        </Container>
    );
};

export default RecoveryForm;
