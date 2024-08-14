import React, { useContext } from 'react';
import { FormContext } from './FormContext';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer, Typography } from '@mui/material';

const FormTable: React.FC = () => {
    const { surveyData } = useContext(FormContext)!;

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ textAlign: 'center', mt: 2 }}>
                Список анкет
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Имя</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Возраст</TableCell>
                        <TableCell>Комментарий</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {surveyData.map((row: any, index: any) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.comment}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FormTable;
