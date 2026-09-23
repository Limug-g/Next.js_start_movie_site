import { SearchLayout } from "@/components/layouts/SearchLayout";
import { MovieItem } from "@/components/MovieItem";
import { fetchSearchMovies } from "@/lib/movie.server";

export default function SearchPage({movies}) {
   return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>;

export async function getServerSideProps({ query }) {
  const searchQuery = typeof query.q === "string" ? query.q : "";
  const movies = searchQuery ? await fetchSearchMovies(searchQuery) : [];

  return {
    props: { movies },
  };
}