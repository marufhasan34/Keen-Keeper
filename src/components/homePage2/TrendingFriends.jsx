import React, { useEffect, useState } from "react";
import TrendingFriendCard from "./TrendingFriendCard";

const TrendingFriends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriends(data);
    };
    fetchData();
  }, []);
  console.log(friends);

  return (
    <div className="container mx-auto">
      <h3 className="font-bold text-2xl">Your Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 ">
        {friends.map((friend) => (
          <TrendingFriendCard friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default TrendingFriends;
