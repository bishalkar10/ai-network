import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screeen h-auto px-3 pb-10 pt-20"
    >
      <div className="bp2:grid bp2:grid-cols-[auto,1fr] bp:max-w-[516px] md:max-w-[700px] bp2:max-w-4xl xl:max-w-[960px] mx-auto bp2:gap-6">
        {/* grid col 1 */}
        <div className="bp2:w-[216px] h-auto flex bp2:flex-col flex-col bp:flex-row justify-center gap-6 items-center">
          <img
            src="crane-image.jpg"
            alt="crane-image"
            className="rounded-[15px] animate-bounce-slow w-[216px] mx-auto sm:mx-0"
          />
          {/* <div className="bg-[#59C09D] max-w-lg sm:max-w-full px-4 py-5 text-4xl font-bold flex items-center gap-2 rounded-xl mx-auto sm:mx-0">
            10+ <span className="text-xl ">Years of Experience</span>
          </div> */}
        </div>

        {/* grid col 2 */}
        <div className="grid md:grid-cols-[auto,1fr] md:gap-6">
          <h2 className="text-white text-2xl font-bold md:col-span-2 my-6 bp2:my-0 text-center">
            we use Autonomous technology in the industry
          </h2>
          <div className="mx-auto w-[276px] mb-6 md:m-0">
            <img
              className="w-[276px] h-auto rounded-[15px] "
              src="robot-standing-image.jpg"
              alt="robot-standing-image"
            />
          </div>
          <div className="content">
            <p className="text-[#AAA8B1]">
              The AI and Robotics industry is a rapidly evolving field at the
              forefront of technological innovation.
            </p>
            <br />
            <p className="text-[#AAA8B1]">
            The AI Network Project is a revolutionary initiative that seeks to harness the power of artificial intelligence within the blockchain ecosystem. This whitepaper outlines the project's phases, technical architecture, AI integration, ecosystem utilities, security measures, community engagement strategies, token economics, and future prospects. By merging AI capabilities with decentralized technology, our goal is to create a platform that offers users a seamless experience in trading, development, and content creation.
            </p>
            <a
              className="my-7 inline-block px-4 py-2 rounded bg-[#F6AE64] hover:bg-[#59C09D] duration-300 cursor-pointer"
              href="#contact"
            >
              Contact Us
            </a>
            <div className="flex gap-6">
              <div>
                <h2 className="text-[#59C09D] font-bold text-3xl">99%</h2>
                <span className="text-[#AAA8B1]">Client Satisfaction</span>
              </div>
              <div>
                <h2 className="text-[#59C09D] font-bold text-3xl">100+</h2>
                <span className="text-[#AAA8B1]">Trusted Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
