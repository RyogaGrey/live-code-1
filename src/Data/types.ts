export interface IProject {
    projectId: string;
    projectName: string;
}

export interface ISite {
    siteId: string;
    siteName: string;
}

export interface IWellEventsProps {
    wellId: string;
    onEventsLoaded: (hasEvents: boolean) => void;
}

export interface IWell {
    wellId: string;
    wellCommonName: string;
    reason: string;
    spudDate: string;
    siteId: string;
}

export interface IEvent {
    wellId: string;
    eventId: string;
    eventCode: string;
}

export interface IReport {
    type: string;
    date: string;
    number: number;
    description: string;
    event: string;
}

export interface IBarWithSearchProps {
    projectArray: IProject[];
    ProjectSelect: (projectName: string, projectId: string) => void;
}


export interface IReportTableProps {
    selectedWellId: string;
}

export interface ICarouselProps {
    wellArray: IWell[];
    selectedWellId: string;
    onWellSelect: (wellId: string) => void;
}


export interface IWellCardProps {
    siteName: string;
    wellCommonName: string;
    reason: string;
    spudDate: string;
    wellId: string;
    onSelect: (wellId: string) => void;
    isSelected: boolean;
}

export interface IProjectListProps {
    projectArray: IProject[];
    onProjectSelect: (projectName: string, projectId: string) => void;
}

export interface IWellParsePageProps {
    projectArray: IProject[];
    selectedProjectName: string;
    selectedProjectId: string;
    siteArray: ISite[];
    wellArray: IWell[];
    selectedWellId: string;
    isLoading: boolean;
    error: string | null;
    onProjectSelect: (projectName: string, projectId: string) => void;
    onWellSelect: (wellId: string) => void;
}

export const REPORT_TYPE = [
    { type: "Суточный", alias: "DDR" },
    { type: "Крепление", alias: "CASING" },
    { type: "Цементирование", alias: "GEN_CMT" },
    { type: "Планирование", alias: "GEN_PLAN" },
  ];