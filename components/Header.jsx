import { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  // range options
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = ({ selection }) => {
    setStartDate(selection.startDate);
    setEndDate(selection.endDate);
  };

  const search = () => {
    if (searchInput.trim() === "") return;

    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: format(startDate, "dd-MMM-yy"),
        endDate: format(endDate, "dd-MMM-yy"),
        numberOfGuests,
      },
    });
    resetInput();
  };

  const resetInput = () => setSearchInput("");

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-3 bg-white shadow-md md:px-8">
      <div
        className="relative flex items-center h-10 my-auto cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          src="https://links.papareact.com/qd3"
        />
      </div>

      <div className="flex items-center py-2 border-2 rounded-full md:shadow-sm">
        <input
          className="flex-grow w-full pl-5 pr-3 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder || "Start your search"}
          type="text"
          value={searchInput}
        />
        <SearchIcon
          className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2"
          onClick={search}
        />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-700">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-5 cursor-pointer" />

        <div className="flex items-center space-x-1 border pr-1 pl-3 py-1 rounded-full">
          <MenuIcon className="h-4 cursor-pointer" />
          <UserCircleIcon className="h-9 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            minDate={new Date()}
            onChange={handleSelect}
            ranges={[selectionRange]}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text- xl flex-grow font-semibold">Number of guests</h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              min="1"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex justify-around">
            <button className="text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className=" text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
