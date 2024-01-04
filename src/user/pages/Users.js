import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/5/25/1/shutterstock_PhotoRoman-316584812.jpg.rend.hgtvcom.616.411.suffix/1621980971547.jpeg",
      name: "Echo Zhang",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
