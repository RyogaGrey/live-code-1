import React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DatePickerComponent = ({ /*name, control, label, rules*/ }) => {
  return ({}
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            {...field}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!error}
                helperText={error ? error.message : null}
                fullWidth
                margin="dense"
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
