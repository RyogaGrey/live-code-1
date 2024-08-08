import React, { useMemo } from 'react';
import MaterialReactTable, { MRT_ColumnDef, MRT_RowSelectionState } from 'material-react-table';

// TODO: Интерфейс для пользователя переместить к остальным
interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface IUserTableProps {
  data: IUser[];
  onRowSelect: (row: IUser) => void;
}

// Компонент таблицы пользователей
const UserTable: React.FC<IUserTableProps> = ({ data, onRowSelect }) => {
  const columns = useMemo<MRT_ColumnDef<IUser>[]>(() => [
    {
      accessorKey: 'name',
      header: 'Имя',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Роль',
    },
  ], []);

  // Состояние выбора строки
  const [rowSelection, setRowSelection] = React.useState<MRT_RowSelectionState>({});

  // Обработчик изменения выбора строки
  const handleRowSelectionChange = (newRowSelection: MRT_RowSelectionState) => {
    setRowSelection(newRowSelection);
    const selectedRowIndex = Object.keys(newRowSelection)[0];
    if (selectedRowIndex !== undefined) {
      onRowSelect(data[parseInt(selectedRowIndex, 10)]);
    }
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      state={{ rowSelection }}
      onRowSelectionChange={handleRowSelectionChange}
      enableRowSelection 
    />
  );
};

export default UserTable;