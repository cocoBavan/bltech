import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./css/news.css";

function currentDate() {
  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "2-digit" } as const;
  const formattedDate = currentDate.toLocaleDateString("en-AU", options);

  return formattedDate;
}

const items: NewsItem[] = [
  {
    image: "/assets/img/news/1.jpg",
    tag: "AI",
    date: currentDate(),
    url: "https://openai.com/sora",
    title: "AI creates realistic videos",
  },
  {
    image: "/assets/img/news/2.jpeg",
    tag: "Cross Platform",
    date: currentDate(),
    url: "https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin",
    title: "Xamarin is kaput",
  },
  {
    image: "/assets/img/news/3.jpeg",
    tag: "VR",
    date: currentDate(),
    url: "https://www.abc.net.au/news/2024-02-15/how-virtual-reality-helps-quadraplegics-walk-again-spinal-injury/103464114",
    title: "Paralysed feel walking",
  },
];

interface NewsItem {
  image: string;
  tag: string;
  date: string;
  url: string;
  title: string;
}

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <li
      className="wow fadeInUp mb-[50px] pl-[25px] w-1/3"
      data-wow-duration="1s"
    >
      <div className="list_inner tilt-effect w-full h-auto clear-both float-left relative">
        <div className="image relative overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
          <Image
            width={0}
            height={0}
            className="relative opacity-0 min-w-full"
            src="/assets/img/thumbs/42-29.jpg"
            alt=""
          />
          <div
            style={{
              backgroundImage: `url("${item.image}")`,
            }}
            className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-tl-[12px] rounded-tr-[12px]"
          />
          <Link
            className="foliox_tm_full_link absolute inset-0 z-[5]"
            href={`${item.url}`}
          />
        </div>
        <div className="details bg-[#3a2b71] w-full float-left py-[28px] px-[35px] rounded-bl-[12px] rounded-br-[12px]">
          <div className="meta w-full float-left mb-[10px]">
            <p className="text-[16px]">
              <Link
                className="text-extra-color font-medium pr-[7px]"
                href={`${item.url}`}
              >
                {item.tag}
              </Link>
              {item.date}
            </p>
          </div>
          <div className="title w-full float-left">
            <h3 className="leading-[1.4]">
              <Link
                className="text-white inline-block text-[21px] transition-all duration-300"
                href={`${item.url}`}
              >
                {item.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
};

const News = () => {
  return (
    <div
      className="foliox_tm_section w-full h-auto clear-both float-left"
      id="blog"
    >
      <div className="foliox_tm_news w-full h-auto clear-both float-left mb-[113px]">
        <div className="container">
          <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
            <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
              Blog
            </span>
            <h3 className="text-[28px] lg:text-[48px]">Latest News</h3>
          </div>
          <div className="news_list w-full h-auto clear-both float-left mt-[70px]">
            <ul className="ml-[-25px] flex flex-wrap">
              {items.map((d) => (
                <NewsCard key={d.title} item={d} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
