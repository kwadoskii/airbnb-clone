import Image from "next/image";

export default function SmallCard({ location, img, distance }) {
  return (
    <div className="flex space-x-4 hover:bg-gray-100 m-2 mt-5 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-16 h-16">
        <Image src={img} layout="fill" objectFit="contain" className="rounded-lg" />
      </div>

      <div>
        <h2 className="font-semibold text-gray-800">{location}</h2>
        <h3 className="text-gray-500 font-thin">{distance}</h3>
      </div>
    </div>
  );
}
