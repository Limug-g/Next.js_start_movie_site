import "@/styles/globals.css.js";
import "@/styles/reset.css.js";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const hadleNavigate = () => {
    router.push("/test"); //.push() 괄호안의 경로 페이지로 이동하게 됨
  };
  const hadleNavigate2 = () => {
    router.replace("/test");
  };
  const hadleNavigate3 = () => {
    router.back();
  };

  return (
    <>
      <header>
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/movies/3">Movie</Link>
        <button type="button" onClick={hadleNavigate}>
          페이지 이동
        </button>
        <button type="button" onClick={hadleNavigate2}>
          페이지 이동 - 리플레이스
        </button>
        <button type="button" onClick={hadleNavigate3}>
          페이지 이동 - 백
        </button>
      </header>
      <Component {...pageProps} />;
    </>
  );
}
