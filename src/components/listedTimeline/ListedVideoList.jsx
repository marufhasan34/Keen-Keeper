import React, { useContext } from 'react';
import { TimelineFriendContext } from '../../context/TimelineFriendContext';
import videoImage from '../../assets/video.png'

const ListedVideoList = () => {
  const { storedVideo } = useContext(TimelineFriendContext);



  return (
    <div className='mt-10'>
      {storedVideo.map((video, ind) => (
        <div className="card mb-10 card-body shadow-xl" key={ind}>
          <div className="flex gap-5 items-center">
            
            <div>
              <img src={videoImage} alt="" />
            </div>

            <div>
              <p className="font-bold text-xl">
                Text 
                <span className="font-semibold text-lg text-gray-400">
                  {" "}with {video.name}
                </span>
              </p>

              <p className='text-gray-500 text-lg font-semibold'>
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

export default ListedVideoList;