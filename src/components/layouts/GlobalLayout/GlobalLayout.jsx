import clsx from "clsx";
import { Noto_Sans_KR } from "next/font/google";
import Link from "next/link";
import * as styles from "./GlobalLayout.css.js";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["500"],
});

export default function GlobalLayout({ children }) {
  return (
    <div className={clsx(styles.container, notoSansKr.className)}>
      <header className={styles.header}>
        <Link href="/" className={styles.headerLink}>
          NEXT CINEMA
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>YOUR_ID</p>
      </footer>
    </div>
  );
}
