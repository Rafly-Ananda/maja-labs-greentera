'use client';

import { useRef } from 'react';

// import LogoTransition from '@/assets/terra-logo.png';
import projectImage from '@/assets/carbon-projects.png';
// import Point from '@/assets/point.svg';
import ablLogo from '@/assets/abl-logo.png';
import majaCorpLogo from '@/assets/maja-corp.png';
import nft_1 from '@/assets/nfts/9.png';
import nft_2 from '@/assets/nfts/10.png';
import nft_3 from '@/assets/nfts/11.png';
import nft_4 from '@/assets/nfts/12.png';
import nft_5 from '@/assets/nfts/13.png';
import nft_6 from '@/assets/nfts/14.png';
import nft_7 from '@/assets/nfts/21.png';
import nft_8 from '@/assets/nfts/22.png';
import nft_9 from '@/assets/nfts/23.png';
import nft_10 from '@/assets/nfts/26.png';

import Navbar from '@/components/Navbar';

import { HiArrowSmallRight } from 'react-icons/hi2';

import Image from 'next/image';

import VoteCard from '@/components/VoteCard';

const voteContent = [
  'Mangrove planting linked to digital tokens',
  'Environmental restoration through blockchain transparencys',
  'Collaboration between Maja Labs, Arunika',
  'Public engagement for sustainable future',
  'Launch event at Angke-Kapuk, Jakarta'
];

