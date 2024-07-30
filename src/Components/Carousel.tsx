import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { CarouselProps } from '../Data/types';
import WellCard from './WellCard';

const Carousel: React.FC<CarouselProps> = ({ wellArray }) => {
    const Select = (wellIDT: string) => {
        console.log('$Выбран {wellID}')
    };

    return (
        <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, p: 2 }}>
            {wellArray.map((well) => (
                <WellCard
                    key={well.wellId}
                    siteName={well.siteId}
                    wellCommonName={well.wellCommonName}
                    reason={well.reason}
                    spudDate={well.spudDate}
                    wellId={well.wellId}
                    onSelect={Select}
                    isSelected={false} // можно добавить логику для определения, является ли скважина выбранной
                />
            ))}
        </Box>
    );
};

export default Carousel;
