import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Typography, MenuItem } from '@mui/material';
import { fetchSites, fetchWells } from '../Funcs/apiService';
import { IReport, ISite, IWell } from '../Data/types';

interface CreateReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    addReport: (report: IReport) => void;
    selectedWellId: string;
}

const CreateReportModal: React.FC<CreateReportModalProps> = ({ isOpen, onClose, addReport, selectedWellId }) => {
    const [newReport, setNewReport] = useState<IReport>({
        type: '',
        date: '',
        number: 0,
        description: '',
        event: '',
    });
    const [sites, setSites] = useState<ISite[]>([]);
    const [wells, setWells] = useState<IWell[]>([]);
    const [selectedSite, setSelectedSite] = useState<string>('');
    const [selectedWell, setSelectedWell] = useState<string>(selectedWellId);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedSites = await fetchSites(''); // Provide projectId or other parameters as needed
            setSites(fetchedSites);
            if (fetchedSites.length > 0) {
                const siteId = fetchedSites[0].siteId;
                setSelectedSite(siteId);
                const fetchedWells = await fetchWells(siteId);
                setWells(fetchedWells);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (selectedSite) {
                const fetchedWells = await fetchWells(selectedSite);
                setWells(fetchedWells);
            }
        };
        fetchData();
    }, [selectedSite]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewReport((prevReport) => ({ ...prevReport, [name]: value }));
    };

    const handleSave = () => {
        addReport(newReport);
        onClose();
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', maxWidth: 400 }}>
                <Typography variant="h6">Создать отчёт</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Тип"
                    name="type"
                    value={newReport.type}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Дата"
                    name="date"
                    type="date"
                    value={newReport.date}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="№"
                    name="number"
                    type="number"
                    value={newReport.number}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Описание"
                    name="description"
                    value={newReport.description}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Мероприятие"
                    name="event"
                    value={newReport.event}
                    onChange={handleChange}
                />
                <TextField
                    select
                    fullWidth
                    margin="normal"
                    label="Куст"
                    value={selectedSite}
                    onChange={(e) => setSelectedSite(e.target.value)}
                >
                    {sites.map((site: ISite) => (
                        <MenuItem key={site.siteId} value={site.siteId}>
                            {site.siteName}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    fullWidth
                    margin="normal"
                    label="Скважина"
                    value={selectedWell}
                    onChange={(e) => setSelectedWell(e.target.value)}
                >
                    {wells.map((well: IWell) => (
                        <MenuItem key={well.wellId} value={well.wellId}>
                            {well.wellCommonName}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="contained" onClick={handleSave}>
                        Сохранить
                    </Button>
                    <Button variant="outlined" onClick={onClose}>
                        Отмена
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CreateReportModal;
