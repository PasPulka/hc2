export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
