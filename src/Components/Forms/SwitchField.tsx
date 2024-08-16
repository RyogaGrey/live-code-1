import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

interface SwitchFieldProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const SwitchField: React.FC<SwitchFieldProps> = ({ checked, onChange }) => {
    return (
        <FormControlLabel
            control={<Switch checked={checked} onChange={(e) => onChange(e.target.checked)} />}
            label={checked ? 'Включено' : 'Отключено'}
        />
    );
};

export default SwitchField;
