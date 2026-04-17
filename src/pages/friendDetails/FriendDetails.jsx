import React, { useContext } from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { ClipLoader } from "react-spinners";
import { PiBellSimpleZ } from "react-icons/pi";
import { GoArchive } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { TimelineFriendContext } from "../../context/TimelineFriendContext";

const FriendDetails = () => {
  const { id } = useParams();

  const { friends, loading } = useFriends();

  const expectedFriend = friends.find((friend) => String(friend.id) === id);

  const { handleFriendCall, handleFriendText, handleFriendVideo } = useContext(
    TimelineFriendContext,
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <ClipLoader color="#054f05" />
      </div>
    );
  }
  const badgeColor = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-amber-400 text-white",
  };

  return (
    <div className="bg-gray-100 p-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <div className="card card-body space-y-2 text-center bg-white shadow-xl">
              <img
                className="mx-auto rounded-full "
                src={expectedFriend.picture}
                alt=""
              />
              <h3 className="font-bold text-xl">{expectedFriend.name}</h3>
              <p
                className={`font-semibold w-25 h-6 mx-auto rounded-2xl ${badgeColor[expectedFriend.status] || "bg-green-800 text-white"} `}
              >
                {expectedFriend.status}
              </p>
              <div className="flex mx-auto w-40 md:w-78 gap-4">
                {expectedFriend.tags.map((tag, ind) => (
                  <p key={ind} className="badge badge-accent ">
                    {tag}
                  </p>
                ))}
              </div>
              <p className="font-semibold text-gray-400">
                {expectedFriend.bio}
              </p>
              <p>
                Email :{" "}
                <span className="text-gray-500">{expectedFriend.email}</span>
              </p>
            </div>
            <div className="mt-5 text-xl space-y-3">
              <div className="card card-body cursor-pointer bg-white  border border-gray-300">
                <h4 className="font-bold mx-auto items-center gap-2 flex ">
                  <PiBellSimpleZ className="" /> Snooze 2 weeks
                </h4>
              </div>
              <div className="card card-body cursor-pointer bg-white  border border-gray-300">
                <h4 className="font-bold mx-auto items-center gap-2 flex ">
                  <GoArchive /> Archive
                </h4>
              </div>
              <div className="card card-body cursor-pointer bg-white  border border-gray-300">
                <h4 className="font-bold mx-auto text-red-500 items-center gap-2 flex ">
                  <RiDeleteBin6Line /> Delete
                </h4>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="card card-body text-center bg-white">
                <h3 className="font-bold text-2xl">
                  {expectedFriend.days_since_contact}
                </h3>
                <p className="font-semibold text-gray-400">
                  Days Since Contact
                </p>
              </div>
              <div className="card card-body text-center bg-white">
                <h3 className="font-bold text-2xl">{expectedFriend.goal}</h3>
                <p className="font-semibold text-gray-400">Goal(Days)</p>
              </div>
              <div className="card card-body text-center bg-white">
                <h3 className="font-bold text-2xl">
                  {expectedFriend.next_due_date}
                </h3>
                <p className="font-semibold text-gray-400">Next Due</p>
              </div>
            </div>
            <div className="card my-7 card-body bg-white">
              <div className="flex justify-between">
                <h3 className="font-semibold text-2xl text-green-900">
                  Relationship Goal
                </h3>
                <button className="btn">Edit</button>
              </div>
              <h4 className="text-lg">
                Connect every{" "}
                <span className="font-bold">
                  {expectedFriend.days_since_contact} days
                </span>
              </h4>
            </div>
            <div className="card card-body bg-white">
              <h4 className="font-semibold text-green-900 ">Quick Check-In</h4>
              <div className="flex flex-col md:flex-row my-3 gap-4">
                <div
                  onClick={() => handleFriendCall(expectedFriend)}
                  className="bg-gray-100 cursor-pointer card card-body text-center"
                >
                  <LuPhoneCall className="mx-auto text-3xl" />
                  <h4 className="font-semibold">Call</h4>
                </div>
                <div
                  onClick={() => handleFriendText(expectedFriend)}
                  className="bg-gray-100 cursor-pointer card card-body text-center"
                >
                  <LuMessageSquareMore className="mx-auto text-3xl" />
                  <h4 className="font-semibold">Text</h4>
                </div>
                <div
                  onClick={() => handleFriendVideo(expectedFriend)}
                  className="bg-gray-100 cursor-pointer card card-body text-center"
                >
                  <IoVideocamOutline className="mx-auto text-3xl" />
                  <h4 className="font-semibold">Call</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
