import { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = 'http://localhost:3000';


const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (error) {
        console.log('An error occurred:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading }
}

export default useFetch;


// REMEMBER: async await needs to be used, not .then -> promise. 
// useFetch needs to be used for the project, do not call upon local file data.