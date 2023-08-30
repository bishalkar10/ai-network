import React from "react";
import Card from "./Card";
export default function Services() {
  const cardDetails = [
    {
      imgPath: "service-img-3.jpg",
      altText: "Service 2",
      title: "Live Trading Platform",
      description:
        "The AI Network Project expands its offerings to include a live trading platform. Users gain the ability to execute trades directly within the platform, enhancing convenience and reducing the need for third-party exchanges.",
    },
    {
      imgPath: "service-img-4.jpg",
      altText: "Service 3",
      title: "Cross Chain Exchange",
      description:
        "The introduction of cross-chain exchange capabilities allows users to trade assets across different blockchains seamlessly. This feature increases liquidity and widens the range of tradable assets.",
    },
    {
      imgPath: "ai3.jpg",
      altText: "Service 5",
      title: "AI Tools for Trading Platforms",
      description:
        "Users have access to AI-powered tools that offer predictive analytics, risk assessment, and trading strategies. These tools enable both novice and experienced traders to make informed decisions.",
    },
    {
      imgPath: "ai2.jpg",
      altText: "Service 6",
      title: "AI Code Generator Platform for Developers",
      description:
        "The platform introduces an AI code generator that assists developers in automating the code-writing process. This significantly reduces development time and enhances efficiency.",
    },
    {
      imgPath: "ai6.jpg",
      altText: "AI Network App",
      title: "AI Network App",
      description:
        " The AI NETWORK App offers airdrop, earning, and staking facilities. It will be deployed on the Binance Smart Chain (BSC), ensuring fast and low-cost transactions. The launch on decentralized platforms will enhance accessibility, followed by integration with BSC Scan and decentralized wallets, including the OKX Wallet.",
    },
    {
      imgPath: "ai4.jpg",
      altText: "Service 4",
      title: "Free AI Search Engine",
      description:
        "A powerful AI search engine is integrated into the platform, providing users with real-time market insights, trends, and predictions. This empowers traders with data-driven decision-making capabilities.",
    },
    {
      imgPath: "ai1.jpg",
      altText: "Service 6",
      title: "AI Website Generator",
      description:
        "Content creators benefit from the AI website generator, which simplifies the creation of websites. This tool eliminates the need for extensive coding knowledge, democratizing website development..",
    },
    {
      imgPath: "ai5.jpg",
      altText: "Service 6",
      title: "Exchanges Listings and Partnerships",
      description:
        "The platform strives to be listed on various cryptocurrency exchanges, increasing its accessibility and exposure. Strategic partnerships are established to foster ecosystem growth and collaboration.",
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
    <section
      id="services"
      className="bg-[#060A14] px-3 pt-20 w-full min-h-screen"
    >
      <h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
        Our Services
      </h2>
      <div className="auto-rows-min h-full mx-auto bp:w-[540px] md:w-[720px] bp2:w-[960px] grid grid-cols-1 bp:grid-cols-2 bp2:grid-cols-3 gap-6">
        {cardList}
      </div>
    </section>
  );
}
