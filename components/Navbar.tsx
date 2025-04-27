import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/"><a className="text-xl font-bold">Trenérská Platforma</a></Link>
        <div className="space-x-4">
          <Link href="/trainers"><a>Trenéři</a></Link>
          <Link href="/auth/login"><a>Přihlásit</a></Link>
        </div>
      </div>
    </nav>
  );
}
