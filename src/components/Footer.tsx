import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
      <div className="foliox_tm_copyright w-full h-auto clear-both float-left text-center py-[100px] px-0">
        <div className="container">
          <p className="wow fadeInUp font-poppins" data-wow-duration="1s">
            Ported to Next.JS with love by BLTech &copy; 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
