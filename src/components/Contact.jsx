import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  const facebookLink = ""; //   TODO: Enter facebook Link
  const twitterLink = ""; //   TODO: enter twitter link
  const instagramLink = ""; //   TODO: enter instagram link
  const linkedinLink = ""; //   TODO: enter linkedin link
  const mobileNumber = "+175325887753"; //  TODO: replace number with original one
  const companyMail = "example@ai.com"; //   TODO: replace with original email
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    question: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, subject, question } = formData;
    const mailtoLink = `mailto:${companyMail}?subject=${subject}&body=${question}%0D%0A%0D%0A${name}%0D%0AEmail: ${email}%0D%0APhone : ${phone}`;
    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      question: "",
    });
  };

  return (
    <section id="contact" className="px-3 pb-20">
      <h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
        Contact
      </h2>
      <div className="bp2:w-full bp2:px-7 bp2:gap-x-6 bp2:grid bp2:grid-cols-3 max-w-lg md:max-w-[720px] bp2:max-w-full mx-auto">
        <div className="p-6 bg-[#121320] rounded-[15px] bp2:row-span-4">
          <h3 className="text-white font-bold text-2xl mb-6">
            Contact Information
          </h3>

          <ul className="flex flex-col gap-6 mb-6">
            <li>
              <h4 className="text-white font-bold text-lg">
                <FontAwesomeIcon icon={faLocationDot} /> Address
              </h4>
              <span className="text-[#AAA8B1]">
                717 Old Edinburgh Road, Belmontze A7M Austin, M7D
              </span>
            </li>
            <li>
              <h4 className="text-white font-bold text-lg">
                <FontAwesomeIcon icon={faPhoneVolume} /> Phone
              </h4>
              <a href={`tel:${mobileNumber}`} className="text-[#AAA8B1]">
                {mobileNumber}
              </a>
            </li>
            <li>
              <h4 className="text-white font-bold text-lg">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </h4>
              <a href={`mailto:${companyMail}`} className="text-[#AAA8B1]">
                {companyMail}
              </a>
            </li>
          </ul>

          <ul className="flex gap-6 text-white">
            <li className="border-2 border-white hover:border-[#F6AE64] hover:text-[#F6AE64] duration-300 h-10 w-10 rounded-full grid place-content-center">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li className="border-2 border-white hover:border-[#F6AE64] hover:text-[#F6AE64] duration-300 h-10 w-10 rounded-full grid place-content-center">
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="border-2 border-white hover:border-[#F6AE64] hover:text-[#F6AE64] duration-300 h-10 w-10 rounded-full grid place-content-center">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="border-2 border-white hover:border-[#F6AE64] hover:text-[#F6AE64] duration-300 h-10 w-10 rounded-full grid place-content-center">
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>

        <h2 className="block text-white text-3xl font-bold my-7 bp2:mt-0 bp2:col-span-2">
          Find your answer? Ask here
        </h2>
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          className="bp2:col-span-2 bp2:gap-x-6 bp2:grid bp2:grid-cols-2 bp2:auto-rows-min relative"
        >
          <div className="mb-5">
            <label className="block mb-2 text-[#AAA8B1] " htmlFor="name">
              Name
            </label>

            <input
              className="border-[1px] border-[#364046] rounded-md outline-none bg-transparent pl-[15px] py-3 w-full caret-white text-white"
              placeholder="Your name"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-[#AAA8B1] " htmlFor="email">
              Email
            </label>

            <input
              className="border-[1px] border-[#364046] rounded-md outline-none bg-transparent pl-[15px] py-3 w-full caret-white text-white"
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-[#AAA8B1] " htmlFor="phone">
              Phone
            </label>

            <input
              className="border-[1px] border-[#364046] rounded-md outline-none bg-transparent pl-[15px] py-3 w-full caret-white text-white"
              placeholder="Your number"
              id="phone"
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-[#AAA8B1] " htmlFor="subject">
              Subject
            </label>

            <input
              className="border-[1px] border-[#364046] rounded-md outline-none bg-transparent pl-[15px] py-3 w-full caret-white text-white"
              placeholder="Your subject"
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bp2:mb-0 mb-5  bp2:col-span-2">
            <label className="block mb-2 text-[#AAA8B1] " htmlFor="question">
              Your Question
            </label>

            <textarea
              className="border-[1px] border-[#364046] h-24 rounded-md outline-none bg-transparent pl-[15px]  py-3 w-full resize-none caret-white text-white"
              placeholder="Write your question here.."
              id="question"
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className=" block rounded-lg py-2 px-3 bg-purple-900 text-white absolute -bottom-12 left-0"
          >
            Send Messege
          </button>
        </form>
      </div>
    </section>
  );
}
