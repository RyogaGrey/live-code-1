import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Carousel from '../Components/Carousel';
import ReportTable from '../Components/ReportTable';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { fetchProjects, fetchSites, fetchWells } from '../Funcs/apiService';
import BarWithSearch from '../Components/BarWithSearch';
import WellCard from '../Components/WellCard';
import { Project, Site, Well } from '../Data/types';

const WellParsePage: React.FC = () => {
    const [projectArray, setProjectArray] = useState<Project[]>([]);
    const [selectedProjectName, setSelectedProjectName] = useState<string>('Проекты');
    const [selectedProjectId, setSelectedProjectId] = useState<string>('');
    const [siteArray, setSiteArray] = useState<Site[]>([]);
    const [wellArray, setWellArray] = useState<Well[]>([]);
    const [selectedWellId, setSelectedWellId] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProjectArray();
    }, []);

    const fetchProjectArray = async () => {
        try {
            const projects = await fetchProjects();
            setProjectArray(projects);
        } catch (error) {
            setError((error as Error).message);
            console.error('Ошибка при получении проектов:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const ProjectSelect = async (projectName: string, projectId: string) => {
        setSelectedProjectName(projectName);
        setSelectedProjectId(projectId);
        try {
            setIsLoading(true);
            const sites = await fetchSites(projectId);
            setSiteArray(sites);
        } catch (error) {
            setError((error as Error).message);
            console.error('Ошибка при получении кустов:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const SiteSelect = async (siteIds: string) => {
        try {
            setIsLoading(true);
            const wells = await fetchWells(siteIds);
            setWellArray(wells);
        } catch (error) {
            setError((error as Error).message);
            console.error('Ошибка при получении скважин:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const WellSelect = (wellId: string) => {
        setSelectedWellId(wellId);
    };

    return (
        <Box>
            <BarWithSearch projectArray={projectArray} ProjectSelect={ProjectSelect} />

            <Box sx={{ p: 2 }}>

                <Typography variant="h5" sx={{ mb: 2 }}>{selectedProjectName}</Typography>

                {error && <Typography color="error">{error}</Typography>}
                {isLoading ? (
                    <Typography>Загрузка...</Typography>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

                        <Carousel wellArray={wellArray} />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                    </Box>
                )}

                <ReportTable selectedWellId={selectedWellId} />
            </Box>
        </Box>
    );
};

export default WellParsePage;
