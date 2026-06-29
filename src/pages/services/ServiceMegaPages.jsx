import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServicesStore from "../../store/store.js";
import Contact from "../../Components/sections/Contact/Contact.jsx";
import impactImg from "../../assets/images/impact.webp";
import companyRating from "../../assets/images/company-rating.webp";
import { Frame, Framebalck, Star } from "../../assets/icons/icon.jsx";
import {
  Consult1,
  Consult2,
  Consult3,
  Consult4,
  Uxsearch,
  Uxsearch2,
  Uxsearch3,
  Uxsearch4,
  productopt,
  productopt2,
  productopt3,
  productopt4,
  experienceArti,
  experienceArti2,
  experienceArti3,
  experienceArti4,
  designsys,
  designsys2,
  designsys3,
  designsys4,
  protoUser,
  protoUser2,
  protoUser3,
  protoUser4,
  webDesign,
  webDesign2,
  webDesign3,
  webDesign4,
  mobileDesign,
  mobileDesign2,
  mobileDesign3,
  mobileDesign4,
  telescopeicon,
  codeicon,
  creativedesgiIcon3,
  nocodeIcon1,
  maintanceicon,
  questionmarkicon,
} from "../../data/servicepagesvg.jsx";
import { processNumberMap } from "./DataProcess.jsx";

