"use client";
import React, { useRef } from "react";
import "./css/counter.css";
import Tilter from "../common/Tilter";
import { useInView } from "framer-motion";

interface CounterItem {
  title: string;
  count: number;
}

const CounterCard = ({ item }: { item: CounterItem }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <li className="mb-[50px] pl-[25px] w-1/4 ">
      <Tilter hasBg={true}>
        <div
          ref={ref}
          className="list_inner tilt-effect w-full h-auto clear-both  relative bg-[#432d92] rounded-[10px] p-[70px] flex items-center justify-center"
        >
          <h3 className="text-[60px] text-extra-color">
            <span className="tm_counter">{item.count}</span>
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
              <CounterCard item={{ title: "Digital Products", count: 6 }} />
              <CounterCard item={{ title: "Direct Clients", count: 15 }} />
              <CounterCard item={{ title: "Total Projects", count: 25 }} />
              <CounterCard item={{ title: "Years Experience", count: 12 }} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
