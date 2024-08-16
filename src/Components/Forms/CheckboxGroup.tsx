import React from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

interface CheckboxGroupProps {
    options: string[];
    selectedOptions: string[];
    onChange: (newSelection: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, selectedOptions, onChange }) => {
    const handleChange = (option: string) => {
        const newSelection = selectedOptions.includes(option)
            ? selectedOptions.filter((item) => item !== option)
            : [...selectedOptions, option];
        onChange(newSelection);
    };

    return (
        <FormControl component="fieldset">
            <FormGroup>
                {options.map((option) => (
                    <FormControlLabel
                        key={option}
                        control={
                            <Checkbox
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleChange(option)}
                            />
                        }
                        label={option}
                    />
                ))}
            </FormGroup>
        </FormControl>
    );
};

export default CheckboxGroup;
