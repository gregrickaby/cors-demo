import { useEffect, useState } from "react";

/**
 * XKCD API - Part 2
 *
 * Instead, let's query our custom API endpoint...
 */
export default function XKCD() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const response = await fetch(`/api/xkcd`);
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
    return <p>The comic is loading...</p>;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>{data?.title}</h1>
      <img src={data?.img} alt={data?.alt} />
    </>
  );
}
