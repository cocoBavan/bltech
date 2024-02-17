"use client";

import React, { useRef } from "react";

import "./css/skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import Reveal from "../common/Reveal";

interface Skill {
  title: string;
  percentage: number;
}

const leftSkills: Skill[] = [
  { title: "Kotlin", percentage: 95 },
  { title: "Swift", percentage: 90 },
  { title: "Android", percentage: 90 },
];

const rightSkills: Skill[] = [
  { title: "iOS", percentage: 90 },
  { title: "HTML", percentage: 89 },
  { title: "CSS", percentage: 55 },
];

const SkillItem = ({ skill }: { skill: Skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="progress_inner" data-value="95">
      <span>
        <span className="label opened">{skill.title}</span>
        <span className="number" style={{ right: "5%" }}>
          {isInView && (
            <CountUp start={0} end={skill.percentage}>
              {({ countUpRef, start }) => (
                <span className="tm_counter" ref={countUpRef} />
              )}
            </CountUp>
          )}
          {!isInView && 0}%
        </span>
      </span>
      {isInView && (
        <ProgressBar
          height="8px"
          animateOnRender={true}
          completed={skill.percentage}
          isLabelVisible={false}
          bgColor="#00c0ff"
        />
      )}
      {!isInView && (
        <ProgressBar
          height="8px"
          animateOnRender={true}
          completed={0}
          isLabelVisible={false}
          bgColor="#00c0ff"
        />
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
      <div className="foliox_tm_skills w-full h-auto clear-both float-left mb-[163px]">
        <Reveal>
          <div className="container">
            <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
              <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
                Skills
              </span>
              <h3 className="text-[48px]">
                I Work Hard to Improve My Skills Regularly
              </h3>
            </div>
            <div className="list w-full h-auto clear-both flex mt-[47px]">
              <div className="left w-1/2 pr-[67px]">
                <div
                  className="dodo_progress wow fadeInUp w-full h-auto clear-both float-left pt-[30px] overflow-hidden"
                  data-wow-duration="1s"
                >
                  {leftSkills.map((d) => (
                    <SkillItem key={d.title} skill={d} />
                  ))}
                </div>
              </div>
              <div className="right w-1/2 pl-[67px]">
                <div
                  className="dodo_progress wow fadeInUp w-full h-auto clear-both float-left pt-[30px] overflow-hidden"
                  data-wow-duration="1s"
                >
                  {rightSkills.map((d) => (
                    <SkillItem key={d.title} skill={d} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
