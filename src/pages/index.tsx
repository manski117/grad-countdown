import { type NextPage } from "next";
import React from "react";
import { createContext } from "react";
//import components
import Head from "next/head";
import Link from "next/link";
import Container from "./components/Container";
//import functions
import sup from "./api/random-number";




const Home: NextPage = () => {
  const [gradStatus, setGradStatus] = React.useState<boolean>(false);

  function graduate(){
    setGradStatus(true);
    alert('props passed to index yey');
  }

  let fireworks: JSX.Element = (
    <div className="pyro">
      <div className="before"></div>
      <div className="after"></div>
    </div>
  )

  return (
    
      <main className="w-full h-full">
          {gradStatus ? fireworks : null}
          <Container onGraduation={graduate} />
        
      </main>

    
  );
};

export default Home;
