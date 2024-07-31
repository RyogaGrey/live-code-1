import { useState, useEffect } from 'react';
import { fetchProjects, fetchSites, fetchWells } from './apiService';
import { IProject, ISite, IWell } from '../Data/types';

export const useWellParse = () => {
    const [projectArray, setProjectArray] = useState<IProject[]>([]);
    const [selectedProjectName, setSelectedProjectName] = useState<string>('Проекты');
    const [selectedProjectId, setSelectedProjectId] = useState<string>('');
    const [siteArray, setSiteArray] = useState<ISite[]>([]);
    const [wellArray, setWellArray] = useState<IWell[]>([]);
    const [selectedWellId, setSelectedWellId] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProjectArray();
    }, []);

    const fetchProjectArray = async () => {
        try {
            const projects = await fetchProjects();
            console.log("Projects:", projects); // Debug
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
            console.log("Sites:", sites); // Debug
            setSiteArray(sites);

            if (sites.length > 0) {
                const siteIds = sites.map((site: ISite) => site.siteId).join(',');
                console.log("siteIds:", siteIds); // Debug
                const wells = await fetchWells(siteIds);
                console.log("Wells:", wells); // Debug
                setWellArray(wells);
            } else {
                setWellArray([]);
            }
        } catch (error) {
            setError((error as Error).message);
            console.error('Ошибка при получении кустов или скважин:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const WellSelect = (wellId: string) => {
        setSelectedWellId(wellId);
    };

    return {
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
    };
};