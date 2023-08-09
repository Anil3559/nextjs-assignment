import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="test" />
        <meta name="keywords" content="test" />
        <meta name="author" content="test" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
    </>
  );
};

export default index;
