import { useRouter } from "next/router";

export default function MoviePage() {
  const router = useRouter();

  const { id } = router.query ?? {};
  console.log("id", id);

  return <h1>MovieDetail: {id}</h1>;
}
