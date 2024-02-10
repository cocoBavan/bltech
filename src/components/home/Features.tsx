import React from 'react'
import Image from 'next/image'


const Features = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
			<div className="foliox_tm_features w-full h-auto clear-both float-left mb-[113px]">
				<div className="container">
					<div className="list w-full h-auto clear-both float-left relative">
						<ul className="ml-[-25px] flex flex-wrap">
							<li className="wow fadeInUp mb-[50px] pl-[25px] w-1/3" data-wow-duration="1s">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative bg-[#3a2b71] rounded-[10px] p-[60px]">
									<Image width={65} height={65} className="svg w-[65px] h-[65px] mb-[30px] text-extra-color" src="/assets/img/svg/setting.svg" alt="" />
									<h3 className="title text-[24px] mb-[20px]">Deeper Skillset</h3>
									<p className="text">Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
								</div>
							</li>
							<li className="wow fadeInUp mb-[50px] pl-[25px] w-1/3" data-wow-duration="1s" data-wow-delay="0.2s">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative bg-[#3a2b71] rounded-[10px] p-[60px]">
									<Image width={65} height={65} className="svg w-[65px] h-[65px] mb-[30px] text-extra-color" src="/assets/img/svg/case.svg" alt="" />
									<h3 className="title text-[24px] mb-[20px]">Creative Work</h3>
									<p className="text">Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
								</div>
							</li>
							<li className="wow fadeInUp mb-[50px] pl-[25px] w-1/3" data-wow-duration="1s" data-wow-delay="0.4s">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative bg-[#3a2b71] rounded-[10px] p-[60px]">
									<Image width={65} height={65} className="svg w-[65px] h-[65px] mb-[30px] text-extra-color" src="/assets/img/svg/diamond.svg" alt="" />
									<h3 className="title text-[24px] mb-[20px]">Strong Dedication</h3>
									<p className="text">Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Features
