import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Tofino, British Columbia",
    description:
      "A popular year-round tourism destination, Tofino's summer population swells to many times its winter size. It attracts surfers, hikers, nature lovers, bird watchers, campers, whale watchers, fishers, or anyone just looking to be close to nature.",
    imageUrl:
      "https://www.travelandleisure.com/thmb/30qfukQH1j5olGSTkZQqsM4phoI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-tofino-BEAUTYCANADA0623-6d4980ad850c4b668185364daf4ce7fd.jpg",
    address: "411 Campbell Street, Tofino",
    location: {
      lat: 49.1523597,
      lng: -125.9068902,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Tofino, British Columbia",
    description:
      "A popular year-round tourism destination, Tofino's summer population swells to many times its winter size. It attracts surfers, hikers, nature lovers, bird watchers, campers, whale watchers, fishers, or anyone just looking to be close to nature.",
    imageUrl:
      "https://www.travelandleisure.com/thmb/30qfukQH1j5olGSTkZQqsM4phoI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-tofino-BEAUTYCANADA0623-6d4980ad850c4b668185364daf4ce7fd.jpg",
    address: "411 Campbell Street, Tofino",
    location: {
      lat: 49.1523597,
      lng: -125.9068902,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
