import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://i.pinimg.com/564x/19/77/dd/1977dde8bf00f3a4b76ba81f3093acee.jpg",
      name: "Echo Zhang",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
