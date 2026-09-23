import { SearchLayout } from "@/components/layouts/SearchLayout";
import * as styles from "@/styles/home.css.js";
import movies from '@/mock/movies.json'
import { MovieItem } from "@/components/MovieItem";

export default function HomePage() {
  // const [recommendation, setRecommendation] = useState(null);

  // const fetchRecommendation = async () => {
  //   try {
  //     const res = await fetch("/api/recommend");
  //     if (!res.ok) {
  //       throw new Error("추천영화 요청에 실패했습니다");
  //     }
  //     const data = await res.json();
  //     setRecommendation(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className={styles.container}>
      <section>
        <h2>지금 상영 중인 영화</h2>
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieItem key={`now-playing-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h2>등록된 모든 영화</h2>
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieItem key={`all-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

HomePage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>;
