import React from 'react';
import { Button, Box } from '@mui/material';
import { IProjectListProps } from '../../Data/types';

const ProjectList: React.FC<IProjectListProps> = ({ projectArray, onProjectSelect }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {projectArray.map((project) => (
                <Button key={project.projectId} color="inherit" onClick={() => onProjectSelect(project.projectName, project.projectId)}>
                    {project.projectName}
                </Button>
            ))}
        </Box>
    );
};

export default ProjectList;
