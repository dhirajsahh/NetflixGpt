import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="bg-black">
      <h1 className="text-white text-2xl p-2">{title}</h1>

      <div className="flex gap-5 overflow-x-auto">
        {movies.map((item) => (
          <MovieCard key={item.id} src={item.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
