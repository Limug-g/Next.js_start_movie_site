import { SearchLayout } from "@/components/layouts/SearchLayout";
import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();

  const { q } = router.query ?? {};
  console.log('q', q)

  return <h1>Search: {q}</h1>;
}

SearchPage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>
