import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import sup from "./api/random-number";

const Home: NextPage = () => {
  return (
    <h1 onClick={sup}>say wuzzup</h1>
  );
};

export default Home;
