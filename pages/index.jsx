import Link from 'next/link';
export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Vítejte na platformě pro osobní trenéry</h1>
      <p className="mb-6">Najděte si trenéra, sledujte jeho obsah a rezervujte si trénink.</p>
      <Link href="/trainers"><a className="px-6 py-3 bg-green-600 text-white rounded-lg">Prozkoumat trenéry</a></Link>
    </div>
  );
}
