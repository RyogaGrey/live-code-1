// Form.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@mui/material';
import TextFieldComponent from '../Components/TextFieldComponent';
import DatePickerComponent from '../Components/DatePickerComponent';

interface FormData {
  name: string;
  birthDate: Date | null;
  zodiacSign: string;
  address: string;
  phone: string;
  email: string;
  bestFriend: string;
  hobby: string;
  secretWish: string;
  crush: string;
  thoughtsAboutMe: string;
}

const Form: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      birthDate: null,
      zodiacSign: '',
      address: '',
      phone: '',
      email: '',
      bestFriend: '',
      hobby: '',
      secretWish: '',
      crush: '',
      thoughtsAboutMe: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Survey Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldComponent name="name" control={control} label="Name and Surname" rules={{ required: 'Name is required' }} />
        <DatePickerComponent name="birthDate" control={control} label="Birthday" rules={{ required: 'Birth date is required' }} />
        <TextFieldComponent name="zodiacSign" control={control} label="Zodiac Sign" />
        <TextFieldComponent name="address" control={control} label="Address" />
        <TextFieldComponent name="phone" control={control} label="Phone Number" rules={{ required: 'Phone number is required' }} />
        <TextFieldComponent name="email" control={control} label="Email, ICQ, Skype" rules={{ required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Entered value does not match email format' } }} />
        <TextFieldComponent name="bestFriend" control={control} label="Best Friends" />
        <TextFieldComponent name="hobby" control={control} label="Hobby" />
        <TextFieldComponent name="secretWish" control={control} label="Secret Wish" />
        <TextFieldComponent name="crush" control={control} label="Crush" />
        <TextFieldComponent name="thoughtsAboutMe" control={control} label="What You Think About Me" />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
