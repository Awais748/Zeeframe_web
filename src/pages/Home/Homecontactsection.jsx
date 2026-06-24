import React from "react";
import HomeSectionHeader from "../../Components/ui/HomeHeader";
import Input from "../../Components/ui/Input";
import ali from "../../assets/images/ali.webp";
import babar from "../../assets/images/babar.webp";
import techlogo from "../../assets/images/techlogo.webp";
import trustpilot from "../../assets/images/trustpilot.svg";
import uilogo from "../../assets/images/ui-ux.webp";
import awardbanner from "../../assets/images/awardbanner.svg";
import Textarea from "../../Components/ui/Textarea";
import { Button } from "../../Components/ui/Button";
import { Link } from "react-router-dom";
import { Form, Linkden, Mail, Whatsapp } from "../../assets/icons/icon";

const Homecontactsection = () => {
  return (
    <section className="bg-black sm:py-20 py-8">
      <div className="container">
        <div className="grid sm:grid-cols-[minmax(100px,636px)_minmax(100px,491px)] grid-cols-1 gap-16">
          <div className="flex flex-col gap-8">
            <HomeSectionHeader
              align="start"
              eyebrow="Contact us"
              title="Lets work on what you care about!"
              description="Got a project in mind? From a full UI/UX refresh to a brand-new digital experience, we’re ready to help. Let’s turn your vision into reality"
              titleclassName="sm:w-127 w-full pt-4"
              descriptionclassName="sm:w-133 w-full"
            />
            <div className="flex flex-col sm:flex-row sm:items-center items-start gap-6">
              <div className="flex items-center gap-4">
                <img src={ali} alt="Muhammad Ali" className="w-12 h-12" />
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium leading-6 text-[#FFF]">
                      Muhammad Ali
                    </h3>
                    <Link aria-label="linkden" to="#" target="_blank">
                      <Linkden />
                    </Link>
                  </div>
                  <p className="text-sm leading-5 text-[#D5D5D5]">
                    Director & Co-Founder
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={babar} alt="Muhammad Ali" className="w-12 h-12" />
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-medium leading-6 text-[#FFF]">
                      Muhammad Babar
                    </h3>
                    <Link aria-label="linkden" to="#" target="_blank">
                      <Linkden />
                    </Link>
                  </div>
                  <p className="text-sm leading-5 text-[#D5D5D5]">
                    Director & Co-Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-5 text-[#D5D5D5] flex items-center gap-2">
                <span className="shrink-0">
                  <Form />
                </span>
                You’ll hear from us within one business day.
              </p>
              <p className="text-sm leading-5 text-[#D5D5D5] flex items-center gap-2">
                <span className="shrink-0">
                  <Form />
                </span>
                Our team will gather your project details and put together a
                clear brief.
              </p>

              <p className="text-sm leading-5 text-[#D5D5D5] flex items-center gap-2">
                <span className="shrink-0">
                  <Form />
                </span>
                We’ll provide a tailored estimate and share a proposal for your
                review.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="https://techbehemoths.com/company/zeeframes"
                target="_blank"
              >
                <img src={techlogo} alt="techlogo" className="w-27 h-9" />
              </Link>
              <Link
                to="https://www.trustpilot.com/review/zeeframes.com"
                target="_blank"
              >
                <img src={trustpilot} alt="trustpilot" className="w-39 h-9" />
              </Link>
              <Link
                to="https://selectedfirms.co/agency/zeeframes"
                target="_blank"
              >
                <img src={uilogo} alt="uilogo" className="w-13 h-9" />
              </Link>
              <Link
                to="https://techbehemoths.com/awards-2024/ux-ui-design/pakistan#view=64495"
                target="_blank"
              >
                <img src={awardbanner} alt="awardbanner" className="w-12 h-9" />
              </Link>
            </div>
          </div>
          <form
            action="submit"
            className="p-6 rounded-3xl border bg-[rgba(255,255,255,0.05)] border-[#373737]"
          >
            <div className="flex flex-col gap-7">
              <Input placeholder="Full Name*" />
              <Input placeholder="Email*" />
              <Input placeholder="Company" />
              <Input placeholder="Contact" />
              <Textarea
                Name="projects"
                Id="Project"
                placeholder="Tell us about your project*"
              />
              <Button className="w-full h-12 text-[#FFF]  bg-[linear-gradient(90deg,#F3FE00_0%,#33DE1D_100%)]">
                Submit Inquiry
              </Button>
              <div className="flex flex-col  gap-3">
                <p className="text-sm leading-5 text-[#F2F2F2]">
                  Hate contact forms? Direct Contact.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center items-start gap-4">
                  <Link
                    href="https://wa.me/+14232493851"
                    target="blank"
                    aria-label="contact us on whatsapp via +14232493851"
                    className="text-sm leading-5 text-[#BDBDBD] flex items-center gap-1.5"
                  >
                    <Whatsapp />
                    +14232493851
                  </Link>
                  <Link
                    href="mailto:businessmanager@zeeframes.com"
                    target="blank"
                    aria-label="Mail us on businessmanager@zeeframes.com"
                    className="text-sm leading-5 text-[#BDBDBD] flex items-center gap-1.5"
                  >
                    <Mail />
                    businessmanager@zeeframes.com
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Homecontactsection;
