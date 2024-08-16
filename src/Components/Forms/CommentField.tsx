import React from 'react';
import { TextField } from '@mui/material';

interface CommentFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommentField: React.FC<CommentFieldProps> = ({ value, onChange }) => {
    return (
        <TextField
            label="Комментарий"
            value={value}
            onChange={onChange}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
        />
    );
};

export default CommentField;
