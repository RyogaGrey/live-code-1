import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { fetchReports } from '../../Funcs/apiService';
import { Reporterer } from '../../Data/ReportInter';

const ReportList: React.FC = () => {
    const [reports, setReports] = useState<Reporterer[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchReports('someWellId');
                setReports(data);
            } catch (err) {
                setError('Ошибка при получении данных отчёта');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Box>
            <Typography variant="h6">Список отчётов</Typography>
            {isLoading && <Typography>Загрузка...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            <ul>
                {reports.map((report) => (
                    <li key={report.reportJournalId}>
                        {report.dateReport}: {report.description}
                    </li>
                ))}
            </ul>
            <Button onClick={() => console.log(reports)}>Печать данных отчёта</Button>
        </Box>
    );
};

export default ReportList;
