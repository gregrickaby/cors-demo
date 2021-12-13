import { useEffect, useState } from "react";

/**
 * Unsplash API - Part 2.
 */
export default function UnsplashCopy() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetch the data from myself. No API key required.
   *
   * @see https://nextjs.org/docs/api-routes/introduction
   */
  useEffect(async () => {
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
