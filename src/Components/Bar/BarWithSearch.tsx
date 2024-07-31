import React from 'react';
import { AppBar, Toolbar, Button, Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProjectList from './ProjectList';
import { IBarWithSearchProps } from '../../Data/types';

const BarWithSearch: React.FC<IBarWithSearchProps> = ({ projectArray, ProjectSelect }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" href="/home">HOME</Button>
                <ProjectList projectArray={projectArray} onProjectSelect={ProjectSelect} />
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SearchIcon />
                    <TextField placeholder="Search..." variant="outlined" size="small" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default BarWithSearch;
