import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Testimonials = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
			<div className="foliox_tm_testimonials w-full h-auto clear-both float-left mb-[170px]">
				<div className="container">
					<div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
						<span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">Testimonials</span>
						<h3 className="text-[48px]">What Clients Say</h3>
					</div>
					<div className="list_wrapper w-full h-auto clear-both float-left relative mt-[50px]">
						<div className="total w-full h-auto clear-both float-left relative">
							<div className="in wow fadeInUp w-full max-w-[900px] text-center my-0 mx-auto" data-wow-duration="1s">
								<ul className="owl-carousel owl-theme">
									<li>
										<div className="icon mb-[35px] inline-block">
											<Image width={80} height={80} className="svg w-[80px] h-[80px] text-extra-color" src="/assets/img/svg/quote.svg" alt="" />
										</div>
										<div className="text mb-[60px]">
											<p className="text-[30px] italic leading-[1.6] text-white">I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.</p>
										</div>
										<div className="short w-auto flex items-center justify-center">
											<div className="image relative w-[60px] h-[60px] rounded-full">
												<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full" data-img-url="/assets/img/testimonials/1.jpg"></div>
											</div>
											<div className="detail text-left pl-[25px]">
												<h3 className="text-[24px]">Keita Smith</h3>
												<span className="text-[16px]">ABC Group</span>
											</div>
										</div>
									</li>
									<li>
										<div className="icon mb-[35px] inline-block">
											<Image width={80} height={80}  className="svg w-[80px] h-[80px] text-extra-color" src="/assets/img/svg/quote.svg" alt="" />
										</div>
										<div className="text mb-[60px]">
											<p className="text-[30px] italic leading-[1.6] text-white">Really the Code Quality, Customer Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends. Simply amazing team and amazing theme! Thank you from United States of America!</p>
										</div>
										<div className="short w-auto flex items-center justify-center">
											<div className="image relative w-[60px] h-[60px] rounded-full">
												<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full" data-img-url="/assets/img/testimonials/2.jpg"></div>
											</div>
											<div className="detail text-left pl-[25px]">
												<h3 className="text-[24px]">Mike Anderson</h3>
												<span className="text-[16px]">Vivaco Studio</span>
											</div>
										</div>
									</li>
									<li>
										<div className="icon mb-[35px] inline-block">
											<Image width={80} height={80}  className="svg w-[80px] h-[80px] text-extra-color" src="/assets/img/svg/quote.svg" alt="" />
										</div>
										<div className="text mb-[60px]">
											<p className="text-[30px] italic leading-[1.6] text-white">Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website successfully. Much recommended!</p>
										</div>
										<div className="short w-auto flex items-center justify-center">
											<div className="image relative w-[60px] h-[60px] rounded-full">
												<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full" data-img-url="/assets/img/testimonials/3.jpg"></div>
											</div>
											<div className="detail text-left pl-[25px]">
												<h3 className="text-[24px]">MAlan Walker</h3>
												<span className="text-[16px]">Web Designer</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Testimonials
