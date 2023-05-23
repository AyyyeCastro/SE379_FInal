import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3000';

interface UseFetchResponse {
  data: any;
  loading: boolean;
}

const useFetch = (url: string): UseFetchResponse => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (error) {
        console.log('An error occurred:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
