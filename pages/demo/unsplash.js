import { useEffect, useState } from "react";

/**
 * Unsplash API - Part 1
 *
 * This API endpoint does not care about CORS either, but does require an API key!
 */
export default function Unsplash() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Expose an ENV var to the browser via "NEXT_PUBLIC_".
   *
   * @see https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
   */
  useEffect(async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      );
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
