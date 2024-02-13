import React from "react";
import "./css/counter.css";
import Tilter from "../common/Tilter";

interface CounterItem {
  title: string;
  count: number | string;
}

const CounterCard = ({ item }: { item: CounterItem }) => {
  return (
    <li className="mb-[50px] pl-[25px] w-1/4 ">
      <Tilter hasBg={true}>
        <div className="list_inner tilt-effect w-full h-auto clear-both  relative bg-[#432d92] rounded-[10px] p-[70px] flex items-center justify-center">
          <h3 className="text-[60px] text-extra-color">
            <span
              className="tm_counter"
              data-from="0"
              data-to="20"
              data-speed="2000"
            >
              {item.count}
            </span>
          </h3>
          <span className="title text-[18px] text-white font-poppins font-medium inline-block pl-[26px]">
            {item.title}
          </span>
        </div>
      </Tilter>
    </li>
  );
};

const Counter = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both">
      <div className="foliox_tm_counter w-full h-auto clear-both mb-[115px]">
        <div className="container">
          <div className="counter_list w-full h-auto clear-both">
            <ul className="ml-[-25px] flex flex-wrap">
              <CounterCard item={{ title: "Digital Products", count: 0 }} />
              <CounterCard item={{ title: "Direct Clients", count: 0 }} />
              <CounterCard item={{ title: "Total Projects", count: "0K" }} />
              <CounterCard item={{ title: "Awards Win", count: 0 }} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
