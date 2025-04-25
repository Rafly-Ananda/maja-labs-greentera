import LogoTransition from '@/assets/logo-offset.svg';
import projectImage from '@/assets/carbon-projects.png';
import Point from '@/assets/point.svg';

import Image from 'next/image';

import VoteCard from '@/components/VoteCard';

const voteContent = [
  'Distribution of tokenized carbon credits, including airdrops',
  'Carbon Tokens Markets Operations',
  'Participation in the new mangrove restoration projects',
  'Development of the Mangrove DAO',
  'Issuance of new Mangrove tokens to crowdfund new restoration projects'
];

export default function Home() {
  return (
    <div className="w-full lg:w-[1180px] lg:p-0 p-4">
      {/* Offset Fixed Navbar */}
      <div className="pt-[50px] lg:pt-[85px]"></div>

      {/* Main Section */}
      <div className="bg-[#f3f3fe] rounded-xl flex items-center justify-center flex-col text-center lg:pt-28 lg:px-28 lg:pb-16 p-5">
        <ul className="font-[family-name:var(--font-playfair)] text-[24px] lg:text-6xl text-[#222533] hidden lg:block">
          <li>Mangrove DAO is focused</li>
          <li>on restoration of degraded</li>
          <li>mangrove habitats in</li>
          <li>myanmar and globally</li>
        </ul>

        <ul className="font-[family-name:var(--font-playfair)] text-[24px] lg:text-6xl text-[#222533] lg:hidden">
          <li>Mangrove DAO is focused on</li>
          <li>restoration of degraded mangrove</li>
          <li>habitats in myanmar and globally</li>
        </ul>

        <p className="font-[family-name:var(--font-montserrat)] mt-5 lg:mt-20 text-[14px] lg:text-xl">
          Mangrove DAO is a Decentralized Autonomous Organization. It implements
          novel governance mechanisms to empower the community of TREE coin
          holders.
        </p>

        <ul className="font-[family-name:var(--font-montserrat)] flex mt-5 lg:mt-16 uppercase text-[10px] lg:text-sm">
          <div className="flex flex-col items-center gap-4">
            <li className="hover:cursor-1ter">read the full tree coin story</li>
            <li className="hover:cursor-pointer">wif commitment</li>
          </div>
          <div className="flex flex-col gap-4">
            <li className="hover:cursor-pointer">how to hold tokens?</li>
            <li className="hover:cursor-pointer">
              how to trade mangroe tokens
            </li>
          </div>
        </ul>
      </div>

      {/* Token Explanation */}
      <div className="lg:mt-20 mt-10 flex items-center justify-center flex-col">
        <div className="lg:w-[64px] lg:h-[64px] w-[32px] h-[32px] relative">
          <Image src={LogoTransition} layout="fill" alt="Nav Logo" />
        </div>

        <ul className="font-[family-name:var(--font-playfair)] text-[20px] lg:text-4xl text-center text-[#222533] lg:leading-12 mt-6">
          <li>MANGROVE token is the new digital</li>
          <li>representation of 1 planted mangrove in</li>
          <li>the TREE coin project and the governance</li>
          <li>token of the Mangrove DAO. It is issued on</li>
          <li>Polygon blockchain.</li>
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
            Verified carbon credits will be tokenized by WIF or by an appointed
            agent on behalf of WIF using Toucan Bridge, as fractionalized NFT
            tokens (TCO2-VCS-1764-2020).
          </p>

          <p>
            Blue Carbon Reference Token pool will be launched to represent 1
            generic VCU of Blue Carbon. The liquidity pool for Blue Carbon token
            will then be listed and traded on Sushiswap.
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-10 lg:mt-20 flex items-center justify-center flex-col bg-[#f0f0f0] rounded-xl p-8 lg:p-16">
        <div className="flex items-start justify-start w-full">
          <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-left">
            Details
          </h1>
        </div>

        <ul className="grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-1 w-full lg:mt-10 mt-5 font-[family-name:var(--font-hanken)] uppercase font-light text-sm gap:5 lg:gap-10">
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">web-sites</span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                mangrovedao.earth
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">dao voting</span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                Snapshot
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">dao treasury</span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                GnosisSafe multisig
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">ethereum ens</span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                mangrovedao.earth
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">
                tco2 tokenization
              </span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                toucan bridge
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">liquidity pool</span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                mangrove/usdc
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">
                dao communications
              </span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                D iscord
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">social media</span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                Medium
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] lg:text-base">reference token</span>
              <span className="font-[family-name:var(--font-playfair)] font-medium lg:text-2xl lowercase text-[16px]">
                MRT
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
      <div className="bg-[#e1f2f0] rounded-xl flex flex-col items-center justify-center text-center lg:pt-28 lg:px-20 lg:pb-16 relative mt-10 lg:mt-20 p-5 pb-10">
        <div>
          <div className="w-full lg:w-[60%] px-4 lg:pt-20 pt-5">
            <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center">
              Mangrove Project
            </h1>

            <div className="font-[family-name:var(--font-hanken)] mt-10 font-light">
              <p className="lg:text-2xl text-[14px]">
                The project replants severely degraded mangroves in the
                Ayeyarwady region of Myanmar. The project&apos;s developer is
                Worldview International Foundation, one of the world&apos;s most
                respected eco heroes. Founded in 1979, it established national
                parks in Myanmar and Sri Lanka, planted tens of millions of
                trees, and provided hundreds of jobs on a regular basis.
              </p>

              <p className="text-[14px] lg:text-[19px] lg:mt-10 mt-5">
                To ensure the project&apos;s long term sustainability, WIF uses
                a community-based model to educate and employ locals, to provide
                scholarships and help schools, to support families and gender
                equality.
              </p>

              <p className="uppercase mt-10 font-medium lg:text-base text-[10px]">
                verra project page
              </p>
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

        <div className="bg-white lg:mt-60 mt-10 w-full h-full rounded-xl p-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-[16px] lg:text-2xl">
            Project carbon curve
          </h2>

          <ul className="flex items-center justify-center mt-10 text-5xl gap-10 font-[family-name:var(--font-montserrat)] font-medium">
            <li className="flex flex-col">
              <span className="text-[#186f64] lg:text-[48px] text-[24px] font-[family-name:var(--font-hanken)]">
                3,680,126
              </span>
              <span className="uppercase text-sm mt-4 font-[family-name:var(--font-hanken)] font-light lg:text-[14px]">
                total estimated
              </span>
            </li>
            <li className="flex flex-col">
              <span className="text-[#e85531] lg:text-[48px] text-[24px] font-[family-name:var(--font-hanken)]">
                165,865
              </span>
              <span className="uppercase text-sm mt-4 font-[family-name:var(--font-hanken)] font-light lg:text-[14px]">
                total issued
              </span>
            </li>
          </ul>
        </div>

        <div className="lg:w-[65%] px-4 lg:pt-10">
          <div className="font-[family-name:var(--font-hanken)] mt-10 font-light">
            <p className="text-[14px] lg:text-[19px] mt-10">
              The confirmed commitment from WIF is to pledge 8% of all the total
              carbon yield value (post Verra buffer) to Mangrove DAO starting
              from the 2021 vintage. 4331 tonnes were transferred in 2022, out
              of which 4200 tonnes were tokenized (subject to 3% tokenization
              fee)
            </p>

            <p className="uppercase mt-10 font-medium lg:text-base text-[10px]">
              Public pledge
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="mt-10 flex items-center justify-center flex-col rounded-xl lg:p-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center">
          Roadmap
        </h1>

        <ul className="mt-5 lg:mt-20 w-fit">
          {/* Milestone 1 */}
          <li className="grid grid-cols-[auto_1fr]">
            <div className="text-[#704ddc] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[10%]">
              2017
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:gap-6 font-light lg:text-[24px] text-[14px] flex items-center justify-start gap-2">
              <div className="lg:min-w-[20px] lg:min-h-[20px] w-[10px] h-[10px] relative flex items-center justify-center">
                <Image src={Point} layout="fill" alt="Point Logo" />
              </div>
              TREE coins issued and listed on Lykke Exchange
            </div>
          </li>

          {/* Milestone 2 */}
          <li className="grid grid-cols-[auto_1fr] mt-10">
            <div className="text-[#704ddc] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[10%]">
              2018
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:gap-6 font-light lg:text-[24px] text-[14px] flex items-center justify-start gap-2">
              <div className="lg:min-w-[20px] lg:min-h-[20px] w-[10px] h-[10px] relative flex items-center justify-center">
                <Image src={Point} layout="fill" alt="Point Logo" />
              </div>
              WIF mangrove restoration project registered by Verra
            </div>
          </li>

          {/* Milestone 3 */}
          <li className="grid grid-cols-[auto_1fr] mt-10">
            <div className="text-[#704ddc] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[10%]">
              2021
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:text-[24px] text-[14px] font-light flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                December 2, 2021. Lykke delisting announced.
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                January 2, 2022. Migration from Lykke ended. The later requests
                will be considered on an ad hoc basis.
              </div>
            </div>
          </li>

          {/* Milestone 4 */}
          <li className="grid grid-cols-[auto_1fr] mt-10">
            <div className="text-[#704ddc] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[10%]">
              2022
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:text-[24px] text-[14px] font-light flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                GnosisSafe Multisig created
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Interim treasury holders elected
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                First Blue Carbon credits tokenized and sent to the Treasury
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Mangrove Removal Tonne on Toucan Protocol
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Treasury distribution proposals DAO voting
              </div>
            </div>
          </li>

          {/* Milestone 5 */}
          <li className="grid grid-cols-[auto_1fr] mt-10">
            <div className="text-[#704ddc] font-[family-name:var(--font-playfair)] text-[15px] lg:text-3xl lg:mr-20 mr-5 font-semibold w-[10%]">
              2022
            </div>
            <div className="font-[family-name:var(--font-hanken)] lg:text-[24px] text-[14px] font-light flex flex-col items-start justify-start gap-2">
              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Migration of the Treasury to SafeSnap or similar mechanism
                allowing direct distribution of funds based on DAO voting
              </div>

              <div className="flex items-center justify-start gap-2 lg:gap-6 font-light">
                <div className="lg:min-w-[20px] lg:min-h-[20px] min-w-[10px] min-h-[10px] relative flex items-center justify-center">
                  <Image src={Point} layout="fill" alt="Point Logo" />
                </div>
                Mangrove DAO development
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Powered By */}
      <div className="mt-14 flex items-center justify-center flex-col bg-[#f0f0f0] rounded-xl p-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-[22px] lg:text-5xl text-center">
          Powered By
        </h1>
      </div>

      {/* Footer */}
      <div className="mt-5 lg:mt-14 h-[100px] flex items-center justify-center lg:just-between">
        <h4 className="font-[family-name:var(--font-hanken)] text-[12px] lg:text-lg font-light hidden lg:block">
          &copy; 2025 Mangrove DAO. All rights reserved.
        </h4>

        <ul className="flex flex-col items-center justify-center font-[family-name:var(--font-hanken)] text-[12px] lg:text-lg font-light lg:hidden">
          <li>&copy; 2025 Mangrove DAO.</li>
          <li>All rights reserved.</li>
        </ul>
      </div>
    </div>
  );
}
