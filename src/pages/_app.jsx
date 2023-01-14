import Head from "next/head";
import "../styles/globals.css";
import { AppTitle } from "./components/consts/common";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="240x240"
          href="/favicon.png"
        ></link>
      </Head>
      <AppTitle />
      <div classNameName="flex justify-center items-center h-screen bg-slate-200">
        <div classNameName="w-[420px] h-[840px] bg border-4 border-slate-500 bg-white">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default MyApp;
