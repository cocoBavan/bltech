import React from "react";
import "./css/resume.css";

interface ResumeItem {
  title: string;
  period: string;
  company: string;
  achievement: string;
}

const experienceLeft: ResumeItem[] = [
  {
    title: "UI/UX Designer",
    period: "2018 - Present",
    company: "Easy Computers",
    achievement:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur khobor niona.",
  },
  {
    title: "Web Designer",
    period: "2016 - 2018",
    company: "Design Hub",
    achievement:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur khobor niona.",
  },
  {
    title: "Graphic Designer",
    period: "2012 - 2016",
    company: "Vivaco Studio",
    achievement:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur khobor niona.",
  },
];

const experienceRight: ResumeItem[] = [
  {
    title: "UI/UX Designer",
    period: "2018 - Present",
    company: "Easy Computers",
    achievement:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur khobor niona.",
  },
  {
    title: "Web Designer",
    period: "2016 - 2018",
    company: "Design Hub",
    achievement:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur khobor niona.",
  },
  {
    title: "Graphic Designer",
    period: "2012 - 2016",
    company: "Vivaco Studio",
    achievement:
      "Kobita tumi sopno charini hoye ersest labo met, consectetur khobor niona.",
  },
];

const ResumeCard: React.FC<ResumeItem> = (card) => {
  return (
    <li
      className="wow fadeInUp mb-[50px] float-left w-full"
      data-wow-duration="1s"
    >
      <div className="list_inner w-full h-auto clear-both float-left relative pl-[107px]">
        <span className="icon w-[72px] h-[72px] inline-block rounded-full bg-extra-color absolute left-0 top-0 z-[1]">
          <img
            className="svg w-[35px] h-[35px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            src="assets/img/svg/case-2.svg"
            alt=""
          />
        </span>
        <div className="resume_title w-full float-left mb-[18px]">
          <h3 className="text-[24px] mb-[13px]">
            {card.title}{" "}
            <span className="text-[16px] text-[#b4afc6] font-normal inline-block pl-[8px]">
              {card.period}
            </span>
          </h3>
          <span className="company text-[18px] text-white font-poppins font-semibold">
            {card.company}
          </span>
        </div>
        <p className="text">{card.achievement}</p>
      </div>
    </li>
  );
};

const Resume = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
      <div className="foliox_tm_resume w-full h-auto clear-both float-left mb-[155px]">
        <div className="container">
          <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
            <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
              Resume
            </span>
            <h3 className="text-[48px]">I Worked for Some Big Companies</h3>
          </div>
          <div className="wrapper w-full h-auto flex mt-[65px]">
            <div className="left w-1/2 pr-[50px]">
              <div className="title w-full float-left mb-[60px]">
                <h3 className="text-[36px]">Experience</h3>
              </div>
              <div className="resume_list w-full float-left">
                <ul className="relative float-left">
                  {experienceLeft.map((d) => (
                    <ResumeCard key={d.title} {...d} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <div className="title w-full float-left mb-[60px]">
                <h3 className="text-[36px]">Education</h3>
              </div>
              <div className="resume_list w-full float-left">
                <ul className="relative float-left">
                  {experienceRight.map((d) => (
                    <ResumeCard key={d.title} {...d} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
