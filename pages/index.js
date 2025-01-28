import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PhotoGallerySlider from "../src/components/PhotoGallerySlider";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import {
  LeftArrow,
  LeftArrowWhite,
  RightArrow,
  RightArrowWhite,
} from "../src/Icons";
import Footer2 from "../src/layouts/Footer2";
import Layout from "../src/layouts/Layout";
import { fourSlider, heroSlider } from "../src/SliderProps";
import { activeNavMenu } from "../src/utils";
import Header2 from "../src/layouts/header/Header2";
import Footer from "../src/layouts/Footer";

const Index = () => {
  useEffect(() => {
    activeNavMenu();
  }, []);

  return (
    <Layout noFooter noHeader bodyClass={"main"}>
    <Header2 />

<section className="tf-slider-2">
  <div className="overlay" />
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="slider-2">
          <div className="themesflat-carousel clearfix">
            <Swiper
              {...heroSlider}
              className="owl-carousel owl-theme none dots-none"
            >
              <SwiperSlide>
                <div className="item-slider-2">
                  <div className="box-content">
                    <div className="sub f-rubik clr-pri-3">
                    Shanthosh Vidyalaya
                    </div>
                    <div className="title clr-pri-2">
                      Excellence in Education Since 1995
                    </div>
                    <p className="wrap f-rubik">
                    Shanthosh Vidyalaya is dedicated to providing quality education and fostering holistic development for students. Our mission is to nurture young minds and prepare them for a bright future.
                    </p>
                    <div className="btn-slider">
                      <Link href="/admissions">
                        <a className="fl-btn st-2">
                          <span className="inner">Admissions Open</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="sc-img fx">
                    <img
                      src="assets/images/common/imgslhome2.jpg"
                      alt=""
                    />
                    <p>Empowering students with knowledge and values</p>
                  </div>
                  <div className="box-feature">
                    <div className="image">
                      <img
                        src="assets/images/common/slider-2.jpg"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item-slider-2">
                  <div className="box-content">
                    <div className="sub f-rubik clr-pri-3">
                    Shanthosh Vidyalaya
                    </div>
                    <div className="title clr-pri-2">
                      A Legacy of Academic Excellence
                    </div>
                    <p className="wrap f-rubik">
                      With state-of-the-art facilities and a dedicated faculty, we strive to create a learning environment that fosters creativity, critical thinking, and character building.
                    </p>
                    <div className="btn-slider">
                      <Link href="/academics">
                        <a className="fl-btn st-2">
                          <span className="inner">Explore Academics</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="sc-img fx">
                    <img
                      src="assets/images/common/imgslhome2.jpg"
                      alt=""
                    />
                    <p>Inspiring young minds to achieve greatness</p>
                  </div>
                  <div className="box-feature">
                    <div className="image">
                      <img
                        src="assets/images/common/slider-2.jpg"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/*/.themesflat-carousel*/}
        </div>
        {/*/.slider-2*/}
      </div>
    </div>
  </div>
</section>


<section className="tf-section-top tf-discovery">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="title-heading st-2">
          <div className="sub-heading clr-pri-3 f-mulish">
            <LeftArrow />
            <span className="inner-sub st-1">Who We Are</span>
            <RightArrow />
          </div>
          <h2 className="title clr-pri-2">
            Discover Why Shanthosh Vidyalaya Stands Out
          </h2>
        </div>
      </div>
      <div className="col-12">
        <div className="fl-discovery">
          <div
            className="sc-discovery wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="800ms"
          >
            <div className="inner-discovery">
              <div className="box-icon st-1">
                <i className="fas fa-check" />
              </div>
              <h5 className="title">
                <Link href="/about">
                  <a>Academic Excellence</a>
                </Link>
              </h5>
              <p className="sub f-mulish">
                Strong academics, holistic development.
              </p>
              <Link href="/about">
                <a className="fl-btn st-10">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
          {/*/.sc-discovery*/}
          <div
            className="sc-discovery active wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1000ms"
          >
            <div className="inner-discovery">
              <div className="box-icon st-2">
                <i className="fas fa-check" />
              </div>
              <h5 className="title">
                <Link href="/about">
                  <a>Experienced Faculty</a>
                </Link>
              </h5>
              <p className="sub f-mulish">
                Dedicated teachers, nurturing minds.
              </p>
              <Link href="/about">
                <a className="fl-btn st-10">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
          {/*/.sc-discovery*/}
          <div
            className="sc-discovery wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1200ms"
          >
            <div className="inner-discovery">
              <div className="box-icon st-3">
                <i className="fas fa-check" />
              </div>
              <h5 className="title">
                <Link href="/about">
                  <a>Co-Curricular Activities</a>
                </Link>
              </h5>
              <p className="sub f-mulish">
                Sports, arts, talent development.
              </p>
              <Link href="/about">
                <a className="fl-btn st-10">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
          {/*/.sc-discovery*/}
          <div
            className="sc-discovery wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1400ms"
          >
            <div className="inner-discovery">
              <div className="box-icon st-4">
                <i className="fas fa-check" />
              </div>
              <h5 className="title">
                <Link href="/about">
                  <a>Innovative Learning Spaces</a>
                </Link>
              </h5>
              <p className="sub f-mulish">
                Interactive classrooms, creative labs, and resources.
              </p>
              <Link href="/about">
                <a className="fl-btn st-10">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
          {/*/.sc-discovery*/}
          <div
            className="sc-discovery wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1600ms"
          >
            <div className="inner-discovery">
              <div className="box-icon st-5">
                <i className="fas fa-check" />
              </div>
              <h5 className="title">
                <Link href="/about">
                  <a>Values & Discipline</a>
                </Link>
              </h5>
              <p className="sub f-mulish">
                Moral values, disciplined environment.
              </p>
              <Link href="/about">
                <a className="fl-btn st-10">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
          {/*/.sc-discovery*/}
        </div>
      </div>
    </div>
  </div>
</section>


<section className="tf-section tf-sc-about2">
  <div className="container">
    <div className="row">
      <div className="col-xl-7 col-lg-7 col-md-12 col-12">
        <div className="feature-about2">
          <img
            src="assets/images/common/sc-aboutus-2.jpg"
            alt="Image"
            className="wow fadeInLeft animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1000ms"
          />
          <div
            className="box-parents wow fadeInUp animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1200ms"
          >
            <h5 className="clr-pri-2 title">
              <span className="clr-pri-3">1000+</span>Parents Speak About Our School
            </h5>
            <ul className="fx">
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-5.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-1.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-2.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-3.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-4.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-6.jpg"
                  alt="Image"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-12 col-12">
        <div className="sc-about-2">
          <div className="title-heading">
            <div className="sub-heading clr-pri-3 f-mulish">
              <span className="inner-sub st-2">About Us</span>
              <RightArrow />
            </div>
            <h2 className="title clr-pri-2">
              Empowering Students for a Brighter Future
            </h2>
          </div>
          <div className="inner">
            <p
              className="wrap f-mulish clr-pri-4 wow fadeIn animated"
              data-wow-delay="0.3ms"
              data-wow-duration="1000ms"
            >
              Shanthosh Vidyalaya is committed to providing a high-quality education in a nurturing environment. We focus on the holistic development of students with an emphasis on academics, sports, and extra-curricular activities.
            </p>
            <ul>
              <li className="st-1 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Qualified Faculty</p>
              </li>
              <li className="st-2 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Sports Activities</p>
              </li>
              <li className="st-3 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Cultural Celebrations</p>
              </li>
              <li className="st-4 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Interactive Learning</p>
              </li>
            </ul>
            <Link href="/about">
              <a className="fl-btn st-11">
                <span className="inner">Learn More About Us</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<TfCounter nonst />



{/* <section className="tf-section tf-service">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="title-heading st-3">
          <div className="sub-heading clr-pri-1 f-mulish">
            <LeftArrowYellow />
            <span className="inner-sub st-1">What We Offer </span>
            <RightArrowYellow />
          </div>
          <h2 className="title clr-pri-1">
            We Provide Awesome Program To Build Bright Future
          </h2>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service st-3 fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="800ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-1.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Arts &amp; Drawing</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service st-4 fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1000ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-2.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Basic Language</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-3.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Special Education</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service st-2 fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1400ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-4.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Music,Videos &amp; Films</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service st-3 fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="800ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-5.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Birthday Party</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service st-4 fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1000ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-6.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Life Style &amp; Food</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-7.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Physical Exercise</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div
          className="sc-service st-2 fl-scale wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1400ms"
        >
          <div className="box-feature inner-scale">
            <img
              src="assets/images/common/sc-service-8.jpg"
              alt="Image"
            />
          </div>
          <div className="box-content">
            <h4 className="title">
              <Link href="/program">
                <a className="clr-pri-1">Activity Rooms</a>
              </Link>
            </h4>
            <p className="sub f-mulish clr-pri-1">
              Quis autem vel eum rehenderit
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


<section className="tf-section tf-sc-about1">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-8 col-md-12 col-12">
        <div
          className="sc-about-1 wow fadeInLeft animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1400ms"
        >
          <div className="title-heading">
            <div className="sub-heading clr-pri-3 f-mulish">
              <span className="inner-sub st-2">Why Choose Us</span>
              <RightArrow />
            </div>
            <h2 className="title clr-pri-2">
              Excellence in Education for Over 25 Years!
            </h2>
          </div>
          <div className="inner">
            <p className="wrap f-mulish clr-pri-4">
            Shanthosh Vidyalaya focuses on nurturing students with quality
              education, modern infrastructure, and co-curricular activities
              to foster holistic development.
            </p>
            <ul>
              <li className="st-1 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Qualified Faculty</p>
              </li>
              <li className="st-2 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Modern Infrastructure</p>
              </li>
              <li className="st-3 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Holistic Learning</p>
              </li>
              <li className="st-4 fx">
                <i className="fas fa-check" />
                <p className="clr-pri-2">Cultural Celebrations</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="tf-sc-contact tf-section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div
          className="sc-contact wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="wrap">
          <h2 className="title clr-pri-1">
        Ready To Admit Your Child to Shanthosh Vidyalaya?
      </h2>
      <p className="sub clr-pri-1 f-mulish">
        Join us at Shanthosh Vidyalaya, where education meets excellence and holistic development.
      </p>
          </div>
          <div className="inner-sc-contact">
            <div className="box-btn">
              <Link href="/contact">
                <a className="fl-btn st-9">
                  <span className="inner">Enroll Now</span>
                </a>
              </Link>
            </div>
            <div className="inner-contact fx">
              <svg
                id="CTA"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={49}
                height={47}
                viewBox="0 0 49 47"
              >
                <g>
                  <image
                    width={49}
                    height={47}
                    xlinkHref="data:img/png;base64,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"
                  />
                </g>
              </svg>
              <ul>
                <li className="clr-pri-1">Get In Touch</li>
                <li className="clr-pri-1">+91 7942698021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="tf-section tf-galley">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="title-heading st-4">
          <div className="sub-heading clr-pri-3 f-mulish">
            <LeftArrow />
            <span className="inner-sub st-1">Photo Gallery</span>
            <RightArrow />
          </div>
          <h2 className="title clr-pri-2">
            Explore Our Case Studies &amp; Recent Photo Gallery
          </h2>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-12">
        <div
          className="sc-gallery wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature active">
            <img
              src="assets/images/common/sc-gallery-1.jpg"
              alt="Image"
            />
            <div className="overlay" />
            <div className="box-content">
              <h5 className="title">
                <Link href="/gallery">
                  <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                </Link>
              </h5>
              <p className="f-rubik">kindergarten</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-12">
        <div
          className="sc-gallery wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature">
            <img
              src="assets/images/common/sc-gallery-2.jpg"
              alt="Image"
            />
            <div className="overlay" />
            <div className="box-content">
              <h5 className="title">
                <Link href="/gallery">
                  <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                </Link>
              </h5>
              <p className="f-rubik">kindergarten</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-12">
        <div
          className="sc-gallery wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature">
            <img
              src="assets/images/common/sc-gallery-3.jpg"
              alt="Image"
            />
            <div className="overlay" />
            <div className="box-content">
              <h5 className="title">
                <Link href="/gallery">
                  <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                </Link>
              </h5>
              <p className="f-rubik">kindergarten</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
        <div
          className="sc-gallery mg-bt wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature">
            <img
              src="assets/images/common/sc-gallery-4.jpg"
              alt="Image"
            />
            <div className="overlay" />
            <div className="box-content">
              <h5 className="title">
                <Link href="/gallery">
                  <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                </Link>
              </h5>
              <p className="f-rubik">kindergarten</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
        <div
          className="sc-gallery mgbt-0 wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature">
            <img
              src="assets/images/common/sc-gallery-5.jpg"
              alt="Image"
            />
            <div className="overlay" />
            <div className="box-content">
              <h5 className="title">
                <Link href="/gallery">
                  <a className=" clr-pri-2">Outdoor &amp; Gaming</a>
                </Link>
              </h5>
              <p className="f-rubik">kindergarten</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





{/* <section className="tf-section tf-quote">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="title-heading st-3">
          <div className="sub-heading clr-pri-3 f-mulish">
            <LeftArrow />
            <span className="inner-sub st-1">Parents Feedback</span>
            <RightArrow />
          </div>
          <h2 className="title clr-pri-2">
            What Parents Say About Our
            <span className="clr-pri-3">Kindco</span> Kindergarten
          </h2>
        </div>
      </div>
      <div className="col-12">
        <div className="sc-quote">
          <div className="list-author m-t-62">
            <ul>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-1.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-2.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-3.jpg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  src="assets/images/thumbnails/list-quote-4.jpg"
                  alt="Image"
                />
              </li>
            </ul>
          </div>
          <div className="inner">
            <div className="themesflat-carousel clearfix">
              <FeedbackSlider />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}



{/* <section className="tf-section tf-sc-blog">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="heading st-1">
          <div className="title-heading">
            <div className="sub-heading clr-pri-3 f-mulish">
              <span className="inner-sub st-2">
                Latest News &amp; Blog{" "}
              </span>
              <RightArrow />
            </div>
            <h2 className="title clr-pri-2">
              Get Every Single Updates Latest News &amp; Blog
            </h2>
          </div>
          <div className="heading-btn st-1">
            <Link href="/blog-single">
              <a className="fl-btn st-3">
                <span className="inner">view more news</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-12">
        <div
          className="box-artice fl-scale st-2 wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature inner-scale">
            <Link href="/blog-single">
              <a>
                <img
                  src="assets/images/post/box-aricle1.jpg"
                  alt="Image"
                />
              </a>
            </Link>
          </div>
          <div className="box-content">
            <div className="meta-post st-1">
              <ul className="fx">
                <li>
                  <Link href="/blog-single">
                    <a className="fx">
                      <i className="far fa-calendar-alt clr-pri-3" />
                      25 Dec 2021
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single">
                    <a className="fx">
                      <i className="far fa-comment-alt-dots clr-pri-3" />
                      Comments (05)
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <h4 className="title-article-post">
              <Link href="/blog-single">
                <a>
                  Useful VS Code Extensions Fronts End Developer Smashing
                </a>
              </Link>
            </h4>
            <div className="btn-rm">
              <Link href="/blog-single">
                <a className="fl-btn st-4">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-12">
        <div
          className="box-artice fl-scale st-2 wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature inner-scale">
            <Link href="/blog-single">
              <a>
                <img
                  src="assets/images/post/box-aricle2.jpg"
                  alt="Image"
                />
              </a>
            </Link>
          </div>
          <div className="box-content">
            <div className="meta-post st-1">
              <ul className="fx">
                <li>
                  <Link href="/blog-single">
                    <a className="fx">
                      <i className="far fa-calendar-alt clr-pri-3" />
                      25 Dec 2021
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single">
                    <a className="fx">
                      <i className="far fa-comment-alt-dots clr-pri-3" />
                      Comments (05)
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <h4 className="title-article-post">
              <Link href="/blog-single">
                <a>
                  Everything Developers Need Know About Figma World Engine
                </a>
              </Link>
            </h4>
            <div className="btn-rm">
              <Link href="/blog-single">
                <a className="fl-btn st-4 active">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-4 col-12">
        <div
          className="box-artice fl-scale st-2 wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        >
          <div className="box-feature inner-scale">
            <Link href="/blog-single">
              <a>
                <img
                  src="assets/images/post/box-aricle3.jpg"
                  alt="Image"
                />
              </a>
            </Link>
          </div>
          <div className="box-content">
            <div className="meta-post st-1">
              <ul className="fx">
                <li>
                  <Link href="/blog-single">
                    <a className="fx">
                      <i className="far fa-calendar-alt clr-pri-3" />
                      25 Dec 2021
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single">
                    <a className="fx">
                      <i className="far fa-comment-alt-dots clr-pri-3" />
                      Comments (05)
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <h4 className="title-article-post">
              <Link href="/blog-single">
                <a>
                  Create A Headless WordPress Site JAMstack Useful VS Code
                  Extensions Fronts End Developer Smashing
                </a>
              </Link>
            </h4>
            <div className="btn-rm">
              <Link href="/blog-single">
                <a className="fl-btn st-4">
                  <span className="inner">read more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
<Footer />
    </Layout>
  );
};
export default Index;
