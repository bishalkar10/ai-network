export default function Refer() {
  const data = [
    { level: "1", earning: "20% self mining", token: "1000" },
    { level: "2", earning: "15% self mining", token: "5000" },
    { level: "3", earning: "10% self mining", token: "10000" },
    { level: "4", earning: "8% self mining ", token: "15000" },
    { level: "5", earning: "5% self mining ", token: "20000" },
    { level: "6", earning: "3% self mining ", token: "25000" },
    { level: "7", earning: "2% self mining ", token: "26000" },
    { level: "8", earning: "2% self mining ", token: "30000" },
    { level: "9", earning: "2% self mining ", token: "40000" },
    { level: "10", earning: "2% self mining", token: "50000" },
    { level: "11", earning: "3% self mining", token: "55000" },
    { level: "12", earning: "3% self mining", token: "60000" },
    { level: "13", earning: "4% self mining", token: "70000" },
    { level: "14", earning: "4% self mining", token: "80000" },
    { level: "15", earning: "5% self mining", token: "90000" },
    { level: "16", earning: "5% self mining", token: "100000" },
  ];
  const cardList = data.map((item, index) => <Card key={index} item={item} />);
  return (
    <section className="text-white pt-20 px-3 ">
      <h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
        Refer and Earn
      </h2>
      <p className="text-3xl text-center mb-8 font-bold font-Exo ">
        Direct referral <span className="text-[#59C09D] text-5xl">10%</span>
      </p>
      <div className="grid grid-cols-1 gap-6 bp:max-w-[516px] md:grid-cols-2 md:max-w-[720px] bp2:grid-cols-3 bp2:max-w-[960px] mx-auto">
        {cardList}
      </div>
    </section>
  );
}

export const Card = ({ item }) => {
  const { level, earning, token } = item;
  return (
    <div className="hover:ring-2 ring-[#59C09D] rounded-lg p-6 bg-[#121320] max-w-[350px] w-full mx-auto">
      <h4 className="text-3xl  font-bold font-Exo ">
        Level <span className="text-[#59C09D] text-5xl">{level}</span>
      </h4>
      <p className="font-Inter mt-2 text-center">Earning : {earning}</p>
      <p className="font-Inter mt-2 text-center">{token} Token</p>
    </div>
  );
};
