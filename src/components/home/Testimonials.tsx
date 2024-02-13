"use client";
import React, { CSSProperties } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { it } from "node:test";

interface TestimonialItem {
  testimonial: string;
  name: string;
  company: string;
  imageUrl: string;
}

const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
  return (
    <div>
      <div className="icon mb-[35px] inline-block">
        <Image
          width={80}
          height={80}
          className="svg w-[80px] h-[80px] text-extra-color"
          src="/assets/img/svg/quote.svg"
          alt=""
        />
      </div>
      <div className="text mb-[60px]">
        <p className="text-[30px] italic leading-[1.6] text-white">
          {item.testimonial}
        </p>
      </div>
      <div className="short w-auto flex items-center justify-center">
        <div className="image relative w-[60px] h-[60px] rounded-full">
          <div
            className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
            style={{
              backgroundImage: `url("${item.imageUrl}")`,
            }}
          ></div>
        </div>
        <div className="detail text-left pl-[25px]">
          <h3 className="text-[24px]">{item.name}</h3>
          <span className="text-[16px]">{item.company}</span>
        </div>
      </div>
      <div className="h-[100px]" />
    </div>
  );
};

const testimonials: TestimonialItem[] = [
  {
    testimonial: `
						I rarely like to write reviews, but the Marketify team
                        truly deserve a standing ovation for their customer
                        support, customisation and most importantly,
                        friendliness and professionalism. Many thanks once again
                        for everything and hope that I get to deal with you
                        again in the near future.
	`,
    name: "Keita Smith",
    company: "ABC Group",
    imageUrl: "/assets/img/testimonials/1.jpeg",
  },
  {
    testimonial: `
						Really the Code Quality, Customer Support, and design
                        are awesome and its good support they are giving. They
                        give an instant solution to our needs. Really awesome. I
                        will strongly recommend to my friends. Simply amazing
                        team and amazing theme! Thank you from United States of
                        America!
	`,
    name: "Mike Anderson",
    company: "Vivaco Studi",
    imageUrl: "/assets/img/testimonials/2.jpeg",
  },
  {
    testimonial: `
						Loved the template design, documentation,
                        customizability and the customer support from Marketify
                        team! I am a noob in programming with very little
                        knowledge about coding but the Marketify team helped me
                        to launch my resume website successfully. Much
                        recommended!
	`,
    name: "Alan Walker",
    company: "Web Designer",
    imageUrl: "/assets/img/testimonials/3.jpeg",
  },
];

const indicatorStyles: CSSProperties = {
  background: "#00c0ff",
  width: 15,
  height: 15,
  display: "inline-block",
  position: "relative",
  borderRadius: "100%",
  margin: "0 12px",
};

const activeIndicatorStyles: CSSProperties = {
  position: "absolute",
  top: -5,
  bottom: -5,
  left: -5,
  right: -5,
  borderRadius: "100%",
  border: "2px solid #fff",
  zIndex: -1,
  transition: "all 0.5s ease",
};

const Testimonials = () => {
  return (
    <div className="foliox_tm_section w-full h-auto clear-both float-left">
      <div className="foliox_tm_testimonials w-full h-auto clear-both float-left mb-[170px]">
        <div className="container">
          <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
            <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
              Testimonials
            </span>
            <h3 className="text-[48px]">What Clients Say</h3>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left relative mt-[50px]">
            <div className="total w-full h-auto clear-both float-left relative">
              <div
                className="in wow fadeInUp w-full max-w-[900px] text-center my-0 mx-auto"
                data-wow-duration="1s"
              >
                <Carousel
                  showArrows={false}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                  autoPlay={true}
                  renderIndicator={(
                    onClickHandler,
                    isSelected,
                    index,
                    label
                  ) => {
                    if (isSelected) {
                      return (
                        <li style={{ ...indicatorStyles }}>
                          <span style={{ ...activeIndicatorStyles }} />
                        </li>
                      );
                    }
                    return (
                      <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                >
                  {testimonials.map((d) => (
                    <TestimonialCard key={d.name} item={d} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
