import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../Components/FormContext';
import FormView from '../Components/FormView';

const Form: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number | string>('');
    const [comment, setComment] = useState<string>('');

    const { addSurveyData } = useContext(FormContext)!;
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = {
            name,
            email,
            age,
            comment,
        };
        addSurveyData(formData);
        navigate('/table')
        //console.log('Form Data: ', formData); - Отладки для
    };

    return (
        <FormView
            name={name}
            email={email}
            age={age}
            comment={comment}
            onNameChange={setName}
            onEmailChange={setEmail}
            onAgeChange={setAge}
            onCommentChange={setComment}
            onSubmit={handleSubmit}
        />
    );
};

export default Form;
