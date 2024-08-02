import axios from 'axios';
import fs from 'fs';
import path from 'path';

// Определяем путь к JSON-файлу
const requestUrlsPath = path.join(__dirname, 'requestUrls.json');

// Функция для добавления URL в JSON-файл
const logRequestUrl = (url: string) => {
    try {
        const fileContent = fs.readFileSync(requestUrlsPath, 'utf-8');
        const jsonContent = JSON.parse(fileContent);
        jsonContent.urls.push(url);
        fs.writeFileSync(requestUrlsPath, JSON.stringify(jsonContent, null, 2));
    } catch (error) {
        console.error('Ошибка при записи URL в JSON:', error);
    }
};

// Функция для получения всех reportJournalIds
export const fetchReportJournalIds = async (): Promise<string[]> => {
    const url = 'https://edmrest.emeryone.com/Universal/DmReportJournal/';
    logRequestUrl(url);
    const response = await axios.get(url);
    return response.data.map((entry: { reportJournalId: string }) => entry.reportJournalId);
};

// Функция для получения всех dailyIds для заданного reportJournalId
export const fetchDailyIds = async (reportJournalId: string): Promise<string[]> => {
    const url = `https://edmrest.emeryone.com/Universal/DmDailyT/reportJournalId/${reportJournalId}`;
    logRequestUrl(url);
    const response = await axios.get(url);
    return response.data.map((entry: { dailyId: string }) => entry.dailyId);
};

// Функция для получения данных по wellId, wellboreId и dailyId
export const fetchActivityData = async (wellId: string, wellboreId: string, dailyId: string): Promise<any> => {
    const url = `https://edmrest.emeryone.com/Universal/DmActivityT/wellId/${wellId}/wellboreId/${wellboreId}/dailyId/${dailyId}`;
    logRequestUrl(url);
    const response = await axios.get(url);
    return response.data;
};

// Функция для получения всех eventIds для заданного wellId
export const fetchEventIds = async (wellId: string): Promise<string[]> => {
    const url = `https://edmrest.emeryone.com/Universal/DmEventT/wellId/${wellId}`;
    logRequestUrl(url);
    const response = await axios.get(url);
    return response.data.map((entry: { eventId: string }) => entry.eventId);
};

// Функция для получения данных по wellId, wellboreId и eventId
export const fetchOperEquipFailData = async (wellId: string, wellboreId: string, eventId: string): Promise<any> => {
    const url = `https://edmrest.emeryone.com/Universal/DmOperEquipFailT/wellId/${wellId}/wellboreId/${wellboreId}/eventId/${eventId}`;
    logRequestUrl(url);
    const response = await axios.get(url);
    return response.data;
};

// Функция для получения данных по eventId
export const fetchBulkData = async (eventId: string): Promise<any> => {
    const url = `https://edmrest.emeryone.com/Universal/DmBulkT/eventId/${eventId}`;
    logRequestUrl(url);
    const response = await axios.get(url);
    return response.data;
};
