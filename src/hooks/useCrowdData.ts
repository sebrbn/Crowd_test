import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const useCrowdData = (roomId: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: crowdData, error } = await supabase
        .from('count') // Ensure the table name matches
        .select('*')
        .eq('id', roomId) // Ensure this column exists in your table
        .order('timestamp', { ascending: false }); // Sort by timestamp

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        console.log('Fetched data:', crowdData); // Log fetched data
        setData(crowdData);
      }
      setLoading(false);
    };

    fetchData();
  }, [roomId]);

  return { data, loading };
};