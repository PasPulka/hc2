import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: implement authentication
  res.status(200).json({ success: true });
}
