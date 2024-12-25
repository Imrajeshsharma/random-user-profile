import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { getUsers } from "./APIs/getUsers";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers(setUser, setLoading);
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div className="flex bg-gray-100 h-[100vh]">
      <div className={"m-auto flex flex-wrap justify-center gap-6 p-6"}>
        {user.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
