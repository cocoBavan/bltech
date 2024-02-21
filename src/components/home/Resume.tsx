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
    title: "Senior Consultant",
    period: "2023 - Present",
    company: "Pfizer Inc",
    achievement:
      "Ported acquired company assets to Pfizer Standards, involving Kotlin, gradle & C++",
  },
  {
    title: "Senior Consultant",
    period: "2021 - 2023",
    company: "HSBC",
    achievement:
      "Added Manage Payments & Scheduled Payments features to their apps.",
  },
  {
    title: "Senior Consultant",
    period: "2020 - 2021",
    company: "Macquarie Bank",
    achievement:
      "Migrated many app features to new designs using Kotlin & Compose.",
  },
];

const experienceRight: ResumeItem[] = [
  {
    title: "Senior Consultant",
    period: "2019 - 2020",
    company: "UBank",
    achievement:
      "Developed a complete bank app from scratch and released it using Kotlin",
  },
  {
    title: "Senior Consultant",
    period: "2018 - 2019",
    company: "Deloitte",
    achievement:
      "Worked with multiple clients including Coles, Link and Telstra.",
  },
  {
    title: "Tech Lead",
    period: "2013 - 2018",
    company: "Fetch TV",
    achievement: "Led the front end Team with frequent successful deliveries.",
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
            <h3 className="text-[28px] lg:text-[48px]">
              I Worked for Some Big Companies
            </h3>
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
              <div className="title w-full float-left mb-0 xl:mb-[60px]">
                <h3 className="text-[36px] opacity-0 h-0 xl:h-fit">
                  Education
                </h3>
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
