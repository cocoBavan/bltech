import React from "react";

import "./css/features.css";
import CaseSVG from "../common/svg/CaseSVG";
import SettingsSVG from "../common/svg/SettingsSVG";
import DiamondSVG from "../common/svg/DiamondSVG";
import Tilter from "../common/Tilter";
import Reveal from "../common/Reveal";

type Icons = "settings" | "diamond" | "case";

const getIconFromName = (iconName: Icons) => {
  switch (iconName) {
    case "settings":
      return (
        <SettingsSVG
          width={65}
          height={65}
          className="svg mb-[30px] fill-extra-color"
        />
      );
    case "diamond":
      return (
        <DiamondSVG
          width={65}
          height={65}
          className="svg mb-[30px] fill-extra-color"
        />
      );
    case "case":
      return (
        <CaseSVG
          width={65}
          height={65}
          className="svg mb-[30px] fill-extra-color"
        />
      );
  }
};

const FeaturesItem = ({
  title,
  detail,
  iconName,
}: //children,
{
  title: String;
  detail: String;
  //children: React.ReactNode;
  iconName: Icons;
}) => {
  return (
    <li className="mb-[50px] pl-[25px] w-1/3">
      <Tilter hasBg={true}>
        <div className="w-full h-auto clear-both relative bg-[#3a2b71] rounded-[10px] p-[60px]">
          {getIconFromName(iconName)}
          <h3 className="title text-[24px] mb-[20px]">{title}</h3>
          <p className="text">{detail}</p>
        </div>
      </Tilter>
    </li>
  );
};

const Features = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
      <div className="foliox_tm_features w-full h-auto clear-both float-left mb-[113px]">
        <Reveal>
          <div className="container">
            <div className="list w-full h-auto clear-both float-left relative">
              <ul className="ml-[-25px] flex flex-wrap">
                <FeaturesItem
                  title={"Deeper Skillset"}
                  detail={
                    "Mobile & Web App Development and including backend, with seamless user experiences"
                  }
                  iconName="settings"
                />
                <FeaturesItem
                  title={"Creative Work"}
                  detail={
                    "Innovative app designs and concepts, showcasing creativity, user-centricity, and attention to detail."
                  }
                  iconName="case"
                />
                <FeaturesItem
                  title={"Strong Dedication"}
                  detail={
                    "With a relentless pursuit of excellence, I ensure high-quality results and client satisfaction."
                  }
                  iconName="diamond"
                />
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Features;
