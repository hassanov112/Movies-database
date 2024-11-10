import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Chip from '@/components/Chip';
import Rating from '@/components/Rating/Rating';
import WebsiteIcon from '@/components/Icons/Website.svg';
import IMDBIcon from '@/components/Icons/IMDB.svg';

import type { Movie, MovieDetails } from '#types/index';

import './Details.css';
import { useQuery } from '@tanstack/react-query';

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY: string = import.meta.env.VITE_TMDB_API_TOKEN;

function MoviesDetails() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { movie }: { movie: Movie } = location.state || {};

  const { data: movieDetails } = useQuery({
    queryKey: [`MovieDetails${id}`],
    queryFn: async (): Promise<MovieDetails> => {
      const response = await fetch(`${BASE_URL}/movie/${id}`, {
        headers: { authorization: `Bearer ${API_KEY}`, accept: 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      return response.json();
    },
  });

  useEffect(() => {
    if (movie) document.title = movie.title;
  }, [movie]);

  return (
    <div className="detail-page">
      <div
        className="movie-banner"
        style={
          {
            '--movie-backdrop': `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          } as React.CSSProperties
        }
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <img
            id="poster"
            className="poster"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="info">
            <h1 className="movie_title">
              {movie.title}
              {!!movieDetails?.homepage && (
                <a href={movieDetails?.homepage} target="_blank" rel="noopener" aria-label={`${movie.title}s homepage`}>
                  <WebsiteIcon />
                </a>
              )}
              {!!movieDetails?.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${movie.title}s IMDB page`}
                >
                  <IMDBIcon />
                </a>
              )}
            </h1>

            <div className="info-bullets">
              <span>{new Date(movie.release_date).toLocaleDateString()}</span>
              <div className="vl" />
              {movieDetails?.genres.map((genre, index) => <Chip label={genre.name} key={index}></Chip>)}
              {!!movieDetails?.runtime && (
                <>
                  <div className="vl" />
                  <span>
                    {Math.floor(movieDetails?.runtime / 60)}h {movieDetails?.runtime % 60} mintues
                  </span>
                </>
              )}
            </div>

            <Rating rating={movie.vote_average} ratingCount={movie.vote_count}></Rating>
            <h2 className="tagline">{movieDetails?.tagline}</h2>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <div className="budget">
              {!!movieDetails?.budget && (
                <span>
                  <h4>Budget</h4>
                  <p>{movieDetails.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </p>
                </span>
              )}
              {!!movieDetails?.revenue && (
                <span>
                  <h4>Revenue</h4>
                  <p>{movieDetails.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </p>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Production Companies</h2>
        {!!movieDetails?.production_companies.length ? (
          <span className="production-companies">
            {movieDetails.production_companies.map((company, index) => (
              <span className="production-company" key={index}>
                {company.logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                    alt={company.name}
                    className="company-logo"
                  />
                )}
                <span>
                  {company.name} ({company.origin_country})
                </span>
              </span>
            ))}
          </span>
        ) : (
          <h3>There is no data about production companies!</h3>
        )}
      </div>
    </div>
  );
}

export default MoviesDetails;
