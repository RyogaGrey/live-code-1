import { useState, useEffect } from 'react';
import { fetchProjects, fetchSites, fetchWells, fetchEvents, fetchReports } from '../Funcs/apiService';
import { IProject, ISite, IWell, IEvent, IReport } from '../Data/types';

const useDataLoader = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [sites, setSites] = useState<ISite[]>([]);
    const [wells, setWells] = useState<IWell[]>([]);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [reports, setReports] = useState<IReport[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const loadProjects = async () => {
        try {
            setIsLoading(true);
            const data = await fetchProjects();
            setProjects(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const loadSites = async (projectId: string) => {
        try {
            setIsLoading(true);
            const data = await fetchSites(projectId);
            setSites(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const loadWells = async (siteIds: string) => {
        try {
            setIsLoading(true);
            const data = await fetchWells(siteIds);
            setWells(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const loadEvents = async (wellId: string) => {
        try {
            setIsLoading(true);
            const data = await fetchEvents(wellId);
            setEvents(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const loadReports = async (wellId: string, eventIds: string[] = [], reportAlias: string = '') => {
        try {
            setIsLoading(true);
            const data = await fetchReports(wellId, eventIds, reportAlias);
            setReports(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        projects, sites, wells, events, reports,
        isLoading, error, loadProjects, loadSites, loadWells, loadEvents, loadReports
    };
};

export default useDataLoader;
