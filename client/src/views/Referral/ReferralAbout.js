import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text';
import './Referral.css';

const ReferralAbout = () => {
  return (
    <>
      <div className="p-5 relative w-1/2 text-center m-auto">
        <h1 className="text-white text-5xl text-center font-mono ">
          About Referral Program
        </h1>
        <br />
        <p class="  text-xl text-center text-white mt-5">
          Every user who decides to build the business through team expansion,
          will gain access to extra benefits which are paid at different levels
          respectively.
        </p>
        <p class="  text-xl text-center text-white mt-5">GENERATION 1= 10%</p>
        <p class="  text-xl text-center text-white mt-5">GENERATION 2= 5%</p>
        <p class="  text-xl text-center text-white mt-5">GENERATION 3= 3%</p>
        <br />
        <img
          className="rounded-t-lg m-auto p-2"
          src="img/referral/tree.png"
          alt=""
        />
        <br />
        <br />
        <br />
        <Link to={'/referral'}>
          <button
            href="#"
            className="float-right m-auto justify-center inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-[#1b65a7] bg-transparent  border border-white  "
          >
            Back To Referral
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ReferralAbout;
