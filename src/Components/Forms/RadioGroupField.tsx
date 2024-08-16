import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface RadioGroupFieldProps {
    options: string[];
    selectedOption: string;
    onChange: (newOption: string) => void;
}

const RadioGroupField: React.FC<RadioGroupFieldProps> = ({ options, selectedOption, onChange }) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Выберите один</FormLabel>
            <RadioGroup value={selectedOption} onChange={(e) => onChange(e.target.value)}>
                {options.map((option) => (
                    <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioGroupField;
