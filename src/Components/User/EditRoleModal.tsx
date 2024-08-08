import React, { useState } from 'react';
import { Modal, TextField, Button, Typography } from '@mui/material';

// Интерфейс для пропсов компонента
interface IEditRoleModalProps {
  isOpen: boolean;
  role: string;
  onClose: () => void;
  onSave: (newRole: string) => void;
}

// Компонент модального окна для редактирования роли
const EditRoleModal: React.FC<IEditRoleModalProps> = ({
  isOpen,
  role,
  onClose,
  onSave,
}) => {
  const [newRole, setNewRole] = useState<string>(role);

  const handleSave = () => {
    onSave(newRole);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <div style={{ padding: '20px', backgroundColor: 'white', margin: '100px auto', maxWidth: '400px' }}>
        <Typography variant="h6">Изменить роль пользователя</Typography>
        <TextField
          label="Роль"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Сохранить
        </Button>
      </div>
    </Modal>
  );
};

export default EditRoleModal;