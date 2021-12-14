import { useEffect, useState } from "react";

/**
 * Disney API.
 *
 * This API endpoint does not care about CORS, and should fetch and display no problem 👍
 */
export default function Disney() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch data from the API.
  async function fetchData() {
    try {
      const response = await fetch(`https://api.disneyapi.dev/characters`);
      const json = await response.json();
      setData(json.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setData(`error: ${error}`);
      setLoading(false);
    }
  }

  /**
   * Perform fetch via the browser (client side), during the first render.
   */
  useEffect(() => {
    fetchData();
  }, []);

  // If loading, display a loading message.
  if (loading) {
    return <p>The magic is loading...</p>;
  }

  // Finally, display the data.
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
