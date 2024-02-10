import React from 'react'

const Counter = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
			<div className="foliox_tm_counter w-full h-auto clear-both float-left mb-[115px]">
				<div className="container">
					<div className="counter_list w-full h-auto clear-both float-left">
						<ul className="ml-[-25px] flex flex-wrap">
							<li className="mb-[50px] pl-[25px] w-1/4 ">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative bg-[#432d92] rounded-[10px] p-[70px] flex items-center justify-center">
									<h3 className="text-[60px] text-extra-color"><span className="tm_counter" data-from="0" data-to="20" data-speed="2000">0</span></h3>
									<span className="title text-[18px] text-white font-poppins font-medium inline-block pl-[26px]">Digital Products</span>
								</div>
							</li>
							<li className="mb-[50px] pl-[25px] w-1/4 ">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative bg-[#432d92] rounded-[10px] p-[70px] flex items-center justify-center">
									<h3 className="text-[60px] text-extra-color"><span className="tm_counter" data-from="0" data-to="280" data-speed="2000">0</span></h3>
									<span className="title text-[18px] text-white font-poppins font-medium inline-block pl-[26px]">Direct Clients</span>
								</div>
							</li>
							<li className="mb-[50px] pl-[25px] w-1/4 ">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative bg-[#432d92] rounded-[10px] p-[70px] flex items-center justify-center">
									<h3 className="text-[60px] text-extra-color"><span className="tm_counter" data-from="0" data-to="3" data-speed="2000">0</span>K</h3>
									<span className="title text-[18px] text-white font-poppins font-medium inline-block pl-[26px]">Total Projects</span>
								</div>
							</li>
							<li className="mb-[50px] pl-[25px] w-1/4 ">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative bg-[#432d92] rounded-[10px] p-[70px] flex items-center justify-center">
									<h3 className="text-[60px] text-extra-color"><span className="tm_counter" data-from="0" data-to="9" data-speed="2000">0</span>+</h3>
									<span className="title text-[18px] text-white font-poppins font-medium inline-block pl-[26px]">Awards Win</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Counter
