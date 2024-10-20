export interface Genre{
    id: number;
    name: string;
}

export interface MovieDetails{
    title:string;
    poster_path:string;
    release_date:string;
    genres:Genre[];   
    homepage:string;
}