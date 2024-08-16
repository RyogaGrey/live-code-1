import React from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';

interface SelectFieldProps {
    options: string[];
    selectedOption: string;
    onChange: (newOption: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ options, selectedOption, onChange }) => {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel>Выберите опцию</InputLabel>
            <Select value={selectedOption} onChange={(e) => onChange(e.target.value)}>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectField;
