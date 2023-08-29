import React from 'react'
import { Timeline } from 'antd'

export default function Roadmap() {

  return (
<section id='roadmap'  className="flex flex-col justify-start bg-[#060A14] px-3 pt-20 w-full min-h-screen">
<h2 className="text-center text-white text-3xl uppercase pb-10 font-bold">
Roadmap
      </h2>
      <Timeline mode='alternate'  className='mt-16 text-white flex-auto'
    items={[
      {
        children: ' AI NETWORK App: The AI NETWORK App offers airdrop, earning, and staking facilities. It will be deployed on the Binance Smart Chain (BSC), ensuring fast and low-cost transactions. The launch on decentralized platforms will enhance accessibility, followed by integration with BSC Scan and decentralized wallets, including the OKX Wallet.',
        label:"Phase 1",
        color:"green"
      },
      {
        children: 'Live Trading Platform and AI Tools: This phase introduces a live trading platform with cross-chain exchange capabilities. The addition of a free AI search engine and AI tools for trading platforms empowers users with advanced trading insights.',
        label:"Phase 2",
color:"green"
      },
      {
        children: 'AI Code and Website Generator: The project expands its offerings to developers with an AI code generator platform and an AI website generator. These tools streamline development processes and enhance efficiency.',
        label:"Phase 3",
        color:"green"
      },
      {
        children: 'Exchanges Listings and Partnerships: The final phase focuses on listing the platform on various exchanges and establishing strategic partnerships to foster growth and adoption.',
        label:"Phase 4",
        
      },
    ]}
  />
</section>
  )
}
// .ant-timeline-item-content
// .ant-timeline-item-tail