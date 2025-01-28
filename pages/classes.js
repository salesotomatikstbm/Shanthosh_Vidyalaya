import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import FAQs from "./faq";

const Classes = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setState] = useState([]);
  useEffect(() => {
    pagination(".single-product__", sort, active);
    let list = document.querySelectorAll(".single-product__");
    setState(getPagination(list.length, sort));
  }, [active]);

  return (
    <Layout bodyClass={"classes"}>
      <PageBanner pageName={"Academics"} />
      <section className="tf-section tf-courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Class Structure</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  We Provide Awesome Programs To Build A Bright Future
                </h2>
              </div>
            </div>
            {/** Class Cards */}
            {[
              {
                title: "Pre-Primary",
                description: "Play-based learning.",
                image: "assets/images/common/slider-courses-1.jpg",
              },
              {
                title: "Primary",
                description: "Foundation-building in core subjects.",
                image: "assets/images/common/slider-courses-2.jpg",
              },
              {
                title: "Middle School",
                description:
                  "Advanced academic skills and co-curricular activities.",
                image: "assets/images/common/slider-courses-3.jpg",
              },
              {
                title: "High School",
                description: "Focus on board exams and career readiness.",
                image: "assets/images/common/slider-courses-4.png",
              },
              {
                title: "Digital Social Network",
                description: "Learning about the digital world.",
                image: "assets/images/common/slider-courses-2.jpg",
                link: "/classe-details",
              },
              {
                title: "Physical Education",
                description: "Enhancing physical fitness and teamwork.",
                image: "assets/images/common/slider-courses-3.jpg",
                link: "/classe-details",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__"
              >
                <div
                  className="item-courses wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1300ms"
                >
                  <div className="box-feature">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="box-content">
                    <div className="box-wrap">
                      <h4 className="title">
                        {item.link ? (
                        
                            <a>{item.title}</a>
                        
                        ) : (
                          item.title
                        )}
                      </h4>
                      <p className="sub f-mulish">{item.description}</p>
                    </div>
                  </div>
                </div>
                              </div>
            ))}
          </div>
          {/** Pagination */}
          {/* <PagginationFuntion
            setActive={setActive}
            active={active}
            state={state}
          /> */}
        </div>
      </section>
      <FAQs />
    </Layout>
  );
};

export default Classes;
