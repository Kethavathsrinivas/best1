import React from "react";
import one from "./gunjan.svg";
import three from "./blog-preview.png";
import "./Online.css";
import OnlineContent from "./OnlineContent";
import two from "./blog-image.png";

const Online = ({ main_con, rel_services, ser_card, content_ser }) => {
  console.log(main_con);

  return (
    <div className="">
      <div className="text-center bg-purple-200 pt-[40px] pb-[40px]">
        <p className="text-[40px] font-sans font-bold">Services</p>
        <p className="font-sans text-[20px]">
          Home / Services / {main_con?.heading_main_con}
        </p>
      </div>

      <div className="left_grid pl-[40px] pr-[40px] pt-[70px]">
        <div className="online_left">
          <div className="mb-[10px]">
            <p className="font-sans font-bold text-[20px]">
              {main_con?.heading_main_con}
            </p>
            <p className="flex">
              <span>
                <img src={one} className="h-[40px] rounded-2xl " />
              </span>
              <p className="m-[10px] text-center text-lg font-sans">
                By Chinmoy Mohan | Published on November 14,2023 | 2min read
              </p>
            </p>
          </div>
          <div className="services_content ">
            <img src={two} className="mb-[10px]" />
            {main_con?.con?.map((item, index) => {
              return <p className="text-justify ">{item}</p>;
            })}

            {content_ser?.map((item, index) => {
              if (item?.ser_heading) {
                return (
                  <>
                    <div>
                      <h3 className="font-sans font-bold ser_heading">
                        {item?.ser_heading}
                      </h3>
                      {item?.ser_par?.map((subitem) => {
                        return (
                          <div className="my-[10px]">
                            <p className="font-sans text-justify">{subitem}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              } else {
                return (
                  <div>
                    <h3 className="font-sans font-bold ser_heading">
                      {item?.ser_sub_heading}
                    </h3>
                    <p className="text-justify">{item?.ser_sub_content}</p>
                    <h3 className="font-sans font-bold ser_heading text-justify">
                      {item?.ser_sub_main_heading}
                    </h3>
                    {item?.sub_section?.map((it, i) => {
                      return (
                        <>
                          <h3 className="font-sans font-bold  ser_heading">
                            {it?.sub_section_heading}
                          </h3>
                          {it?.sub_section_content?.map((sub_mul_con, ind) => {
                            return (
                              <div className="my-[10px]">
                                <p className="font-sans text-justify">
                                  {sub_mul_con}
                                </p>
                              </div>
                            );
                          })}
                        </>
                      );
                    })}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="online_right">
          <h1 className="font-sans font-bold text-[17px]">RELATED SERVICES</h1>

          <div className="mt-[18px]  p-[20px] bg-blue-300 rel_ser">
            {rel_services?.map((item, index) => {
              return (
                <div className="flex gap-10 border-b-4 border-purple-300 my-[20px] pb-[20px] sub_rel_ser">
                  <img src={item?.img} className="h-[140px] w-[150px]" />
                  <div className="">
                    <p className="font-sans font-bold text-purple-900">
                      {item?.date}
                    </p>
                    <a href="#" className="font-sans font-bold">
                      {item?.content}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="">
            {ser_card?.map((item, index) => {
              if (item?.card_con) {
                return (
                  <div className="bg-purple-300 p-[20px] rounded-2xl mb-[20px]">
                    <p className="my-[10px]">{item?.card_con}</p>
                    <button className="h-[50px] w-[300px] bg-purple-500 text-white text-2xl font-sans text-center rounded">
                      {item?.btn_con}
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="my-[20px]">
        <div className="bg-purple-300 p-[40px]  mb-[20px]  sub_grid">
          <p className="text-center font-sens text-[25px] font-bold">
            Don't miss this opportunity to enhance your skills and confidence,
            take free mock tests now!
          </p>
          <button className="h-[50px] w-[200px] bg-purple-800 text-white text-2xl font-sans text-center rounded m-auto">
            Take Free Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Online;
