import React, { useMemo, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { fetchWells } from '../Funcs/apiService'; // Импорт функции для получения отчетов

interface Report {
    type: string;
    date: string;
    number: number;
    description: string;
    event: string;
}

interface ReportTableProps {
    selectedWellId: string;
}

const ReportTable: React.FC<ReportTableProps> = ({ selectedWellId }) => {
    const [reportArray, setReportArray] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedWellId) {
            fetchReportArray();
        }
    }, [selectedWellId]);

    const fetchReportArray = async () => {
        setIsLoading(true);
        try {
            const reports = await fetchWells(selectedWellId);
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
