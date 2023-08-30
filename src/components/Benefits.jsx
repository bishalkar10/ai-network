import React from "react";
import { Avatar, List } from "antd";

const data = [
  {
    title: "Phase 1",
    description: "10 lakh Coin price 0.01$",
  },
  {
    title: "Phase 2",
    description: "20 Lakh coin price 0.02$",
  },
  {
    title: "Phase 3",
    description: "40 Lakh coin price 0.04$",
  },
  {
    title: "Phase 4",
    description: "80 Lakh coin price 0.08$",
  },
  {
    title: "Phase 5",
    description: "1Cr coin price 0.1$",
  },
  {
    title: "Phase 6",
    description: "2Cr coin price 0.2$",
  },

  {
    title: "Phase 7",
    description: "4Cr coin price 0.4$",
  },
  {
    title: "Phase 8",
    description: "8Cr coin price 0.8$",
  },
  {
    title: "Phase 9",
    description: "10Cr coin price 1$",
  },
  {
    title: "Phase 10",
    description: "20Cr coin price 1.5$",
  },
  {
    title: "",
    description: "Exchange listing 2$ coin price",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="flex flex-col justify-start items-center bg-[#060A14] px-3 pt-20 w-full min-h-screen flex-wrap"
    >
      <h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
        Benefits
      </h2>
      <img
        src="/ai-7.jpg"
        className="rounded mb-8 hover:ring-2 ring-[#59C09D]"
        alt=""
        width={250}
        height={380}
      />

      <List
        size="large"
        style={{ color: "white" }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              key={index}
              title={<a href="https://ant.design">{item.title}</a>}
              description={<p>{item.description}</p>}
            />
          </List.Item>
        )}
      />
    </section>
  );
};

export default Benefits;
