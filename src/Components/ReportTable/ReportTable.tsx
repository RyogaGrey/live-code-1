import React, { useMemo, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';
import { useReportTable } from '../../Funcs/useReportTable';
import { IReport, IReportTableProps } from '../../Data/types';
import ReportTableDisplay from './ReportTableDisplay';
import CreateReportModal from '../../Funcs/сreateReport';

const ReportTable: React.FC<IReportTableProps> = ({ selectedWellId }) => {
    const { reportArray, isLoading, error, addReport } = useReportTable(selectedWellId);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const columns = useMemo<MRT_ColumnDef<IReport>[]>(() => [
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

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Отчеты</Typography>
            <Button variant="contained" onClick={handleOpenModal}>
                Создать отчёт
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            {isLoading ? (
                <Typography>Загрузка...</Typography>
            ) : (
                <ReportTableDisplay columns={columns} data={reportArray} />
            )}
            <CreateReportModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                addReport={addReport}
                selectedWellId={selectedWellId}
            />
        </Box>
    );
};

export default ReportTable;
