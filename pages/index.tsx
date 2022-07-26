import type { NextPage } from "next";
import Head from "next/head";

import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chat App Conversations</title>
        <link rel="icon" href="/icon.webp" />
      </Head>
      <Sidebar />
    </div>
  );
};

export default Home;
