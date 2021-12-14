import { useEffect, useState } from "react";

/**
 * Unsplash API - Part 2.
 *
 * Rather than passing the API key to the client, let's use a custom API endpoint.
 */
export default function UnsplashCopy() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(`/api/unsplash/`);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setData(`error: ${error}`);
      setLoading(false);
    }
  }

  /**
   * Fetch the data from myself. No API key required.
   *
   * @see https://nextjs.org/docs/api-routes/introduction
   */
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Stand by for a random photo...</p>;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>{data?.description}</h1>
      <img src={data?.urls?.small} alt={data?.alt_description} />
    </>
  );
}
