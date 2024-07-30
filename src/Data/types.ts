export interface Project {
    projectId: string;
    projectName: string;
}

export interface Site {
    siteId: string;
    siteName: string;
}

export interface WellEventsProps {
    wellId: string;
    onEventsLoaded: (hasEvents: boolean) => void;
}

export interface Well {
    wellId: string;
    wellCommonName: string;
    reason: string;
    spudDate: string;
    siteId: string;
}

export interface Event {
    wellId: string;
    eventId: string;
    eventCode: string;
}

export interface Report {
    type: string;
    date: string;
    number: number;
    description: string;
    event: string;
}

export interface BarWithSearchProps {
    projectArray: Project[];
    ProjectSelect: (projectName: string, projectId: string) => void;
}


export interface ReportTableProps {
    selectedWellId: string;
}


export interface CarouselProps {
    wellArray: Well[];
}

export interface WellCardProps {
    siteName: string;
    wellCommonName: string;
    reason: string;
    spudDate: string;
    wellId: string;
    onSelect: (wellId: string) => void;
    isSelected: boolean;
}

export interface ProjectListProps {
    projectArray: Project[];
    onProjectSelect: (projectName: string, projectId: string) => void;
}
