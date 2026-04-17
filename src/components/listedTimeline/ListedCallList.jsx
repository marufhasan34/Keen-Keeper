import React, { useContext } from "react";
import { TimelineFriendContext } from "../../context/TimelineFriendContext";
import callImage from "../../assets/call.png";
const ListedCallList = () => {
  const { storedCall } = useContext(TimelineFriendContext);
  return (
    <div className="mt-10">
      {storedCall.map((call, ind) => (
        <div className="card mb-10 card-body shadow-xl" key={ind}>
          <div className="flex gap-5 items-center">
            <div>
              {" "}
              <img src={callImage} alt="" />
            </div>
            <div>
              <p className="font-bold text-xl">
                Meetup
                <span className="font-semibold text-lg text-gray-400">
                  {" "}
                  with {call.name}
                </span>
              </p>
              <p className="text-gray-500 text-lg font-semibold">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListedCallList;