const ServicePage = () => {
  const { slug } = useParams();
  const { data, fetchData } = useServicesStore();
  const [activeWhyUs, setActiveWhyUs] = useState(null);

  const iconMap = {
    Consult1,
    Consult2,
    Consult3,
    Consult4,
    Uxsearch,
    Uxsearch2,
    Uxsearch3,
    Uxsearch4,
    productopt,
    productopt2,
    productopt3,
    productopt4,
    experienceArti,
    experienceArti2,
    experienceArti3,
    experienceArti4,
    designsys,
    designsys2,
    designsys3,
    designsys4,
    protoUser,
    protoUser2,
    protoUser3,
    protoUser4,
    webDesign,
    webDesign2,
    webDesign3,
    webDesign4,
    mobileDesign,
    mobileDesign2,
    mobileDesign3,
    mobileDesign4,
    telescopeicon,
    codeicon,
    creativedesgiIcon3,
    nocodeIcon1,
    maintanceicon,
    questionmarkicon,
  };

  useEffect(() => {
    if (!data) fetchData();
  }, [data, fetchData]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#090909] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#F3FE00] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const allServices = data.categories.flatMap((cat) => cat.services);
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#090909] flex items-center justify-center">
        <p className="text-white text-xl">Service not found</p>
      </div>
    );
  }

  const { page } = service;

  return (
    <main className="bg-[#090909] text-white">
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 bg-[#090909]">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative">
            {/* Star decoration */}
            <div className="absolute top-40 left-15 hidden lg:block ">
              <Star />
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-none mb-6 uppercase font-['Geologica']">
              {page.hero.title}
            </h1>

            <p className="text-white text-lg leading-7 mb-10 max-w-2xl capitalize font-['Inter'] ">
              {page.hero.subtitle}
            </p>

            {/* Animated button — hover pe text change */}

            <Link
              href="https://calendly.com/contact-zeeframes/30min"
              target="_blank"
              rel="noreferrer"
              className="relative  group border py-2.5 px-4 border-gray-500 text-white hover:text-[#F3FE00] hover:border-[#F3FE00] bg-transparent overflow-hidden rounded-3xl transition duration-300"
            >
              <span className="transition-opacity duration-700 group-hover:opacity-0 font-['Inter']">
                Book a Free Call
              </span>
              <span className="absolute font-['Inter'] inset-0 flex items-center justify-center gap-4 opacity-0 translate-x-2  transform-gpu transition-all duration-300 text-[#F3FE00] ease-out group-hover:opacity-100 group-hover:translate-x-0">
                Book a Demo
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="py-20 bg-[#090909]">
        <div className="container">
          <div className="grid sm:grid-cols-[minmax(0,502px)_minmax(0,660px)] grid-cols-1 sm:gap-20 gap-8">
            {/* Left — image */}
            <div>
              <img
                src={impactImg}
                alt="Impact"
                width="502"
                height="361"
                className="max-w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right — content */}
            <div className="flex flex-col items-start sm:gap-8 gap-4">
              <p className="text-[#F3FE00] text-sm uppercase tracking-widest font-['Geologica']">
                {page.impact.badge}
              </p>
              <div className="flex flex-col gap-4">
                <h2 className="text-white font-['Geologica'] sm:text-[40px] text-[28px] sm:leading-12 leading-8 font-bold sm:w-[494px] w-full">
                  {page.impact.heading}
                </h2>
                <p className="text-[#BDBDBD] font-['Inter'] text-sm sm:w-[570px] leading-[21px]">
                  {page.impact.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:gap-8 gap-3">
                {page.impact.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span>
                      <Frame />
                    </span>
                    <span className="text-white font-['Inter'] text-md font-medium leading-5.25">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-[#090909]">
        <div className="container">
          <div className="flex flex-col sm:gap-5 gap-4">
            <h2 className="text-[#F3FE00]  font-['Geologica'] text-sm text-center uppercase tracking-widest">
              {page.process.badge}
            </h2>
            <p className="text-white  font-['Geologica'] sm:w-[677px] w-full sm:mx-auto sm:text-[40px] text-[28px] font-bold flex justify-center text-center sm:leading-12">
              {page.process.heading}
            </p>
            <div className="grid md:grid-cols-2 sm:mt-12 mt-4 lg:grid-cols-4 gap-5">
              {page.process.steps.map((step, i) => {
                const NumberIcon = processNumberMap[i + 1];
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col gap-4 p-5 rounded-2xl bg-[#121212] hover:bg-[#F3FE00] hover:shadow-[0_16px_23px_0_rgba(243,253,0,0.06)] transition duration-300"
                  >
                    {/* Step number */}
                    <div className="absolute top-6 right-6 text-[#1A1A1A] group-hover:text-[#E2EC07] select-none leading-none">
                      <NumberIcon />
                    </div>
                    <div className="mb-8 text-white group-hover:text-black ">
                      {iconMap[step.icon]}
                    </div>
                    <div className="flex flex-col gap-2 relative z-10">
                      <h3 className="text-lg mb-3 font-['Geologica'] text-white group-hover:text-black leading-[21px] font-semibold">
                        {step.title}
                      </h3>
                      <p className="font-['Inter'] text-[#BDBDBD] text-sm group-hover:text-black leading-[21px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 bg-[#090909]">
        <div className="container">
          <div className="flex sm:flex-row flex-col items-start gap-12">
            {/* Left — accordion */}
            <div className="flex flex-col gap-6 w-full sm:max-w-[659px]">
              <h2 className="text-white sm:text-[40px] text-[28px] font-bold sm:leading-12">
                {page.why_us.heading}
              </h2>
              <div className="space-y-3">
                {page.why_us.points.map((point, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 p-3 bg-[#121212] rounded-lg cursor-pointer"
                  >
                    <span className="p-2 rounded-full bg-[#F3FE00] items-center shrink-0">
                      <Framebalck />
                    </span>

                    <div className="flex flex-col gap-2">
                      <p className="text-base text-white font-semibold leading-[21px]">
                        {point.title}
                      </p>

                      <div
                        className="
        overflow-hidden
        max-h-0
        opacity-0
        transition-all
        duration-300
        group-hover:max-h-40
        group-hover:opacity-100
        text-[#DCDCDC]
        text-sm
        leading-5
      "
                      >
                        {point.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — rating image */}
            <img
              src={companyRating}
              alt="Company Rating"
              width="502"
              height="405"
              className="h-fit max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <Contact />
    </main>
  );
};

export default ServicePage;
