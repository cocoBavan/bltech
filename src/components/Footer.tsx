import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
			<div className="foliox_tm_copyright w-full h-auto clear-both float-left text-center py-[100px] px-0">
				<div className="container">
					<p className="wow fadeInUp font-poppins" data-wow-duration="1s">Developed with love by 
          <Link className="text-white transition-all duration-300 hover:text-extra-color" href="https://themeforest.net/user/marketify/portfolio" target="_blank">Marketify</Link> &copy; 2023</p>
				</div>
			</div>
		</div>
  )
}

export default Footer
