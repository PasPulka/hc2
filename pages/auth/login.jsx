import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Button from '../../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/auth/login', { email, password });
    router.push('/dashboard');
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Přihlášení</h2>
      <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 rounded" />
      <input type="password" placeholder="Heslo" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 rounded" />
      <Button>Přihlásit</Button>
    </form>
  );
}
