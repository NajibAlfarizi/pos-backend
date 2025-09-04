// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from Vercel Serverless!' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
