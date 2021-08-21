import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { server } from "../config";

export default function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  useEffect(() => {}, []);

  return (
    <div className="">
      <Head>
        <title>
          {location[0].toUpperCase() + location.substr(1)} · Stay · Airbnb - clone
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />

      <main className="flex border-b">
        <section className="flex-grow pt-14 px-6 pb-3 my-min-height">
          <p className="text-sm">
            {searchResult.length - 1}+ stays · {range} · {numberOfGuests} guests
          </p>

          <h1 className="text-2xl lg:text-3xl font-bold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              ({ img, location, title, description, star, price, total }, key) => (
                <InfoCard
                  key={key}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}

            <p className="text-gray-500 text-center py-5">
              Additional fees apply. Taxes may be added.
            </p>
          </div>
        </section>

        {/* map */}
        <section className="hidden xl:flex xl:min-w-[558px]">
          {/* <div className="pt-1 my-min-height xl:min-w-[558px] top-0 -mt-15"> */}
          {/* <div className="xl:min-w-[550px] my-map"> */}
          <Map searchResult={searchResult} />
          {/* </div> */}
          {/* </div> */}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const searchResult = await fetch(`${server}/api/locations`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ location: query.location }),
  }).then((res) => res.json());

  return {
    props: {
      searchResult,
    },
  };
};
