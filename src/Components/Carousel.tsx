import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';

interface CarouselProps {
    wellArray: {
        wellId: string;
        wellCommonName: string;
        reason: string;
        spudDate: string;
        siteId: string; }[];
}

const Carousel: React.FC<CarouselProps> = ({ wellArray }) => {
    return (
        <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2 }}>
            {wellArray.map((well) => (
                <Card key={well.wellId} sx={{ width: 300, flexShrink: 0 }}>
                    <CardContent>
                        <Typography variant="h6">Куст: {well.wellCommonName}</Typography>
                        <Typography variant="subtitle1">Скважина: {well.wellId}</Typography>
                        <Typography variant="body2">Ствол: {well.wellCommonName}</Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                            <Button variant="outlined" size="small">БУР</Button>
                            <Button variant="outlined" size="small">БМР</Button>
                            <Button variant="outlined" size="small">ОСВ</Button>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button size="small">ПЛАН</Button>
                        <Button size="small">ВСЕ ОТЧЕТЫ</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};

export default Carousel;
