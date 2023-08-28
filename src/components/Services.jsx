import React from "react";
import Card from "./Card";
export default function Services() {
  const cardDetails = [
    {
      imgPath: "service-img-2.jpg",
      altText: "Service 1",
      title: "Remote Patient Monitoring",
      description:
        "Nulla accumsan mi volutpat phasellus et. Donec donec hac porttitor placerat viverra lacus.",
    },
    {
      imgPath: "service-img-3.jpg",
      altText: "Service 2",
      title: "Medical Imaging Analysis",
      description:
        "Nulla accumsan mi volutpat phasellus et. Donec donec hac porttitor placerat viverra lacus.",
    },
    {
      imgPath: "service-img-4.jpg",
      altText: "Service 3",
      title: "Virtual Assistant and Chatbots",
      description:
        "Nulla accumsan mi volutpat phasellus et. Donec donec hac porttitor placerat viverra lacus.",
    },
    {
      imgPath: "service-img-5.jpg",
      altText: "Service 4",
      title: "Robot-Assisted Surgery",
      description:
        "Nulla accumsan mi volutpat phasellus et. Donec donec hac porttitor placerat viverra lacus.",
    },
    {
      imgPath: "service-img-6.jpg",
      altText: "Service 5",
      title: "Farming Services",
      description:
        "Nulla accumsan mi volutpat phasellus et. Donec donec hac porttitor placerat viverra lacus.",
    },
    {
      imgPath: "service-img-2.jpg",
      altText: "Service 6",
      title: "Data Analytics and Insights",
      description:
        "Nulla accumsan mi volutpat phasellus et. Donec donec hac porttitor placerat viverra lacus.",
    },
  ];

  const cardList = cardDetails.map((item, index) => (
    <Card
      key={index}
      imgPath={item.imgPath}
      altText={item.altText}
      title={item.title}
      description={item.description}
    />
  ));
  return (
    <div className="bg-[#060A14] px-[30px] w-full min-h-screen py-10">
      <h2 className="text-center text-white text-3xl uppercase pb-10">
        Our Services
      </h2>
      <div className="auto-rows-min h-full mx-auto bp:w-[540px] md:w-[720px] bp2:w-[960px] grid grid-cols-1 bp:grid-cols-2 bp2:grid-cols-3 gap-6">
        {cardList}
      </div>
    </div>
  );
}
