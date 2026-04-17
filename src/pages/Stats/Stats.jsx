import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineFriendContext } from "../../context/TimelineFriendContext";

const Stats = () => {
     const { storedCall, storedText, storedVideo } = useContext(
        TimelineFriendContext,
      );
  const data = [
    { name: "call", value: storedCall.length, fill: "#0088FE" },
    { name: "text", value: storedText.length, fill: "#00C49F" },
    { name: "video", value: storedVideo.length, fill: "#FFBB28" },
  ];

  return (
    <div className="container mx-auto p-15">
      <h2 className="font-bold text-3xl">Friendship Analytics</h2>
      <div className="card card-body shadow-2xl my-18">
        <h3 className="font-semibold text-lg mr-10">By Interaction Type :</h3>
        <div className="flex  justify-center mt-8">
            <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
