export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface MovieDetails {
  adult: boolean;
  budget: number;
  homepage: string;
  id: string;
  imdb_id: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
  release_date: string;
  revenue: number;
  runtime: number;
  vote_average: number;
  vote_count: number;
  tagline: string;
  production_companies: ProductionCompany[];
}
