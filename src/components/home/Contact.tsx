import React from 'react'

const Contact = () => {
  return (
<div className="foliox_tm_section w-full h-auto clear-both float-left" id="contact">
			<div className="foliox_tm_contact w-full h-auto clear-both float-left">
				<div className="container">
					<div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
						<span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">Contact</span>
						<h3 className="text-[48px]">I Want to Hear from You</h3>
					</div>
					<div className="contact_inner w-full flex mt-[80px] mb-[182px] relative">
						<div className="left wow fadeInLeft w-1/2" data-wow-duration="1s">
							<ul>
								<li className="mb-[15px]">
									<div className="list_inner flex items-center">
										<div className="icon w-[88px] h-[88px] rounded-full relative bg-extra-color">
											<i className="icon-location absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] text-white"></i>
										</div>
										<div className="short pl-[25px]">
											<h3 className="text-[30px] mb-[5px]">Address</h3>
											<span>20, Somewhere in world</span>
										</div>
									</div>
								</li>
								<li className="mb-[15px]">
									<div className="list_inner flex items-center">
										<div className="icon w-[88px] h-[88px] rounded-full relative bg-extra-color">
											<i className="icon-mail-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] text-white"></i>
										</div>
										<div className="short pl-[25px]">
											<h3 className="text-[30px] mb-[5px]">Email</h3>
											<span><a className="text-[#b4afc6] transition-all duration-300 hover:text-extra-color" href="#">hello@dodo.com</a></span>
										</div>
									</div>
								</li>
								<li className="mb-[15px]">
									<div className="list_inner flex items-center">
										<div className="icon w-[88px] h-[88px] rounded-full relative bg-extra-color">
											<i className="icon-phone absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] text-white"></i>
										</div>
										<div className="short pl-[25px]">
											<h3 className="text-[30px] mb-[5px]">Phone</h3>
											<span>+123 456 7890</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className="right wow fadeInRight w-1/2" data-wow-duration="1s">
							<div className="fields w-full clear-both float-left h-auto">
									<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
									<div className="empty_notice"><span>Please Fill Required Fields</span></div>
									<div className="input_list w-full clear-both float-left h-auto">
										<ul className="ml-[-12px]">
											<li className="mb-[12px] w-1/2 float-left pl-[12px]"><input id="name" type="text" placeholder="Your Name" /></li>
											<li className="mb-[12px] w-1/2 float-left pl-[12px]"><input id="email" type="text" placeholder="Your Email" /></li>
											<li className="mb-[12px] w-1/2 float-left pl-[12px]"><input id="phone" type="number" placeholder="Your Phone" /></li>
											<li className="mb-[12px] w-1/2 float-left pl-[12px]"><input id="subject" type="text" placeholder="Subject" /></li>
										</ul>
									</div>
									<div className="message_area w-full float-left mb-[4px]">
										<textarea id="message" placeholder="Write your message here"></textarea>
									</div>
									<div className="foliox_tm_button">
										<a id="send_message" href="#"><span>Submit Now</span></a>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Contact
