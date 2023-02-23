import { type NextPage } from "next";
//import components
import Head from "next/head";
import Link from "next/link";
import Container from "./components/Container";
//import functions
import sup from "./api/random-number";


const Home: NextPage = () => {
  return (
    
      <main className="w-full h-full">
        <Container />
      </main>

    
  );
};

export default Home;
