'use client';

import NavLogo from '@/assets/terra-logo.png';
import Image from 'next/image';

import Hamburger from 'hamburger-react';

import { useState, useEffect, useRef, FC, RefObject } from 'react';

const navLinks = ['about', 'details', 'mangrove project'];

type ComponentProps = {
  aboutRef: RefObject<HTMLDivElement | null>;
  detailsRef: RefObject<HTMLDivElement | null>;
  mangroveProjectref: RefObject<HTMLDivElement | null>;
};

const Navbar: FC<ComponentProps> = (props) => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);

  const topOfPageRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    const { current } = topOfPageRef;

    console.log(current);

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }

    setBurgerClicked(false);
  };

  const scrollToAbout = () => {
    const { current } = props.aboutRef;

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setBurgerClicked(false);
  };

  const scrollToDetails = () => {
    const { current } = props.detailsRef;

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setBurgerClicked(false);
  };

  const scrollToMangroveProject = () => {
    const { current } = props.mangroveProjectref;

    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setBurgerClicked(false);
  };

  const navHandler = [scrollToAbout, scrollToDetails, scrollToMangroveProject];

  useEffect(() => {
    setBurgerClicked(false);
  }, []);

  return (
    <>
      <section ref={topOfPageRef}></section>

      <div className="h-[60px] lg:h-[85px] text-[#222533] flex items-center justify-center font-[family-name:var(--font-montserrat)] z-50 bg-white fixed w-full">
        {/* Desktop Nav */}
        <div className="w-[1180px] lg:flex items-center justify-between hidden ">
          <ul className="flex items-center justify-center gap-10 w-fit">
            <Image
              src={NavLogo}
              width={60}
              height={60}
              alt="Nav Logo"
              onClick={scrollToTop}
              className="hover:cursor-pointer"
            />
            {navLinks.map((e, i) => (
              <li
                className=" uppercase text-[0.85rem] hover:cursor-pointer"
                key={e + i}
                onClick={navHandler[i]}
              >
                {e}
              </li>
            ))}
          </ul>

          <button className="uppercase text-[0.85rem] bg-[#fbcf01] rounded-3xl px-4 py-3 font-medium w-fit hover:cursor-pointer">
            participate
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="w-[1180px] lg:hidden flex items-center justify-between p-5 ">
          <Image
            src={NavLogo}
            width={32}
            height={32}
            alt="Nav Logo"
            className="z-50"
            onClick={scrollToTop}
          />

          <div className="flex items-center z-50">
            <button className="uppercase text-[10px] bg-[#fbcf01] rounded-full lg:rounded-3xl px-[12px] py-[6px] font-medium w-fit h-fit z-50 text-white">
              participate
            </button>
            <div>
              <Hamburger
                size={20}
                toggled={burgerClicked}
                toggle={setBurgerClicked}
              />
            </div>
          </div>

          <div
            className={`bg-white  top-0 bottom-0 right-0 left-0 z-20 ${
              burgerClicked ? 'fixed' : 'hidden'
            }`}
          >
            <ul className="flex flex-col items-center justify-center gap-6 w-screen h-screen relative">
              <li
                className="text-[22px] font-[family-name:var(--font-playfair)]"
                onClick={scrollToAbout}
              >
                About
              </li>
              <li
                className="text-[22px] font-[family-name:var(--font-playfair)]"
                onClick={scrollToDetails}
              >
                Details
              </li>
              <li
                className="text-[22px] font-[family-name:var(--font-playfair)]"
                onClick={scrollToMangroveProject}
              >
                Mangrove Project
              </li>

              <li className="absolute bottom-6">
                <ul className="flex flex-col items-center justify-center font-[family-name:var(--font-hanken)] text-[12px] lg:text-lg font-light lg:hidden">
                  <li>&copy; 2025 Greentera Project.</li>
                  <li>All rights reserved.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
