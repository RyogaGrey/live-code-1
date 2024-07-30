import React from 'react';
import { Button, Box } from '@mui/material';
import { ProjectListProps } from '../Data/types';

const ProjectList: React.FC<ProjectListProps> = ({ projectArray, onProjectSelect }) => {
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
