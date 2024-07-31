import React from 'react';
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { IReport } from '../../Data/types';

interface ReportTableDisplayProps {
    columns: MRT_ColumnDef<IReport>[];
    data: IReport[];
}

const ReportTableDisplay: React.FC<ReportTableDisplayProps> = ({ columns, data }) => {
    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableSorting
            enableColumnResizing
            enableColumnFilters
            enablePagination
        />
    );
};

export default ReportTableDisplay;
