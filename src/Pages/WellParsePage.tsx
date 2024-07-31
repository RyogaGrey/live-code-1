import React from 'react';
import { Typography, Box } from '@mui/material';
import Carousel from '../Components/Projects/Carousel';
import ReportTable from '../Components/ReportTable/ReportTable';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import BarWithSearch from '../Components/Bar/BarWithSearch';
import { useWellParse } from '../Funcs/useWellParse';

const WellParsePage: React.FC = () => {
    const {
        projectArray,
        selectedProjectName,
        selectedProjectId,
        siteArray,
        wellArray,
        selectedWellId,
        isLoading,
        error,
        ProjectSelect,
        WellSelect,
    } = useWellParse();

    return (
        <Box>
            <BarWithSearch projectArray={projectArray} ProjectSelect={ProjectSelect} />

            <Box sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>{selectedProjectName}</Typography>

                {error && <Typography color="error">{error}</Typography>}
                {isLoading ? (
                    <Typography>Загрузка...</Typography>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box sx={{ flexGrow: 1, overflowX: 'auto', mr: 2, minWidth: 0 }}>
                            <Carousel wellArray={wellArray} onWellSelect={WellSelect} selectedWellId={selectedWellId} />
                        </Box>
                        <Box sx={{ width: '300px' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar />
                            </LocalizationProvider>
                        </Box>
                    </Box>
                )}

                <ReportTable selectedWellId={selectedWellId} />
            </Box>
        </Box>
    );
};

export default WellParsePage;
