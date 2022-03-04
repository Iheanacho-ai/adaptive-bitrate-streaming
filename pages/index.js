
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic"; //add

//add
const NativeVideo = dynamic(
  () => import("../components/video-player"),
  { ssr: false }
);

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Player with Cloudinary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Video Player</h1>
      </header>
      <section className={styles.video_player}>
        {/* <VideoPlayer /> */}
        <NativeVideo />
      </section>
    </div>
  );
}
