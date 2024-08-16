import React from 'react';
import { Button } from '@mui/material';

interface FileUploadProps {
    onFileChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onFileChange(file);
    };

    return (
        <Button variant="contained" component="label">
            Загрузить файл
            <input type="file" hidden onChange={handleFileChange} />
        </Button>
    );
};

export default FileUpload;
