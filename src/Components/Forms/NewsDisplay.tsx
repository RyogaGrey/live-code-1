import React from 'react';

interface NewsDisplayProps {
    news: string;
    loading: boolean;
    error: string | null;
}

const NewsDisplay: React.FC<NewsDisplayProps> = ({ news, loading, error }) => {
    if (loading) {
        return <p>Загрузка новостей...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Последняя новость:</h2>
            <p>{news}</p>
        </div>
    );
};

export default NewsDisplay;
