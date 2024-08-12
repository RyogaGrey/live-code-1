import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const TextFieldComponent = ({ name, control, label, rules }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          error={!!error}
          helperText={error ? error.message : null}
          fullWidth
          margin="dense"
        />
      )}
    />
  );
};

export default TextFieldComponent;
