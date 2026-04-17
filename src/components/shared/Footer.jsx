import React from "react";
import footerInstaIcon from "../../assets/instagram.png";
import footerFaceIcon from "../../assets/facebook.png";
import footerXIcon from "../../assets/twitter.png";
const Footer = () => {
  return (
    <div className="bg-green-900 pb-8 pt-20">
      <div className="container text-white mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-6xl">KeenKeeper</h2>
          <p className="mt-5 mb-10 text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h4 className="font-semibold text-lg">Social Links</h4>
          <div className="flex justify-center gap-3 mt-4 mb-10">
            <img src={footerInstaIcon} alt="" />
            <img src={footerFaceIcon} alt="" />
            <img src={footerXIcon} alt="" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="text-gray-400  flex justify-between">
          <p className="">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-4">
            <p>Privacy Policy </p>
            <p> Terms of Service </p>
            <p> Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
