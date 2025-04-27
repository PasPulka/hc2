import type { NextApiRequest, NextApiResponse } from 'next';
const trainers = [
  { id: '1', name: 'Jan Novák', specialization: 'Fitness' },
  { id: '2', name: 'Petra Svobodová', specialization: 'Yoga' }
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(trainers);
}
