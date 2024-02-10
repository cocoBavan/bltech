import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Portfolio = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left" id="portfolio">
			<div className="foliox_tm_portfolio w-full h-auto clear-both float-left mb-[150px]">
				<div className="container">
					<div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
						<span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">Portfolio</span>
						<h3 className="text-[48px]">What I Do for My Clients</h3>
					</div>
					<div className="portfolio_filter w-full h-auto clear-both float-left text-center mt-[60px] mb-[55px]">
						<ul>
							<li className="mr-[35px] inline-block"><Link href="#" className="current text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" data-filter="*">All</Link></li>
							<li className="mr-[35px] inline-block"><Link className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" href="#" data-filter=".youtube">Youtube</Link></li>
							<li className="mr-[35px] inline-block"><Link className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" href="#" data-filter=".vimeo">Vimeo</Link></li>
							<li className="mr-[35px] inline-block"><Link className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" href="#" data-filter=".soundcloud">Soundcloud</Link></li>
							<li className="mr-[35px] inline-block"><Link className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" href="#" data-filter=".popup">Popup</Link></li>
							<li className="inline-block"><Link className="text-white font-poppins font-medium transition-all duration-300 hover:text-extra-color" href="#" data-filter=".content">Content</Link></li>
						</ul>
					</div>
					<div className="portfolio_list wow fadeInUp w-full h-auto clear-both float-left" data-wow-duration="1s" data-wow-delay="0.2s">
						<ul className="gallery_zoom ml-[-13px] flex flex-wrap">
							<li className="youtube mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<Image width={1} height={1} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/1-1.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="/assets/img/portfolio/1.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Axe Droow</h3>
										<span className="text-[16px]">Youtube</span>
									</div>
									<Link className="foliox_tm_full_link absolute inset-0 z-[5] popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas"></Link>
								</div>
							</li>
							<li className="vimeo mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<Image width={1} height={1} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/1-1.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="/assets/img/portfolio/2.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Mockup Clock</h3>
										<span className="text-[16px]">Vimeo</span>
									</div>
									<Link className="foliox_tm_full_link absolute inset-0 z-[5] popup-vimeo" href="https://vimeo.com/337293658"></Link>
								</div>
							</li>
							<li className="soundcloud mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<Image  width={1} height={1} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/1-1.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="/assets/img/portfolio/3.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Afra Porter</h3>
										<span className="text-[16px]">Soundcloud</span>
									</div>
									<Link className="foliox_tm_full_link absolute inset-0 z-[5] soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></Link>
								</div>
							</li>
							<li className="popup mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<Image width={1} height={1} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/1-1.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="/assets/img/portfolio/4.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Good Idea</h3>
										<span className="text-[16px]">Popup</span>
									</div>
									<Link className="foliox_tm_full_link absolute inset-0 z-[5] zoom" href="/assets/img/portfolio/4.jpg"></Link>
								</div>
							</li>
							<li className="popup mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<Image width={1} height={1} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/1-1.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="/assets/img/portfolio/5.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Magic Art</h3>
										<span className="text-[16px]">Popup</span>
									</div>
									<Link className="foliox_tm_full_link absolute inset-0 z-[5] zoom" href="/assets/img/portfolio/5.jpg"></Link>
								</div>
							</li>
							<li className="content mb-[13px] pl-[13px] w-1/3">
								<div className="list_inner tilt-effect w-full h-auto clear-both float-left relative overflow-hidden">
									<div className="image relative">
										<Image width={1} height={1} className="relative opacity-0 min-w-full" src="/assets/img/thumbs/1-1.jpg" alt="" />
										<div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[12px]" data-img-url="/assets/img/portfolio/6.jpg"></div>
									</div>
									<div className="details absolute z-[2] bottom-[20px] left-[20px] right-[20px] bg-[#1e1345] p-[20px] rounded-[12px] translate-y-[125%] transition-all duration-300">
										<h3 className="text-[20px] mb-[2px]">Creative Design</h3>
										<span className="text-[16px]">Content</span>
									</div>
									<Link className="foliox_tm_full_link absolute inset-0 z-[5] portfolio_popup" href="#"></Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Portfolio
