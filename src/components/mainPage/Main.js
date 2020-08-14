import React, { useState, useEffect } from "react";
import { getUsers } from "../../dataRequests/dataRequests";
import Loading from "../utilities/Loading";
import MainUserCard from "./MainUserCard";

export default function Main() {
  const [users, setUsers] = useState([]);

  async function handleUsersData() {
    let usersFromServer = await getUsers();
    setUsers(usersFromServer);
  }

  useEffect(() => {
    handleUsersData();
  }, []);

  return (
    <div>
      <p>Main Area</p>
      <button onClick={() => console.log(users)}>TESTING BUTTON</button>
      {users.length === 0 ? (
        <Loading />
      ) : (
        users.map((u) => (
          <div key={u.id}>
            <MainUserCard userName={u.userName} userId={u.id} />
          </div>
        ))
      )}
    </div>
  );
}
