import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const News = () => {
  return (
<div className="foliox_tm_section w-full h-auto clear-both float-left" id="blog">
			<div className="foliox_tm_news w-full h-auto clear-both float-left mb-[113px]">
				<div className="container">
					<div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
						<span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">Blog</span>
						<h3 className="text-[48px]">Latest Blog Posts</h3>
					</div>
					<div className="news_list w-full h-auto clear-both float-left mt-[70px]">
						<ul className="ml-[-25px] flex flex-wrap">
							<li className="wow fadeInUp mb-[50px] pl-[25px] w-1/3" data-wow-duration="1s">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative">
									<div className="image relative overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
										<Image width={0} height={0} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/42-29.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-tl-[12px] rounded-tr-[12px]" data-img-url="assets/img/news/1.jpg"></div>
										<Link className="foliox_tm_full_link absolute inset-0 z-[5]" href="#"></Link>
									</div>
									<div className="details bg-[#3a2b71] w-full float-left py-[28px] px-[35px] rounded-bl-[12px] rounded-br-[12px]">
										<div className="meta w-full float-left mb-[10px]">
											<p className="text-[16px]"><Link className="text-extra-color font-medium pr-[7px]" href="#">Branding</Link> January 27, 2023</p>
										</div>
										<div className="title w-full float-left">
											<h3 className="leading-[1.4]"><Link className="text-white inline-block text-[21px] transition-all duration-300" href="#">When the musics over turn off the light now</Link></h3>
										</div>
									</div>
								</div>
							</li>
							<li className="wow fadeInUp mb-[50px] pl-[25px] w-1/3" data-wow-duration="1s" data-wow-delay="0.2s">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative">
									<div className="image relative overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
										<Image width={0} height={0} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/42-29.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-tl-[12px] rounded-tr-[12px]" data-img-url="assets/img/news/2.jpg"></div>
										<Link className="foliox_tm_full_link absolute inset-0 z-[5]" href="#"></Link>
									</div>
									<div className="details bg-[#3a2b71] w-full float-left py-[28px] px-[35px] rounded-bl-[12px] rounded-br-[12px]">
										<div className="meta w-full float-left mb-[10px]">
											<p className="text-[16px]"><Link className="text-extra-color font-medium pr-[7px]" href="#">Design</Link> January 20, 2023</p>
										</div>
										<div className="title w-full float-left">
											<h3 className="leading-[1.4]"><Link className="text-white inline-block text-[21px] transition-all duration-300" href="#">How good designers can collaborate better</Link></h3>
										</div>
									</div>
									
								</div>
							</li>
							<li className="wow fadeInUp mb-[50px] pl-[25px] w-1/3" data-wow-duration="1s" data-wow-delay="0.4s">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative">
									<div className="image relative overflow-hidden rounded-tl-[12px] rounded-tr-[12px]">
										<Image width={0} height={0} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/42-29.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-tl-[12px] rounded-tr-[12px]" data-img-url="assets/img/news/3.jpg"></div>
										<Link className="foliox_tm_full_link absolute inset-0 z-[5]" href="#"></Link>
									</div>
									<div className="details bg-[#3a2b71] w-full float-left py-[28px] px-[35px] rounded-bl-[12px] rounded-br-[12px]">
										<div className="meta w-full float-left mb-[10px]">
											<p className="text-[16px]"><Link className="text-extra-color font-medium pr-[7px]" href="#">Cyber</Link> January 12, 2023</p>
										</div>
										<div className="title w-full float-left">
											<h3 className="leading-[1.4]"><Link className="text-white inline-block text-[21px] transition-all duration-300" href="#">How to be appreciated for your hard work</Link></h3>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default News
