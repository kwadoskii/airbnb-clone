const explore = [
  {
    img: "https://links.papareact.com/5j2",
    location: "Lagos",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/1to",
    location: "Lekki",
    distance: "1-hour drive",
  },
  {
    img: "https://links.papareact.com/40m",
    location: "Ikeja",
    distance: "30-minutes drive",
  },
  {
    img: "https://links.papareact.com/msp",
    location: "Ibadan",
    distance: "3-hour drive",
  },
  {
    img: "https://links.papareact.com/2k3",
    location: "Port-Harcourt",
    distance: "6.5-hour drive",
  },
  {
    img: "https://links.papareact.com/ynx",
    location: "Enugu",
    distance: "10-hour drive",
  },
  {
    img: "https://links.papareact.com/kji",
    location: "Ikorodu",
    distance: "50-minute drive",
  },
  {
    img: "https://links.papareact.com/41m",
    location: "Ado-Ekiti",
    distance: "3.5-hour drive",
  },
];

const features = [
  {
    img: "https://links.papareact.com/2io",
    title: "Outdoor getaways",
  },
  {
    img: "https://links.papareact.com/q7j",
    title: "Unique stays",
  },
  {
    img: "https://links.papareact.com/s03",
    title: "Entire homes",
  },
  {
    img: "https://links.papareact.com/8ix",
    title: "Pet allowed",
  },
];

const locations = (name) => {
  name = name[0].toUpperCase() + name.substr(1);

  return [
    {
      img: "https://links.papareact.com/xqj",
      location: `Private room in center of ${name}`,
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "£30 / night",
      total: "£117 total",
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      img: "https://links.papareact.com/hz2",
      location: `Private room in center of ${name}`,
      title: "Independant luxury studio apartment",
      description: "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
      star: 4.3,
      price: "£40 / night",
      total: "£157 total",
      long: -0.095091,
      lat: 51.48695,
    },
    {
      img: "https://links.papareact.com/uz7",
      location: `Private room in center of ${name}`,
      title: `${name} Studio Apartments`,
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "£35 / night",
      total: "£207 total",
      long: -0.135638,
      lat: 51.521916,
    },
    {
      img: "https://links.papareact.com/6as",
      location: `Private room in center of ${name}`,
      title: `30 mins to Oxford Street, ${name}`,
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "£55 / night",
      total: "£320 total",
      long: -0.069961,
      lat: 51.472618,
    },
    {
      img: "https://links.papareact.com/xhc",
      location: `Private room in center of ${name}`,
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
      star: 5,
      price: "£60 / night",
      total: "£450 total",
      long: -0.08472,
      lat: 51.510794,
    },
    {
      img: "https://links.papareact.com/pro",
      location: `Private room in center of ${name}`,
      title: `The Blue Room In ${name}`,
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "£65 / night",
      total: "£480 total",
      long: -0.094116,
      lat: 51.51401,
    },
    {
      img: "https://links.papareact.com/8w2",
      location: `Private room in center of ${name}`,
      title: "5 Star Luxury Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "£90 / night",
      total: "£650 total",
      long: -0.109889,
      lat: 51.521245,
    },
  ];
};

export { explore, features, locations };
