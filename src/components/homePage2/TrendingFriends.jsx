import React, { useEffect, useState } from "react";
import TrendingFriendCard from "./TrendingFriendCard";
import { ClipLoader } from "react-spinners";

const TrendingFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="font-bold text-2xl">Your Friends</h3>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <ClipLoader color="#054f05" />

        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 ">
          {friends.map((friend) => (
            <TrendingFriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingFriends;
