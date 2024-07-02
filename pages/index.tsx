import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Netflix</h1>
      {/* <NavBar /> */}
      <Banner
        title="Clifford the Red Dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      {/* <Card /> */}
    </div>
  );
}
