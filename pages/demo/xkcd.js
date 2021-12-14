import { useEffect, useState } from "react";

/**
 * XKCD API - Part 1
 *
 * This API endpoint is protected by CORS, so this ain't gonna work.
 */
export default function XKCD() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(`https://xkcd.com/327/info.0.json`);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setData(`error: ${error}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>The comic is loading...</p>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
