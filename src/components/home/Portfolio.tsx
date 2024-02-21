import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./css/portfolio.css";
import Tilter from "../common/Tilter";
import { it } from "node:test";
import Reveal from "../common/Reveal";

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
          <a href={item.portfolioLink}>
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
          </a>
        </div>
      </Tilter>
    </li>
  );
};

const items: PortfolioItem[] = [
  {
    imageUrl: "/assets/img/portfolio/flybuys.webp",
    title: "Coles",
    subtitle: "Flybuys Game",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=com.coles.android.flybuys.release&hl=en&gl=US",
  },
  {
    imageUrl: "/assets/img/portfolio/hsbc.webp",
    title: "HSBC",
    subtitle: "iOS and Android Apps",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=au.com.hsbc.hsbcaustralia&hl=en_AU&gl=US",
  },
  {
    imageUrl: "/assets/img/portfolio/macquarie.webp",
    title: "Macquarie Bank",
    subtitle: "Android App",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=au.com.macquarie.banking&hl=en_AU",
  },
  {
    imageUrl: "/assets/img/portfolio/ubank.png",
    title: "UBank",
    subtitle: "Android App",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=au.com.bank86400&hl=en_AU&gl=US",
  },
  {
    imageUrl: "/assets/img/portfolio/invoicescanner.png",
    title: "Invoice Scanner",
    subtitle: "Web App",
    portfolioLink: "https://www.invoicescanner.com.au/",
  },
  {
    imageUrl: "/assets/img/portfolio/fetch.webp",
    title: "Fetch TV",
    subtitle: "Mobile Apps",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=au.com.fetchtv&hl=en_AU&gl=US",
  },
];

const Portfolio = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both" id="portfolio">
      <div className="foliox_tm_portfolio w-full h-auto clear-both  mb-[150px]">
        <Reveal>
          <div className="container">
            <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
              <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
                Portfolio
              </span>
              <h3 className="text-[28px] lg:text-[48px]">
                What I Do for My Clients
              </h3>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both text-center mt-[60px] mb-[55px]"></div>
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
        </Reveal>
      </div>
    </div>
  );
};

export default Portfolio;
