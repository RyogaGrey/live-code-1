import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { fetchEvents } from '../../Funcs/apiService';
import { IWellCardProps, IEvent } from '../../Data/types';

const WellCard: React.FC<IWellCardProps> = ({ siteName, wellCommonName, reason, spudDate, wellId, onSelect, isSelected }) => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchWellEvents = async () => {
            try {
                setIsLoading(true);
                const events = await fetchEvents(wellId);
                setEvents(events);
                console.log("Events for wellId:", wellId, events);
            } catch (error) {
                setError((error as Error).message);
                console.error('Ошибка при получении мероприятий:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWellEvents();
    }, [wellId]);

    return (
        <Card
            onClick={() => onSelect(wellId)}
            sx={{ border: isSelected ? '2px solid blue' : 'none', cursor: 'pointer', width: 300, flexShrink: 0 }}
        >
            <CardContent>
                <Typography variant="h6">Куст: {siteName}</Typography>
                <Typography variant="body1">Скважина: {wellCommonName}</Typography>
                <Typography variant="body2">Причина: {reason}</Typography>
                <Typography variant="body2">Дата забуривания: {spudDate}</Typography>
                {error && <Typography color="error">{error}</Typography>}
                {isLoading ? (
                    <Typography>Загрузка мероприятий...</Typography>
                ) : (
                    <Box>
                        {events.map((event) => (
                            <Typography key={event.eventId} variant="body2">
                                Мероприятие: {event.eventCode}
                            </Typography>
                        ))}
                    </Box>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Узнать больше
                </Button>
            </CardActions>
        </Card>
    );
};

export default WellCard;
