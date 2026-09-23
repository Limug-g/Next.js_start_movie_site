import { SearchLayout } from "@/components/layouts/SearchLayout";
import * as styles from "@/styles/home.css.js";
import { MovieItem } from "@/components/MovieItem";
import { useEffect } from "react";
import { fetchMovies, fetchNowPlayingMovies } from "@/lib/movie.server";

export default function HomePage({ nowPlaying, allMovies, error }) {
  useEffect(() => {
    console.log("브라우저 실행: ", window.location.href);
  }, []);

  if (error) {
    return <p>영화 데이터를 불러오지 못했습니다.</p>;
  }

  return (
    <div className={styles.container}>
      <section>
        <h2>지금 상영 중인 영화</h2>
        <div className={styles.list}>
          {nowPlaying.map((movie) => (
            <MovieItem key={`now-playing-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h2>등록된 모든 영화</h2>
        <div className={styles.list}>
          {allMovies.map((movie) => (
            <MovieItem key={`all-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

HomePage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>;

//Next.js 서버에서만 실행됨 -> 백엔드 서버와 통신하고 위의 컴포넌트로 props 전달
export async function getServerSideProps({ req }) {
  console.log("서버에서 실행: ", req.url);
  try {
    const [nowPlaying, allMovies] = await Promise.all([
      fetchNowPlayingMovies(),
      fetchMovies(),
    ]);
    const nowPlayingIds = new Set(nowPlaying.map((movie) => movie.id));

    return {
      props: {
        nowPlaying: nowPlaying.slice(0, 6),
        allMovies: allMovies.filter((movie) => !nowPlayingIds.has(movie.id)),
        error: null,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        nowPlaying: [],
        allMovies: [],
        error: "BACKEND_UNAVILABLE",
      },
    };
  }
}
