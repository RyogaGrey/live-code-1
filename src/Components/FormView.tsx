import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface FormViewProps {
    name: string;
    email: string;
    age: number | string;
    comment: string;
    onNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onAgeChange: (age: number | string) => void;
    onCommentChange: (comment: string) => void;
    onSubmit: (event: React.FormEvent) => void;
}

const FormView: React.FC<FormViewProps> = ({
    name,
    email,
    age,
    comment,
    onNameChange,
    onEmailChange,
    onAgeChange,
    onCommentChange,
    onSubmit,
}) => {
    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}
        >
            <Typography variant="h6" component="h2" gutterBottom>
                Анкета
            </Typography>
            <TextField
                label="Имя"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Возраст"
                type="number"
                value={age}
                onChange={(e) => onAgeChange(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Комментарий"
                value={comment}
                onChange={(e) => onCommentChange(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Отправить
            </Button>
        </Box>
    );
};

export default FormView;
