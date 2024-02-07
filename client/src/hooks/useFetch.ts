import axios from 'axios'
import { useState, useEffect } from 'react'

const api = axios.create({
  baseURL: 'http://localhost:3030/api/',
  withCredentials: true,
});
  
export default function useFetch<T= unknown>(url: string) {
  
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url)
      .then(({ data }) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false))
  }, [])

  return { data, error, isFetching }
}

