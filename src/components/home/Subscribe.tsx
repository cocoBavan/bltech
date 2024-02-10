import React from 'react'

const Subscribe = () => {
  return (
<div className="foliox_tm_section w-full h-auto clear-both float-left">
			<div className="foliox_tm_subscribe w-full h-auto clear-both float-left">
				<div className="container">
					<div className="inner tilt-effect w-full h-auto clear-both float-left relative bg-[#432d92] flex items-center pt-[83px] px-[90px] pb-[86px] rounded-[15px]">
						<div className="left wow fadeInLeft w-1/2 pr-[40px]" data-wow-duration="1s">
							<span className="subtitle inline-block text-[21px] font-medium text-extra-color mb-[5px]">Subscribe Now</span>
							<h3 className="title text-white text-[48px] mb-[10px]">Get My Newsletter</h3>
							<p className="text">Get latest news, tips and trics in your inbox</p>
						</div>
						<div className="right wow fadeInRight w-1/2 pl-[10px]" data-wow-duration="1s">
							<div className="field w-full relative">
								<input type="text" placeholder="Your email here"/>
								<input type="submit" value="Send Now" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Subscribe
