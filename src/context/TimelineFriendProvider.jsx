import { useState } from "react";
import { TimelineFriendContext } from "./TimelineFriendContext";
import { toast } from "react-toastify";

const TimelineFriendProvider = ({ children }) => {
  const [storedCall, setStoredCall] = useState([]);
  const [storedText, setStoredText] = useState([]);
  const [storedVideo, setStoredVideo] = useState([]);

  const handleFriendCall = (currentFriend) => {
    const isExistingFriend = storedCall.find(
      (call) => call.id === currentFriend.id,
    );

    if (isExistingFriend) {
      toast.error("the call is already exist");
    } else {
      setStoredCall([...storedCall, currentFriend]);
      toast.success(`Add the Call with ${currentFriend.name}`);
    }
  };
  const handleFriendText = (currentFriend) => {
    const isExistingFriend = storedText.find(
      (call) => call.id === currentFriend.id,
    );

    if (isExistingFriend) {
      toast.error("the Text is already exist");
    } else {
      setStoredText([...storedText, currentFriend]);
      toast.success(`Add the Text with ${currentFriend.name}`);
    }
  };
  const handleFriendVideo = (currentFriend) => {
    const isExistingFriend = storedVideo.find(
      (call) => call.id === currentFriend.id,
    );

    if (isExistingFriend) {
      toast.error("the video is already exist");
    } else {
      setStoredVideo([...storedVideo, currentFriend]);
      toast.success(`Add the Video with ${currentFriend.name}`);
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
