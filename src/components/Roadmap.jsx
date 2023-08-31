import React from "react";
import { Timeline } from "antd";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="flex flex-col justify-start bg-[#060A14] px-3 pt-20 w-full min-h-screen mx-auto bp:max-w-[540px] md:max-w-[720px] bp2:max-w-[960px]"
    >
      <h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
        Roadmap
      </h2>
      <Timeline
        mode="alternate"
        className="mt-16 text-white flex-auto"
        items={[
          {

            children:<> <p>AI NETWORK App (Airdrop, Earning And Staking Facilities)</p> <br/>
            <p>Deployment On BSC Smart Chain </p>
            <br/>
            <p>Launch On Decentralised Platforms</p>
            <br/>
            <p>BSC Scan And Decentralised Wallets Update </p>
            <br/>
            <p>OKX Wallet Listing </p>
             </>
             ,
            label: "Phase 1",
            color: "green",
          },
          {
            children:<> <p>Live Trading Platform</p> <br/>
            <p>Cross Chain Exchange</p>
            <br/>
            <p>Free AI Search Engine </p>
            <br/>
            <p>AI Tools For Trading Platforms </p>
            <br/>
             </>,
            label: "Phase 2",
            color: "green",
          },
          {
            children:<> <p>AI Code Generator Platform For Developers</p> <br/>
            <p>AI Website Generator</p>
            <br/>
            <p>AI Fun Tube (Earning Platform)</p>
             </>
             ,
            label: "Phase 3",
            color: "green",
          },
          {
            children:<> <p>Exchanges Listings And Partnerships Are Ahead </p> <br/>
            <p>All Information </p>
            <br/>
            <p>Coming Soon....</p>
             </>,
            label: "Phase 4",
            color:"green"
          },
        ]}
      />
    </section>
  );
}
// .ant-timeline-item-content
// .ant-timeline-item-tail

