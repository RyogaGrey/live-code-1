import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ICarouselProps } from '../../Data/types';
import WellCard from './WellCard';

const Carousel: React.FC<ICarouselProps> = ({ wellArray }) => {
    const [selectedWellId, setSelectedWellId] = useState<string>('');

    const Selected = (wellId: string) => {
        console.log(`Выбран ${wellId}`);
        setSelectedWellId(wellId);
    };

    return (
        <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, p: 2 }}>
            {wellArray.length > 0 ? (
                wellArray.map((well) => (
                    <WellCard
                        key={well.wellId}
                        siteName={well.siteId}
                        wellCommonName={well.wellCommonName}
                        reason={well.reason}
                        spudDate={well.spudDate}
                        wellId={well.wellId}
                        onSelect={Selected}
                        isSelected={well.wellId === selectedWellId}
                    />
                ))
            ) : (
                <Typography>Нет доступных скважин</Typography>
            )}
        </Box>
    );
};

export default Carousel;
