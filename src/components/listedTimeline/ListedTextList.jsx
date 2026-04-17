import React, { useContext } from "react";
import { TimelineFriendContext } from "../../context/TimelineFriendContext";
import textImage from "../../assets/text.png";
const ListedTextList = () => {
  const { storedText } = useContext(TimelineFriendContext);
  return (
    <div className="mt-10">
      {storedText.map((text, ind) => (
        <div className="card mb-10 card-body shadow-xl" key={ind}>
          <div className="flex gap-5 items-center">
            <div>
              {" "}
              <img src={textImage} alt="" />
            </div>
            <div>
              <p className="font-bold text-xl">
                Text{" "}
                <span className="font-semibold text-lg text-gray-400">
                  with {text.name}
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

export default ListedTextList;
