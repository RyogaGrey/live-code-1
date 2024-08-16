import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface GenderSelectProps {
    value: string;
    onChange: (event: React.MouseEvent<HTMLElement>, newValue: string) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange }) => {
    return (
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={onChange}
            aria-label="gender"
        >
            <ToggleButton value="male">Мужской</ToggleButton>
            <ToggleButton value="female">Женский</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default GenderSelect;
