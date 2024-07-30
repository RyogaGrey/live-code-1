import axiosInstance from '../Configs/axiosConfig';

interface AxiosErrorWithResponse extends Error {
    response?: {
        data?: {
            message?: string;
        };
    };
}

export const fetchProjects = async () => {
    try {
        const response = await axiosInstance.get('/Universal/CdProjectSource?fields=projectName,projectId');
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosErrorWithResponse;
        throw new Error(axiosError.response?.data?.message || 'Ошибка при получении проектов');
    }
};

export const fetchSites = async (projectId: string) => {
    try {
        const response = await axiosInstance.get(`/Universal/CdSiteSource/projectId/${projectId}/?fields=projectId,siteId,siteName`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosErrorWithResponse;
        throw new Error(axiosError.response?.data?.message || 'Ошибка при получении кустов');
    }
};

export const fetchWells = async (siteIds: string) => {
    try {
        const response = await axiosInstance.get(`/Universal/CdWellSource/siteId/${siteIds}/?fields=siteId,wellCommonName,wellId,spudDate,reason`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosErrorWithResponse;
        throw new Error(axiosError.response?.data?.message || 'Ошибка при получении скважин');
    }
};

export const fetchEvents = async (wellId: string) => {
    try {
        const response = await axiosInstance.get(`/Universal/DmEventT/wellId/${wellId}/?fields=wellId,eventId,eventCode`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosErrorWithResponse;
        throw new Error(axiosError.response?.data?.message || 'Ошибка при получении мероприятий');
    }
};

export const fetchReports = async (wellId: string, eventIds: string[] = [], reportAlias: string = '') => {
    try {
        let url = `/Universal/DmReportJournal/wellId/${wellId}/`;
        if (eventIds.length > 0) {
            url += `eventId/${eventIds.join(',')}/`;
        }
        if (reportAlias) {
            url += `reportAlias/${reportAlias}/`;
        }

        const response = await axiosInstance.get(url, {
            params: { fields: 'eventCode,reportJournalId,wellId,wellboreId,dateReport,eventId,reportAlias,description,entityType,reportNo' }
        });
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosErrorWithResponse;
        throw new Error(axiosError.response?.data?.message || 'Ошибка при получении отчетов');
    }
};
