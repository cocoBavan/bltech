import React from 'react'

const Skills = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
    <div className="foliox_tm_skills w-full h-auto clear-both float-left mb-[163px]">
        <div className="container">
            <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
                <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">Skills</span>
                <h3 className="text-[48px]">I Work Hard to Improve My Skills Regularly</h3>
            </div>
            <div className="list w-full h-auto clear-both flex mt-[47px]">
                <div className="left w-1/2 pr-[67px]">
                    <div className="dodo_progress wow fadeInUp w-full h-auto clear-both float-left pt-[30px] overflow-hidden" data-wow-duration="1s">
                        <div className="progress_inner" data-value="95">
                            <span><span className="label">HTML</span><span className="number">95%</span></span>
                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                        </div>
                        <div className="progress_inner" data-value="75">
                            <span><span className="label">CSS</span><span className="number">75%</span></span>
                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                        </div>
                        <div className="progress_inner" data-value="90">
                            <span><span className="label">JavaScript</span><span className="number">90%</span></span>
                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                        </div>
                    </div>
                </div>
                <div className="right w-1/2 pl-[67px]">
                    <div className="dodo_progress wow fadeInUp w-full h-auto clear-both float-left pt-[30px] overflow-hidden" data-wow-duration="1s">
                        <div className="progress_inner" data-value="70">
                            <span><span className="label">React</span><span className="number">70%</span></span>
                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                        </div>
                        <div className="progress_inner" data-value="80">
                            <span><span className="label">Vue</span><span className="number">80%</span></span>
                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                        </div>
                        <div className="progress_inner" data-value="90">
                            <span><span className="label">PHP</span><span className="number">90%</span></span>
                            <div className="background"><div className="bar"><div className="bar_in"></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills
