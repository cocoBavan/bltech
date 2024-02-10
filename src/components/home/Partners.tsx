import React from 'react'
import Image from 'next/image'


const Partners = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
			<div className="foliox_tm_partners w-full h-auto clear-both float-left mb-[160px]">
				<div className="container">
					<div className="partners_list tilt-effect wow fadeInUp w-full h-auto clear-both float-left bg-[#432d92] rounded-[12px] py-[70px] px-0" data-wow-duration="1s">
						<ul className="owl-carousel flex items-center">
							<li className="item opacity-50 text-center transition-all duration-300 hover:opacity-100">
								<Image width={0} height={0} className="max-w-[95%] max-h-[180px]" src="/assets/img/partners/1.png" alt="" />
							</li>
							<li className="item opacity-50 text-center transition-all duration-300 hover:opacity-100">
								<Image width={0} height={0} className="max-w-[95%] max-h-[180px]" src="/assets/img/partners/2.png" alt="" />
							</li>
							<li className="item opacity-50 text-center transition-all duration-300 hover:opacity-100">
								<Image width={0} height={0} className="max-w-[95%] max-h-[180px]" src="/assets/img/partners/3.png" alt="" />
							</li>
							<li className="item opacity-50 text-center transition-all duration-300 hover:opacity-100">
								<Image width={0} height={0} className="max-w-[95%] max-h-[180px]" src="/assets/img/partners/4.png" alt="" />
							</li>
							<li className="item opacity-50 text-center transition-all duration-300 hover:opacity-100">
								<Image width={0} height={0} className="max-w-[95%] max-h-[180px]" src="/assets/img/partners/5.png" alt="" />
							</li>
							<li className="item opacity-50 text-center transition-all duration-300 hover:opacity-100">
								<Image width={0} height={0} className="max-w-[95%] max-h-[180px]" src="/assets/img/partners/6.png" alt="" />
							</li>
							<li className="item opacity-50 text-center transition-all duration-300 hover:opacity-100">
								<Image width={0} height={0} className="max-w-[95%] max-h-[180px]" src="/assets/img/partners/7.png" alt="" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Partners
