import { SearchLayout } from "@/components/layouts/SearchLayout";
import * as styles from "@/styles/home.css.js";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [recommendation, setRecommendation] = useState(null);

  const fetchRecommendation = async () => {
    try {
      const res = await fetch("/api/recommend");
      if (!res.ok) {
        throw new Error("추천영화 요청에 실패했습니다");
      }
      const data = await res.json();
      setRecommendation(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>인생 영화를 찾아보세용!</h1>

      <button onClick={fetchRecommendation} className={styles.button}>
        추천 영화 보기
      </button>
      {recommendation && (
        <div className={styles.result}>{recommendation.title}</div>
      )}

      <div className={styles.searchLink}>
        <Link href="/search">검색 페이지로 이동하기</Link>
      </div>
    </div>
  );
}

HomePage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>;
