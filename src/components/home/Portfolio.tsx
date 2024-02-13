import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./css/portfolio.css";
import Tilter from "../common/Tilter";

interface PortfolioItem {
  imageUrl: string;
  title: string;
  subtitle: string;
  portfolioLink: string;
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <li className="mb-[13px] pl-[13px] w-1/3">
      <Tilter>
        <div className="list_inner tilt-effect w-full h-auto clear-both relative overflow-hidden">
          <div className="image relative">
            <img
              className="relative opacity-0 min-w-full"
              src="/assets/img/thumbs/1-1.jpg"
              alt=""
            />
            <div
              style={{
                backgroundImage: `url("${item.imageUrl}")`,
              }}
              className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]"
            ></div>
          </div>
          <div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
            <h3 className="text-[20px] mb-[2px]">{item.title}</h3>
            <span className="text-[16px]">{item.subtitle}</span>
          </div>
          <Link
            className="foliox_tm_full_link absolute inset-0 z-[5] popup-youtube"
            href={item.portfolioLink}
          ></Link>
        </div>
      </Tilter>
    </li>
  );
};

const items: PortfolioItem[] = [
  {
    imageUrl: "/assets/img/portfolio/1.jpg",
    title: "Axe Droow",
    subtitle: "Youtube",
    portfolioLink: "https://www.youtube.com/watch?v=7e90gBu4pas",
  },
  {
    imageUrl: "/assets/img/portfolio/2.jpeg",
    title: "Axe Droow",
    subtitle: "Youtube",
    portfolioLink: "https://www.youtube.com/watch?v=7e90gBu4pas",
  },
  {
    imageUrl: "/assets/img/portfolio/3.jpeg",
    title: "Axe Droow",
    subtitle: "Youtube",
    portfolioLink: "https://www.youtube.com/watch?v=7e90gBu4pas",
  },
  {
    imageUrl: "/assets/img/portfolio/4.jpeg",
    title: "Axe Droow",
    subtitle: "Youtube",
    portfolioLink: "https://www.youtube.com/watch?v=7e90gBu4pas",
  },
  {
    imageUrl: "/assets/img/portfolio/5.jpeg",
    title: "Axe Droow",
    subtitle: "Youtube",
    portfolioLink: "https://www.youtube.com/watch?v=7e90gBu4pas",
  },
  {
    imageUrl: "/assets/img/portfolio/6.jpeg",
    title: "Axe Droow",
    subtitle: "Youtube",
    portfolioLink: "https://www.youtube.com/watch?v=7e90gBu4pas",
  },
];

const Portfolio = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both" id="portfolio">
      <div className="foliox_tm_portfolio w-full h-auto clear-both  mb-[150px]">
        <div className="container">
          <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
            <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
              Portfolio
            </span>
            <h3 className="text-[48px]">What I Do for My Clients</h3>
          </div>
          <div className="portfolio_filter w-full h-auto clear-both text-center mt-[60px] mb-[55px]">
            <ul>
              <li className="mr-[35px] inline-block">
                <Link
                  href="#"
                  className="current text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color"
                  data-filter="*"
                >
                  All
                </Link>
              </li>
              <li className="mr-[35px] inline-block">
                <Link
                  className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color"
                  href="#"
                  data-filter=".youtube"
                >
                  Youtube
                </Link>
              </li>
              <li className="mr-[35px] inline-block">
                <Link
                  className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color"
                  href="#"
                  data-filter=".vimeo"
                >
                  Vimeo
                </Link>
              </li>
              <li className="mr-[35px] inline-block">
                <Link
                  className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color"
                  href="#"
                  data-filter=".soundcloud"
                >
                  Soundcloud
                </Link>
              </li>
              <li className="mr-[35px] inline-block">
                <Link
                  className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color"
                  href="#"
                  data-filter=".popup"
                >
                  Popup
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color"
                  href="#"
                  data-filter=".content"
                >
                  Content
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="portfolio_list wow fadeInUp w-full h-auto clear-both"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <ul className="gallery_zoom ml-[-13px] flex flex-wrap">
              {items.map((d) => (
                <PortfolioCard key={d.title} item={d} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
