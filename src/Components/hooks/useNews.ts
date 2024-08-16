import { useState, useEffect } from 'react';
import axios from 'axios';

export const useNews = () => {
    const [news, setNews] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: 'ru',
                        apiKey: '329a7e8412d4429bbdd532a2ed84c195',
                    },
                });

                const firstArticle = response.data.articles[0];
                setNews(firstArticle.title);
                setLoading(false);
            } catch (err) {
                setError('Не удалось загрузить новость');
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return { news, loading, error };
};
