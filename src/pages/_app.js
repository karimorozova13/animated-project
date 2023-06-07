import Layout from "@/components/Layout";
import "@/styles/globals.css";
import localFont from "next/font/local";

const Indie = localFont({
  src: [
    {
      path: "../../assets/fonts/IndieFlower-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={Indie.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
