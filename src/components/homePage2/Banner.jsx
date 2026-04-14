import React from "react";

const Banner = () => {
  return (
    <div className="container space-y-5 mx-auto text-center my-8">
      <h1 className="font-bold text-5xl">Friends to keep close in your life</h1>
      <p className="text-gray-500">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn bg-green-800 text-white">+ Add a Friend</button>
      <div className="grid grid-cols-2 md:grid-cols-4 my-5 gap-5">
        <div className="card card-body border border-gray-300 bg-gray-100 shadow-xl">
          <h3 className="font-bold text-3xl">10</h3>
          <p className="text-xl text-gray-500">Total Friends</p>
        </div>
        <div className="card card-body border border-gray-300 bg-gray-100 shadow-xl">
          <h3 className="font-bold text-3xl">3</h3>
          <p className="text-xl text-gray-500">On Track</p>
        </div>
        <div className="card card-body border border-gray-300 bg-gray-100 shadow-xl">
          <h3 className="font-bold text-3xl">6</h3>
          <p className="text-xl text-gray-500">Need Attention</p>
        </div>
        <div className="card card-body border border-gray-300 bg-gray-100 shadow-xl">
          <h3 className="font-bold text-3xl">12</h3>
          <p className="text-xl text-gray-500">Interactions This Month</p>
        </div>
      </div>
      <br />
      <div className="divider"></div>
    </div>
  );
};

export default Banner;
