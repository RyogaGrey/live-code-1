import React from 'react';
import { Button, Box } from '@mui/material';

interface Project {
    projectId: string;
    projectName: string;
}

interface ProjectListProps {
    projectArray: Project[];
    onProjectSelect: (projectName: string, projectId: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projectArray, onProjectSelect }) => {
    return (
        <Box>
            {projectArray.map((project) => (
                <Button key={project.projectId} color="inherit" onClick={() => onProjectSelect(project.projectName, project.projectId)}>
                    {project.projectName}
                </Button>
            ))}
        </Box>
    );
};

export default ProjectList;
