import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';

import Rating from '@/components/Rating';
import PageSelector from '#components/PageSelector';

import type { Movie } from '#types/index';

import './Movies.css';

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY: string = import.meta.env.VITE_TMDB_API_TOKEN;

function addViewTransitionNames(movie: Movie) {
  const img = document.querySelector(`#img-${movie.id}`) as HTMLElement;
  const rating = document.querySelector(`#rating-${movie.id}`) as HTMLElement;
  const title = document.querySelector(`#title-${movie.id}`) as HTMLElement;

  img.style.viewTransitionName = 'poster';
  rating.style.viewTransitionName = 'rating';
  title.style.viewTransitionName = 'title';
}

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get('page')!) || 1;
  const goToPage = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [`popularMovies${page}`],
    queryFn: async (): Promise<{ results: Movie[]; total_pages: number }> => {
      const response = await fetch(`${BASE_URL}/movie/popular?page=${page}`, {
        headers: { authorization: `Bearer ${API_KEY}`, accept: 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      return response.json();
    },
  });

  useEffect(() => {
    document.title = 'Movies list';
  }, []);

  if (isLoading) return <div>Laddar...</div>;
  if (error) return <div>Ett fel inträffade!</div>;

  return (
    <>
      <h1>Populära Filmer</h1>
      <div className="movie-list">
        {data?.results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/${movie.id}`} state={{ movie }} onClick={() => addViewTransitionNames(movie)} viewTransition>
              <div className="image-container">
                <img
                  id={`img-${movie.id}`}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="overlay">
                  <p>{movie.overview}</p>
                </div>
              </div>
              <div className="movie-info">
                <Rating id={`rating-${movie.id}`} rating={movie.vote_average} ratingCount={movie.vote_count}></Rating>
                <h3 id={`title-${movie.id}`}>{movie.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <PageSelector currentPage={page} totalPages={data!.total_pages} onPageChange={goToPage}></PageSelector>
    </>
  );
}

export default Movies;
