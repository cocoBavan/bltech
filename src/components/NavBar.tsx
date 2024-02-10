import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'


const NavBar = () => {
  return (
    <nav>
      		<div className="foliox_tm_header py-[45px] px-0 transition-all duration-300">
			<div className="container">
				<div className="inner w-full flex items-center justify-between">
					<div className="logo">
						<Link className="anchor" href="#home"><Image width={200} height={80} className="max-w-[200px] max-h-[80px] transition-all duration-300" src="/assets/img/logo/logo.png" alt="" /></Link>
					</div>
					<div className="details flex items-center">
						<div className="menu">
							<ul className="anchor_nav flex items-center">
								<li className="current mr-[40px]"><Link className="text-white font-poppins transition-all duration-300 hover:text-extra-color" href="#home">Home</Link></li>
								<li className="mr-[40px]"><Link className="text-white font-poppins transition-all duration-300 hover:text-extra-color" href="#about">About</Link></li>
								<li className="mr-[40px]"><Link className="text-white font-poppins transition-all duration-300 hover:text-extra-color" href="#service">Service</Link></li>
								<li className="mr-[40px]"><Link className="text-white font-poppins transition-all duration-300 hover:text-extra-color" href="#portfolio">Portfolio</Link></li>
								<li className="mr-[40px]"><Link className="text-white font-poppins transition-all duration-300 hover:text-extra-color" href="#blog">Blog</Link  ></li>
								<li><Link className="text-white font-poppins transition-all duration-300 hover:text-extra-color" href="#contact">Contact</Link></li>
							</ul>
						</div>
						<div className="social relative ml-[60px]">
							<ul className="flex items-center">
                                
								<li className="mr-[12px]"><Link className="text-white transition-all duration-300 hover:text-extra-color" href="#"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
								<li className="mr-[12px]"><Link className="text-white transition-all duration-300 hover:text-extra-color" href="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
								<li className="mr-[12px]"><Link className="text-white transition-all duration-300 hover:text-extra-color" href="#"><FontAwesomeIcon icon={faYoutube} /></Link></li>
								<li><Link className="text-white transition-all duration-300 hover:text-extra-color" href="#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </nav>
  )
}

export default NavBar
