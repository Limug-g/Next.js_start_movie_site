import { MovieDetail } from "@/components/MovieDetail";
import { fetchOneMovie } from "@/lib/movie.server";

export default function MoviePage({ movie }) {
  // const router = useRouter();
  // const { id } = router.query ?? {};
  // console.log("id", id);

  // if (typeof id !== "string") return <div>Loading ...</div>;

  // const movie = movies.find((m) => m.id === Number(id));
  // if (!movie) return <div>영화 정보를 찾을 수 없습니다.</div>;

  return <MovieDetail {...movie} />;
}
export async function getServerSideProps({ params }) {
  const movieId = Number(params.id);
  if (!Number.isInteger(movieId) || movieId <= 0) {
    return { notFound: true };
  }

  const movie = await fetchOneMovie(movieId);
  if (!movie) {
    return { notFound: true };
  }

  return { props: { movie } };
}
