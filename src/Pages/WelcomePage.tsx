import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useUserContext } from '../Components/context/UserContext';
import NewsDisplay from '../Components/Forms/NewsDisplay'; // Компонент для отображения новостей

const WelcomePage: React.FC = () => {
    const { user } = useUserContext();

        // Simulated state for news, loading, and error
        const [news, setNews] = useState<string>('');
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);
    
        // Simulate fetching news
        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setNews('Сегодня замечательная погода!');
                setLoading(false);
            }, 2000); // Simulate a delay
    
            // Uncomment this to simulate an error case
            // setError('Ошибка при загрузке новостей');
        }, []);

    return (
        <Container maxWidth="sm">
            {user ? (
                <>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Привет, {user.fullName}!
                    </Typography>
                    <NewsDisplay news={news} loading={loading} error={error} />
                </>
            ) : (
                <Typography variant="h6" component="h1" gutterBottom>
                    Вы не авторизованы
                </Typography>
            )}
        </Container>
    );
};

export default WelcomePage;
