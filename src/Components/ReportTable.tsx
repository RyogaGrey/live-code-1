import React, { useMemo, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { fetchReports } from '../Funcs/apiService';
import { Report, ReportTableProps } from '../Data/types';

const ReportTable: React.FC<ReportTableProps> = ({ selectedWellId }) => {
    const [reportArray, setReportArray] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedWellId) {
            fetchReportArray(selectedWellId);
        }
    }, [selectedWellId]);

    const fetchReportArray = async (wellId: string) => {
        setIsLoading(true);
        try {
            const reports = await fetchReports(wellId);
            setReportArray(reports);
        } catch (error) {
            setError((error as Error).message);
            console.error('Ошибка при получении отчетов:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const placeholders: Report[] = [
        { type: 'Суточный', date: '----', number: 0, description: 'Описание', event: 'Мероприятие' },
        { type: 'Суточный', date: '----', number: 1, description: 'Описание', event: 'Мероприятие' },
        { type: 'Суточный', date: '----', number: 2, description: 'Описание', event: 'Мероприятие' },
    ];

    const dataToDisplay = useMemo(() => (reportArray.length > 0 ? reportArray : placeholders), [reportArray]);

    const columns = useMemo<MRT_ColumnDef<Report>[]>(() => [
        {
            accessorKey: 'type',
            header: 'Тип',
        },
        {
            accessorKey: 'date',
            header: 'Дата',
        },
        {
            accessorKey: 'number',
            header: '№',
        },
        {
            accessorKey: 'description',
            header: 'Описание',
        },
        {
            accessorKey: 'event',
            header: 'Мероприятие',
        },
    ], []);

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Отчеты</Typography>
            {error && <Typography color="error">{error}</Typography>}
            {isLoading ? (
                <Typography>Загрузка...</Typography>
            ) : (
                <MaterialReactTable
                    columns={columns}
                    data={dataToDisplay}
                    enableSorting
                    enableColumnResizing
                    enableColumnFilters
                    enablePagination
                />
            )}
        </Box>
    );
};

export default ReportTable;
