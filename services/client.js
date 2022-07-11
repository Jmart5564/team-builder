const SUPABASE_URL = 'https://jhnrgujhjafsvkiqvvfv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpobnJndWpoamFmc3ZraXF2dmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU4Nzk4MTMsImV4cCI6MTk3MTQ1NTgxM30.PJNEo0e6dtTDThpt91p1QfXgkZiDBIaN8hTnW9GPO3o';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
