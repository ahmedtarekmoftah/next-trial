import { React, useEffect, useState } from "react";
import WelcomeCard from "../../../components/WelcomeCard";
import { StyledPlaceData } from "../../../styles/place.styles";
import data from "../../../data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Place() {
  const router = useRouter();
  const { id } = router.query;
  const [info, setInfo] = useState(data.find((prev) => prev.id == 3));
  useEffect(() => {
    if (router.isReady) {
      setInfo(data.find((prev) => prev.id == id));
      console.log(id);
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>The Arabian</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <WelcomeCard character={false} largeImg={true} />
      <StyledPlaceData>
        <div id="topic">
          <h2 id="placeTopicTitle">{info.title}</h2>
          <p id="placeTopicDesc">{info.description}</p>
        </div>
        <div id="infoContainer">
          <div id="info">
            <h2 id="placeInfoTitle">Info</h2>
            <div id="infoData">
              <li className="infoItem">Egypt</li>
              <li className="infoItem">Ahmed moftah</li>
              <li className="infoItem">Ahmed </li>
              <li className="infoItem">Ahmed </li>
              <li className="infoItem">ali ismael </li>
              <li className="infoItem">abu el ged </li>
            </div>
          </div>
        </div>
      </StyledPlaceData>
    </>
  );
}