import { useContext, useState } from "react";
import ListedCallList from "../../components/listedTimeline/ListedCallList";
import ListedTextList from "../../components/listedTimeline/ListedTextList";
import ListedVideoList from "../../components/listedTimeline/ListedVideoList";
import { TimelineFriendContext } from "../../context/TimelineFriendContext";

const TimeLine = () => {
  const [filter, setFilter] = useState("Filter Timeline");

  const { storedCall, storedText, storedVideo } = useContext(
    TimelineFriendContext
  );

  if (
    storedCall.length === 0 &&
    storedText.length === 0 &&
    storedVideo.length === 0
  ) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <h2 className="font-bold text-3xl">No Timeline List here</h2>
      </div>
    );
  }

  return (
    <div className="container my-9 mx-auto">
      <h2 className="font-bold text-2xl my-5">Timeline</h2>

      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn text-gray-500 font-semibold m-1"
        >
          {filter === "filter timeline"
            ? "Filter timeline"
            : filter.toUpperCase()}
        </div>

        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li
            onClick={() => {
              setFilter("call");
              document.activeElement.blur();
            }}
          >
            <button>Call</button>
          </li>

          <li
            onClick={() => {
              setFilter("text");
              document.activeElement.blur();
            }}
          >
            <button>Text</button>
          </li>

          <li
            onClick={() => {
              setFilter("video");
              document.activeElement.blur();
            }}
          >
            <button>Video</button>
          </li>
        </ul>
      </div>


      {filter === "filter timeline" && (
        <>
          <ListedCallList />
          <ListedTextList />
          <ListedVideoList />
        </>
      )}

      {filter === "call" && <ListedCallList />}
      {filter === "text" && <ListedTextList />}
      {filter === "video" && <ListedVideoList />}
    </div>
  );
};

export default TimeLine;