import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import EditRoleModal from './EditRoleModal';

// TODO: Интерфейс для пользователя переместить к остальным
interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UserTableContainer: React.FC = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [selectedRow, setSelectedRow] = useState<IUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        const users = data.results.map((user: any, index: number) => ({
          id: index,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          role: 'User', // Изначально у всех роль "User"
        }));
        setData(users);
      });
  }, []);

  const RowSelection = (row: IUser) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const RoleChange = (newRole: string) => {
    if (selectedRow) {
      setData((prevData) =>
        prevData.map((user) =>
          user.id === selectedRow.id ? { ...user, role: newRole } : user
        )
      );
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <UserTable data={data} onRowSelect={RowSelection} />
      {selectedRow && (
        <EditRoleModal
          isOpen={isModalOpen}
          role={selectedRow.role}
          onClose={() => setIsModalOpen(false)}
          onSave={RoleChange}
        />
      )}
    </div>
  );
};

export default UserTableContainer;
