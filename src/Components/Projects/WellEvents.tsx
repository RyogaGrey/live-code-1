import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchEvents } from '../../Funcs/apiService';
import { IEvent, IWellEventsProps } from '../../Data/types';

const WellEvents: React.FC<IWellEventsProps> = ({ wellId }) => {
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
        <Box>
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
        </Box>
    );
};

export default WellEvents;
