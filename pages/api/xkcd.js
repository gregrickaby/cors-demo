/**
 * Query the XKCD API for a comic
 *
 * Because this code runs in the app (and on the server), we don't need to deal with CORS!
 */
export default async function xkcd(req, res) {
  try {
    // Attempt to fetch.
    const response = await fetch(`https://xkcd.com/327/info.0.json`);
    const json = await response.json();

    // Send the response to the user.
    res.status(200).json(json);
  } catch (error) {
    // Issue? Leave a message and bail.
    res.status(500).json({ message: `${error}` });
  }
}