const nftImages = [
  nft_1,
  nft_2,
  nft_3,
  nft_4,
  nft_5,
  nft_6,
  nft_7,
  nft_8,
  nft_9,
  nft_10
];

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const mangroveProjectref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        detailsRef={detailsRef}
        mangroveProjectref={mangroveProjectref}
      />
      <div className="w-full lg:w-[1180px] lg:p-0 p-4">
        {/* Offset Fixed Navbar */}
        <div className="pt-[50px] lg:pt-[85px]"></div>

        {/* Main Section */}
        <div className="bg-[#fbcf01] rounded-xl flex items-center justify-center flex-col text-center lg:pt-28 lg:px-20 lg:pb-16 p-5 lg:mt-10">
          <ul className="font-[family-name:var(--font-playfair)] text-[24px] lg:text-6xl text-[#222533] hidden lg:block">
            <li>Driving mangrove restoration</li>
            <li>with blockchain-powered</li>
            <li>community action</li>
            <li>Indonesia and globally</li>
          </ul>

          <ul className="font-[family-name:var(--font-playfair)] text-[24px] lg:text-6xl text-[#222533] lg:hidden">
            <li>Driving mangrove restoration</li>
            <li>with blockchain-powered</li>
            <li>community action</li>
            <li>Indonesia and globally</li>
          </ul>

          <p className="font-[family-name:var(--font-montserrat)] mt-5 lg:mt-20 text-[14px] lg:text-xl">
            Mangrove-Backed Token is a community-driven initiative. Through
            innovative governance mechanisms, it empowers participants to take
            active roles in environmental restoration using blockchain
            technology.
          </p>

          <div className="font-[family-name:var(--font-montserrat)] flex gap-10 mt-5 lg:mt-16 uppercase text-[10px] lg:text-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="hover:cursor-pointer flex items-center justify-center gap-2">
                <HiArrowSmallRight className="text-xl" />
                read the full story
              </div>
              <div className="hover:cursor-pointer flex items-center justify-center gap-2">
                <HiArrowSmallRight className="text-xl" />
                commitment
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="hover:cursor-pointer flex items-center justify-center gap-2">
                <HiArrowSmallRight className="text-xl" />
                how to hold tokens?
              </div>
              <div className="hover:cursor-pointer flex items-center justify-center gap-2">
                <HiArrowSmallRight className="text-xl" />
                how to trade tokens
              </div>
            </div>
          </div>
        </div>

        {/* Token Explanation */}
        <div
          className="lg:mt-20 mt-10 flex items-center justify-center flex-col"
          ref={aboutRef}
        >
          {/* <div className="lg:w-[64px] lg:h-[64px] w-[32px] h-[32px] relative">
          <Image src={LogoTransition} layout="fill" alt="Nav Logo" />
        </div> */}

          <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center font-bold">
            <span className="text-[#52703b]">GREEN</span>
            <span className="text-[#fbcf01]">TERA</span>
          </h1>

          <ul className="font-[family-name:var(--font-playfair)] text-[20px] lg:text-4xl text-center text-[#222533] lg:leading-12 mt-6">
            <li>Mangrove-Backed Token is a joint project</li>
            <li>by Maja Labs and Arunika Bumi Lestari.</li>
            <li>Each token represents one planted mangrove.</li>
            <li>It uses blockchain for transparency and</li>
            <li>promotes climate action and education.</li>
          </ul>

          <p className="font-[family-name:var(--font-montserrat)] text-[14px] lg:text-xl lg:mt-32 mt-10">
            Mangrove DAO members can vote on:
          </p>

          <ul className="grid lg:grid-cols-5 lg:gap-6 lg:mst-16 mt-10 grid-cols-2 gap-4">
            {voteContent.map((e, i) => (
              <li key={e + i}>
                <VoteCard content={e} />
              </li>
            ))}
          </ul>

          <div className="font-[family-name:var(--font-montserrat)] lg:w-[60%] mt-10 grid grid-cols-1 gap-5 lg:text-base text-[14px]">
            <p>
              Maja Labs and Arunika Bumi Lestari are launching a mangrove-backed
              token to support coastal restoration with blockchain transparency.
              Each token represents one planted mangrove and encourages public
              action for the planet.
            </p>

            <p>
              The project will be introduced at the TERA Batch-3 event on April
              26, 2025, in Angke-Kapuk, Jakarta. It aims to inspire sustainable
              living and youth engagement through real-world impact and digital
              innovation.
            </p>
          </div>
        </div>

        {/* Nfts */}
        <div
          className="mt-10 flex items-center justify-center flex-col rounded-xl lg:p-16"
          ref={detailsRef}
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center">
            Featured NFTs
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-5 mt-10">
            {nftImages.map((e, i) => (
              <div
                key={i}
                className="lg:w-[205px] lg:h-[287px] w-[191px] h-[191px] relative"
              >
                <Image
                  src={e}
                  layout="fill"
                  alt="nft"
                  className=" rounded-xl"
                />
              </div>
            ))}
          </div>

          <a
            className="hover:cursor-pointer text-[0.85rem] bg-[#fbcf01] rounded-3xl px-10 py-3 font-medium w-fit mt-10 font-[family-name:var(--font-montserrat)]"
            href="https://opensea.io/collection/greentera-mangrove"
          >
            Get NFTs
          </a>
        </div>

        {/* Details */}
        <div className="mt-10 flex items-center justify-center flex-col bg-[#fbcf01] rounded-xl p-8 lg:p-16">
          <div className="flex items-start justify-start w-full">
            <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-left">
              Details
            </h1>
          </div>

          <ul className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 w-full lg:mt-10 mt-5 font-[family-name:var(--font-hanken)] uppercase font-light text-sm gap:5 lg:gap-10">
            <li>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] lg:text-base">
                  REAL-WORLD ACTION
                </span>
                <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                  Mangrove planting at Hutan Lindung Angke-Kapuk, Jakarta
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] lg:text-base">LAUNCH EVENT</span>
                <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                  TERA Batch-3, April 26, 2025
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] lg:text-base">
                  PARTNER ORGANIZATIONS
                </span>
                <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                  PT Arunika Bumi Lestari, Maja Labs
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] lg:text-base">
                  PROGRAM OBJECTIVE
                </span>
                <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                  To promote sustainable coastal restoration and youth
                  environmental engagemen
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Specification */}
        {/* <div className="flex items-center justify-center flex-col rounded-xl p-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl text-center">
          Specification
        </h1>

        <div className="w-full">
          <table className="w-full">
            <thead>
              <th></th>
              <th></th>
              <th>Heyerdahl Climate Pioneers</th>
              <th></th>
              <th>Mangrove DAO</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td class="styled__TitleCol-sc-vpfery-11 ihxxny">
                  <div class="Animate__FadeIn-sc-1sy4gy5-0 kXfzT">
                    <div class="styled__Content-sc-vpfery-6 kwGyOa">token</div>
                  </div>
                  <div class="styled__Back-sc-vpfery-7 gdWXHO connector"></div>
                </td>
                <td class="styled__BlankCol-sc-vpfery-12 fdsJwf"></td>
                <td class="styled__Col1-sc-vpfery-8 cklhWU">
                  <div class="Animate__FadeIn-sc-1sy4gy5-0 kXfzT">
                    <div class="styled__Content-sc-vpfery-6 kwGyOa">
                      Tree Coin
                    </div>
                  </div>
                  <div class="styled__Back-sc-vpfery-7 gdWXHO connector"></div>
                </td>
                <td class="styled__BlankCol-sc-vpfery-12 fdsJwf"></td>
                <td class="styled__Col1-sc-vpfery-8 styled__Col2-sc-vpfery-9 cklhWU dDXekY">
                  <div class="Animate__FadeIn-sc-1sy4gy5-0 kXfzT">
                    <div class="styled__Content-sc-vpfery-6 kwGyOa">
                      MANGROVE Token
                    </div>
                  </div>
                  <div class="styled__Back-sc-vpfery-7 gdWXHO connector"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

        {/* Mangrove Project */}
        <div
          className="bg-[#fbcf01] rounded-xl flex flex-col items-center justify-center text-center lg:pt-28 lg:px-20 lg:pb-16 relative mt-10 lg:mt-20 p-5 pb-10"
          ref={mangroveProjectref}
        >
          <div>
            <div className="w-full lg:w-[60%] px-4 lg:pt-10 pt-5">
              <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center">
                Mangrove-Backed Token Project
              </h1>

              <div className="font-[family-name:var(--font-hanken)] mt-10 font-light">
                <p className="lg:text-2xl text-[14px]">
                  The Mangrove-Backed Token project is a collaborative
                  environmental initiative between Maja Labs and Arunika Bumi
                  Lestari that bridges ecological restoration with blockchain
                  technology. At its core, this project empowers the public to
                  take part in meaningful climate action by symbolically
                  adopting mangrove trees through digital tokens. Each token
                  represents a real mangrove planted, functioning not only as a
                  symbol of individual commitment to the planet but also as a
                  transparent and traceable record of environmental
                  contribution, powered by blockchain.
                </p>

                <p className="text-[14px] lg:text-[19px] lg:mt-10 mt-5">
                  By integrating technology with sustainability, the project
                  aims to inspire a new generation to participate in the healing
                  of Earth. Beyond environmental restoration, it serves as a
                  movement to shift public behavior toward conscious living —
                  connecting creativity, technology, and nature. Through
                  collaborations with artists, community leaders, and
                  eco-advocates, this initiative amplifies awareness and builds
                  a collective legacy rooted in climate responsibility.
                </p>

                {/* <p className="uppercase mt-10 font-medium lg:text-base text-[10px]">
                verra project page
              </p> */}
              </div>
            </div>

            {/* Div for offset */}
            <div className="hidden lg:block">
              <div className="grow"></div>
              <Image
                className="absolute rounded-xl -right-36 top-20"
                src={projectImage}
                width={582}
                height={820}
                alt="project-image"
              />
            </div>
          </div>

          <div className="bg-[#52703b] lg:mt-14 mt-10 w-full h-full rounded-xl p-10 text-white">
            <h2 className="font-[family-name:var(--font-playfair)] text-[16px] lg:text-2xl">
              Targeted Goals
            </h2>

            <div className="px-4">
              <div className="font-[family-name:var(--font-hanken)] mt-10 font-light">
                <p className="text-[14px] lg:text-[19px] mt-10">
                  The program aims to raise stakeholder awareness about
                  sustainable rehabilitation and restoration efforts led by PT
                  ABL and Maja Corp. It seeks to demonstrate their commitment to
                  environmental stewardship and future generations through
                  collective climate action. By highlighting the TERA
                  program&apos;s scalability, it encourages replication in other
                  coastal areas across Indonesia. The initiative also empowers
                  Gen Z to stay engaged in environmental issues and fosters
                  discussions for innovative, long-term solutions to protect the
                  planet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        {/* <div className="mt-10 flex items-center justify-center flex-col rounded-xl lg:p-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center">
          Roadmap
        </h1>

        <ul className="mt-5 lg:mt-20 w-fit">
          <li className="flex">
            <div className="text-[#f291c9] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[100px]">
              Current
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:text-[24px] text-[14px] font-light flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Public introduction of the project through TERA Batch-3 event
                (April 26, 2025).
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Symbolic mangrove planting ceremony to align with initial batch
                of token issuance.
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Public education and media exposure (online media coverage,
                engagement with Gen Z, NGOs, and corporates).
              </div>
            </div>
          </li>

          <li className="flex mt-5">
            <div className="text-[#f291c9] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[100px]">
              Next
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:text-[24px] text-[14px] font-light flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Scaling the planting program toward the full goal mangrove
                planting target.
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Continued issuance of MANGROVE tokens to match verified planting
                efforts.
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Integration of token holders into a DAO (governance, voting on
                new locations, etc.).
              </div>
            </div>
          </li>

          <li className="flex mt-5">
            <div className="text-[#f291c9] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[100px]">
              Future
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:text-[24px] text-[14px] font-light flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Onboarding international stakeholders and funders.
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Adding more features to the token (e.g., staking, carbon credit
                linkage, exclusive content).
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Replicating the model in other coastal areas in Indonesia or
                globally.
              </div>
            </div>
          </li>
        </ul>
      </div> */}

        {/* Powered By */}
        <div className="mt-14 flex items-center justify-center flex-col bg-[#52703b] rounded-xl p-16 text-white">
          <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center">
            Powered By
          </h1>

          <div className="flex m-10 flex-col lg:flex-row items-center justify-center gap-10">
            <Image src={ablLogo} width={100} height={100} alt="abl logo" />
            <Image
              src={majaCorpLogo}
              width={250}
              height={100}
              alt="maja corp"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 lg:mt-14 h-[100px] flex items-center justify-center lg:just-between">
          <h4 className="font-[family-name:var(--font-hanken)] text-[12px] lg:text-lg font-light hidden lg:block">
            &copy; 2025 Greentera Project. All rights reserved.
          </h4>

          <ul className="flex flex-col items-center justify-center font-[family-name:var(--font-hanken)] text-[12px] lg:text-lg font-light lg:hidden">
            <li>&copy; 2025 Greentera Project.</li>
            <li>All rights reserved.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
