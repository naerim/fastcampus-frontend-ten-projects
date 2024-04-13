import { useRouter } from "next/router";

export default function StorePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>store detail: {id}</h1>
    </div>
  );
}
