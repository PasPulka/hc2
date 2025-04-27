import axios from 'axios';
import useSWR from 'swr';
import Card from '../../components/Card';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function Trainers() {
  const { data, error } = useSWR('/api/trainers', fetcher);
  if (error) return <div>Chyba načítání</div>;
  if (!data) return <div>Načítám...</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((trainer: any) => (
        <Card key={trainer.id} title={trainer.name}>
          <p>{trainer.specialization}</p>
        </Card>
      ))}
    </div>
  );
}
