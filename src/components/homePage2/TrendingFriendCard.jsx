import React from "react";
import { Link } from "react-router";

const TrendingFriendCard = ({ friend }) => {
  const { picture, name, days_since_contact, tags, status } = friend;
  const badgeColor = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-amber-400 text-white",
  };
  return (
    <Link to={`/${friend.id}`} className=" transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110   card cursor-pointer  hover:bg-white text-center space-y-2 card-body bg-gray-100 shadow-xl">
      <img className="h-20 mx-auto rounded-full w-20" src={picture} alt="" />
      <h3 className="font-bold text-2xl">{name}</h3>
      <p className="text-gray-600">{days_since_contact}d ago</p>
      <div className="flex gap-4">
        {tags.map((tag,ind) => (
          <p key={ind} className="badge badge-accent ">{tag}</p>
        ))}
      </div>
      <p
        className={`font-semibold w-25 h-6 mx-auto rounded-2xl ${badgeColor[status] || "bg-green-800 text-white"} `}
      >
        {status}
      </p>
    </Link>
  );
};

export default TrendingFriendCard;
