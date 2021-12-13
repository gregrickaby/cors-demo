/**
 * Query the Unsplash API for a random photo.
 *
 * Because this code runs on the server, there's no need to pass the ENV variable to the browser!
 */
export default async function unsplash(req, res) {
  try {
    // Attempt to fetch.
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const json = await response.json();

    // Send the response to the user.
    res.status(200).json(json);
  } catch (error) {
    // Issue? Leave a message and bail.
    res.status(500).json({ message: `${error}` });
  }
}
