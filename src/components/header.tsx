import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>

      <Link href="/reliability">Reliability</Link>

      <Link href="/scale">Scale</Link>
    </header>
  );
};
