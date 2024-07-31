import { useState, useEffect } from 'react';
import { fetchReports } from './apiService';
import { IReport } from '../Data/types';

export const useReportTable = (selectedWellId: string) => {
    const [reportArray, setReportArray] = useState<IReport[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedWellId) {
            fetchReportArray(selectedWellId);
        }
    }, [selectedWellId]);

    const fetchReportArray = async (wellId: string) => {
        setIsLoading(true);
        try {
            const reports = await fetchReports(wellId);
            setReportArray(reports);
        } catch (error) {
            setError((error as Error).message);
            console.error('Ошибка при получении отчетов:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const addReport = (newReport: IReport) => {
        setReportArray((prevReports) => [newReport, ...prevReports]);
    };

    const placeholders: IReport[] = [
        { type: 'Суточный', date: '----', number: 0, description: 'Описание', event: 'Мероприятие' },
        { type: 'Суточный', date: '----', number: 1, description: 'Описание', event: 'Мероприятие' },
        { type: 'Суточный', date: '----', number: 2, description: 'Описание', event: 'Мероприятие' },
    ];

    return {
        reportArray: reportArray.length > 0 ? reportArray : placeholders,
        isLoading,
        error,
        addReport,
    };
};
