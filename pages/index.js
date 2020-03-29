import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>WeebJournal</h1>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </div>
  );
}