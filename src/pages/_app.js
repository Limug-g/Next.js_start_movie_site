import { GlobalLayout } from "@/components/layouts/GlobalLayout";
import "@/styles/globals.css.js";
import "@/styles/reset.css.js";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch.apply("/test");
  }, [router]);

  const hadleNavigate = () => {
    router.push("/test"); //.push() 괄호안의 경로 페이지로 이동하게 됨 이전 페이지 기록이 남음
  };
  // const hadleNavigate2 = () => {
  //   router.replace("/test"); // 얘도 페이지 이동인데 뒤로가기 하면 이전 페이지로 못감 기록이 덮어씌기 됨
  // };
  // const hadleNavigate3 = () => {
  //   router.back();
  // };

  return (
    <GlobalLayout>
      <Component {...pageProps} />;
    </GlobalLayout>
  );
}
