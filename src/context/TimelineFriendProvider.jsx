import { useState } from "react";
import { TimelineFriendContext } from "./TimelineFriendContext";
import { toast } from "react-toastify";

const TimelineFriendProvider = ({ children }) => {
  const [storedCall, setStoredCall] = useState([]);
  const [storedText, setStoredText] = useState([]);
  const [storedVideo, setStoredVideo] = useState([]);

  const handleFriendCall = (currentFriendCall) => {
    const isExistingFriend = storedCall.find(
      (call) => call.id === currentFriendCall.id,
    );

    if (isExistingFriend) {
      toast.error("the call is already exist");
    } else {
      setStoredCall([...storedCall, currentFriendCall]);
      toast.success("add the call successfully");
    }
  };
  const handleFriendText = (currentFriendCall) => {
    const isExistingFriend = storedText.find(
      (call) => call.id === currentFriendCall.id,
    );

    if (isExistingFriend) {
      toast.error("the Text is already exist");
    } else {
      setStoredText([...storedText, currentFriendCall]);
      toast.success("add the Text successfully");
    }
  };
  const handleFriendVideo = (currentFriendCall) => {
    const isExistingFriend = storedVideo.find(
      (call) => call.id === currentFriendCall.id,
    );

    if (isExistingFriend) {
      toast.error("the video is already exist");
    } else {
      setStoredVideo([...storedVideo, currentFriendCall]);
      toast.success("add the video successfully");
    }
  };

  const data = {
    storedCall,
    setStoredCall,
    handleFriendCall,
    storedText,
    setStoredText,
    handleFriendText,
    storedVideo,
    setStoredVideo,
    handleFriendVideo,
  };
  return (
    <TimelineFriendContext.Provider value={data}>
      {children}
    </TimelineFriendContext.Provider>
  );
};

export default TimelineFriendProvider;
