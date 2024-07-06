import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<boolean>(false);

  let controller: AbortController | null = null;

  useEffect(() => {
    (async () => fetchUsers())();
  }, []);

  const fetchUsers = async () => {
    if (controller) {
      controller.abort();
    }

    try {
      controller = new AbortController();

      const data = await axios.get<User[]>(API_URL, {
        signal: controller.signal,
        timeout: 5000,
      });

      setUsers(data.data);
    } catch (error) {
      if (!axios.isCancel(error)) {
        setError(true);
      }
    }
  };

  return { users, error, fetchUsers };
};
