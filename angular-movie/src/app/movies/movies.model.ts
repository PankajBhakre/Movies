export interface moviesCreationDTO{
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
}

export interface moviesDTO{
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
}