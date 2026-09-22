import { GlobalLayout } from "@/components/layouts/GlobalLayout";
import "@/styles/globals.css.js";
import "@/styles/reset.css.js";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
  );
}
