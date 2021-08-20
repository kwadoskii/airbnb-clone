import Head from "next/head";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { server } from "../config";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb - Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, img, distance }, key) => (
              <SmallCard key={key} location={location} distance={distance} img={img} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }, key) => (
              <MediumCard key={key} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const exploreData = await fetch(`${server}/api/explore`).then((res) => res.json());
  const cardsData = await fetch(`${server}/api/features`).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
