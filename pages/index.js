import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CORS Demo</title>
        <meta
          name="description"
          content="Avoid CORS issues by using API Routes from Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/gregrickaby/cors-demo">CORS Demo</a>
        </h1>

        <p className={styles.description}>
          Avoid CORS issues by using API Routes from Next.js
        </p>

        <div className={styles.grid}>
          <a href="/demo/disney" className={styles.card}>
            <h2>Disney &rarr;</h2>
            <p>
              This API endpoint does not care about CORS, and should fetch and
              display no problem.
            </p>
          </a>

          <a href="/demo/unsplash" className={styles.card}>
            <h2>Unsplash - Part 1 &rarr;</h2>
            <p>
              This API endpoint does not care about CORS either, but does
              require an API key!
            </p>
          </a>

          <a href="/demo/unsplash-2" className={styles.card}>
            <h2>Unsplash - Part 2 &rarr;</h2>
            <p>
              Rather than passing the API key to the client, let's use a custom
              API endpoint.
            </p>
          </a>

          <a href="/demo/xkcd" className={styles.card}>
            <h2>XKCD - Part 1 &rarr;</h2>
            <p>
              This API endpoint is protected by CORS, so this fetch request
              ain't gonna work.
            </p>
          </a>

          <a href="/demo/xkcd-2" className={styles.card}>
            <h2>XKCD - Part 2 &rarr;</h2>
            <p>
              A solution would be to query our custom API endpoint from inside
              the app itself.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
