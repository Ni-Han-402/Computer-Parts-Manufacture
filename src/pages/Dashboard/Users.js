import React from "react";
import { useQuery } from "react-query";
import Loding from "../../components/Loding";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loding></Loding>;
  }
  return (
    <div className="p-10">
      <h1>Users: {user.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th className="bg-secondary text-base-100"></th>
              <th className="bg-secondary text-base-100">Name</th>
              <th className="bg-secondary text-base-100">Role</th>
              <th className="bg-secondary text-base-100">Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
